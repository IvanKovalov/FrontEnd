downloadButton = document.getElementById("downloadButton");
usersDiv = document.getElementById("UsersDiv");


let users  = [];

downloadButton.onclick = () => {
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
        <li >
          <p >Cell: ${user.cell}</p>
          <p >Country: ${user.location.country}</p>
          <p >Postcode: ${user.location.postcode}</p>
          <p >Email: ${user.email}</p>
        </li>`;
        usersList.innerHTML = userDataInnerHTML; 
    });
}

function clearUsers() {

}

