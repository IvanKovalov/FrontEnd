let answers = [];
const body = document.querySelector("body");
const answersDiv = document.createElement("div");	
let isValidData = true;
  
function handleFormSubmit(event) {
    event.preventDefault();
    checkForm(applicantForm);
}
  
const applicantForm = document.getElementById('myForm');
applicantForm.addEventListener('submit', handleFormSubmit);
  
function checkForm(formNode) {
    clearAll();
    const { elements } = formNode;
    Array.from(elements).forEach((element) => {
        const { name, value } = element
        validateElement(element.name, element.value);
        console.log({ name, value })
      });
    
	showResponse();
}

const ResponseForm = {
  userName: "Name: ",
  department: "Department: ",
  date: "Birthday date:",
  email: "Your email: ",
  adress: "Adress: ",
}

const ValidateRules = {
  userName: new RegExp(/^[A-ZА-ЯІЇЄ][a-zA-ZА-ЯІЇЄа-яіїє]+ [A-ZА-ЯІЇЄ]\.[A-ZА-ЯІЇЄ]\.$/),
  department: new RegExp(/[a-zA-ZА-ЯІЇЄа-яіїє]$/),
  email: new RegExp(/^[a-z\.-]+@[a-z]+\.com$/),
  adress: new RegExp(/^м\.\s[а-яґєіїА-ЯҐЄІЇ]+$/),
}

const clearAll = () => {
	wrongResult.forEach(element => {
		const field = document.getElementById(element);
        field.style.border = "1px black solid";
	});

	while (answersDiv.firstChild) {
        answersDiv.removeChild(answersDiv.firstChild);
    }
    answers = [];
	isValidData = true;
	wrongResult = [];
}

let wrongResult = [];
const validateElement = (elementName, elementValue) => {
    if (elementName == 'submit_btn') {
        return;
    } else if(elementName == 'date') {
		const answer = document.createElement("p");
		answer.innerHTML = `<b>${ResponseForm[elementName]}</b> ${elementValue}`;
		answers.push(answer);
        return;
    } else if (ValidateRules[elementName].test(elementValue)) {
        const answer = document.createElement("p");
        answer.innerHTML = `<b>${ResponseForm[elementName]}</b> ${elementValue}`;
        answers.push(answer);
    } else {
		isValidData = false;
        const field = document.getElementById(elementName);
        field.style.border = "1px red solid";
        wrongResult.push(elementName);
    }
}

const showResponse = () => {
	if(isValidData){
	const user_info = document.createElement("h3");
	user_info.innerHTML = "Введені дані";
	answersDiv.appendChild(user_info);
	answers.forEach(answer => answersDiv.appendChild(answer));
	body.appendChild(answersDiv);
	}
}

function generateTable () {
	const body = document.body,
		  tbl = document.createElement('table');
	let elementCounter = 1;
	for (i = 0; i < 6; i++) {
		const tr = tbl.insertRow();
		for (j = 1; j <= 6; j++) {
			const td = tr.insertCell();
		  td.appendChild(document.createTextNode(elementCounter));
		  td.setAttribute("id", "cell_" + elementCounter)
		  elementCounter ++;
		}
	}
	const tableDiv = document.createElement('div');
	body.appendChild(tableDiv);
	tableDiv.appendChild(tbl);
}

generateTable();

const myCell = document.getElementById('cell_5');

function generateRandomColor() {
    function generateRandomNum() {
        return Math.floor(Math.random() * 255);
    }
    return `rgb(${generateRandomNum()},${generateRandomNum()},${generateRandomNum()})`;
}

myCell.onclick = () => {
    myCell.style.backgroundColor = document.getElementById('input_color').value;
};

myCell.onmouseover = () => {
    myCell.style.backgroundColor = generateRandomColor();
};

myCell.ondblclick = () => {
	const randColour = generateRandomColor();
	document.querySelectorAll('td').forEach(cell => {
		if(cell.id != "cell_5"){
			cell.style.backgroundColor = randColour;
		}
	});
}
