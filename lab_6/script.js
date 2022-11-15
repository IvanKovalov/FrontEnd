downloadButton = document.getElementById("downloadButton");
usersDiv = document.getElementById("UsersDiv");


let users  = [];

downloadButton.onclick = () => {
   clearUsers();
    for (usersCount = 0; usersCount < 5; usersCount++){
        fetch('https://randomuser.me/api')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
         
          users[usersCount] = data['results'][0];
          showUsers();
        });
    }
}



function showUsers() {
    
    usersList = document.createElement("ul");
    usersList.setAttribute("id", "UsersList");
    usersDiv.appendChild(usersList);
    users.forEach(user => {
        const userDataInnerHTML = `
        <li class="user-item">
        <img class="user-item__img"
            src="${user.picture.medium}"
            alt="user picture"
          />
          <p class="user-item__detail">Cell: ${user.cell}</p>
          <p class="user-item__detail">Country: ${user.location.country}</p>
          <p class="user-item__detail">Email: ${user.email}</p>
          <p class="user-item__detail">Coordinates: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}</p>
        </li>`;
        usersList.innerHTML = userDataInnerHTML;
        console.log(user); 
    });
    
}

function clearUsers() {
    usersDiv.innerHTML = '';
    users = [];
}

