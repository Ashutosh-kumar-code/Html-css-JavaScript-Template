

function modedark() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("navbar-dark");

  var log = document.getElementById("log");
  log.classList.toggle("dark-log");

  var leftform = document.getElementById("leftform");
  leftform.classList.toggle("dark-leftform");

  var leftform = document.getElementById("imgpart");
  leftform.classList.toggle("img-dark");

  var icon1 = document.getElementById("person");
  icon1.classList.toggle("dark-icon");

  var icon2 = document.getElementById("phone");
  icon2.classList.toggle("dark-icon");

  var icon3 = document.getElementById("emailicon");
  icon3.classList.toggle("dark-icon");

  var icon4 = document.getElementById("lock");
  icon4.classList.toggle("dark-icon");

  var icon4 = document.getElementById("child");
  icon4.classList.toggle("dark-icon");

  var icon4 = document.getElementById("cube");
  icon4.classList.toggle("dark-icon");

  var g1 = document.getElementById("inlineRadio1")
  g1.classList.toggle("dark-btn");

  var g2 = document.getElementById("inlineRadio2")
  g2.classList.toggle("dark-btn");



  var intr1 = document.getElementById("inlineCheckbox1");
  intr1.classList.toggle("dark-btn");

  var intr2 = document.getElementById("inlineCheckbox2");
  intr2.classList.toggle("dark-btn");

  var intr3 = document.getElementById("inlineCheckbox3");
  intr3.classList.toggle("dark-btn");


  var btn1 = document.getElementById("formbutton");
  btn1.classList.toggle("dark-btn");


  var btn1 = document.getElementById("addBtn");
  btn1.classList.toggle("name-btn");

  var btn1 = document.getElementById("removebtn");
  btn1.classList.toggle("name-btn");


}




function namevalid() {
  var name = document.getElementById("userenter").value;

  if (name == "") {
    document.getElementById("nameErr").innerHTML = "*enter name";

  }
  else if (name != "") {
    document.getElementById("nameErr").innerHTML = "&nbsp;";

  }

}
function numbervalid() {
  var name = document.getElementById("numberenter").value;

  if (name == "") {
    document.getElementById("numErr").innerHTML = "*enter number";

  }
  else if (name != "") {
    document.getElementById("numErr").innerHTML = "&nbsp;";
  }

}

function emailvalid() {
  var name = document.getElementById("emailenter").value;

  if (name == "") {
    document.getElementById("emailErr").innerHTML = "*enter email";

  }
  else if (name != "") {
    document.getElementById("emailErr").innerHTML = "&nbsp;";
  }

}

function passwordvalid() {
  var name = document.getElementById("passenter").value;

  if (name == "") {
    document.getElementById("psdErr").innerHTML = "*enter password";

  }
  else if (name != "") {
    document.getElementById("psdErr").innerHTML = "&nbsp;";
  }

}

function checkGender() {
  var getSelectedValue = document.querySelector(
    'input[name="inlineRadioOptions"]:checked');

  if (getSelectedValue != null) {
    document.getElementById("genderErr").innerHTML
      = "&nbsp;";
  }
  else {
    document.getElementById("genderErr").innerHTML
      = "*You have not selected any gender";
  }
}
function validform() {

  namevalid();
  numbervalid();
  emailvalid();
  passwordvalid();
  checkGender();
}

function nameclick() {
  document.getElementById("nameErr").innerHTML = "&nbsp;";

}

function numclick() {
  document.getElementById("numErr").innerHTML = "&nbsp;";
}
function emailclick() {
  document.getElementById("emailErr").innerHTML = "&nbsp;";
}
function passclick() {
  document.getElementById("psdErr").innerHTML = "&nbsp;";
}
function passclick() {
  document.getElementById("genderErr").innerHTML = "&nbsp;";
}

// --------------------------- addname portion----------------------- 



showNotes();

let addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("nameinput");

  let personname = localStorage.getItem("names");

  if (personname == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(personname);
  }

  notesObj.push(addTxt.value);

  localStorage.setItem("names", JSON.stringify(notesObj));
  addTxt.value = "";
  // console.log(notesObj);

  showNotes();

});

function showNotes() {
  let personname = localStorage.getItem("names");
  if (personname == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(personname);
  }
  let html = "";
  let snum = 1;
  notesObj.forEach(function (element, index) {
    html += `
                
                         <div class="container">
                           
                        <div class="cardpart"> 
                      <div class="cardname">
                      <div class="col-9">  
                      
                            <p1> ${snum++}. ${element}  </p1>
                          
                            </div>
                            <div class="col-3">

                            <button id="${index}" onclick="deleteNote(this.id )" class="btn btn-danger ">Delete</button>
                            </div>
                        </div>
                       
                            </div>
                            </div>
                  `;
  });

  let notesElm = document.getElementById("personname");
  if (notesObj.length != 0) {
    notesElm.innerHTML = html;
  } else {
    notesElm.innerHTML = `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
     Nothing to show! Use "Add " to add Data .`;
  }
}

function deleteNote(index) {

  let personname = localStorage.getItem("names");
  if (personname == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(personname);
  }

  notesObj.splice(index, 1);
  localStorage.setItem("names", JSON.stringify(notesObj));
  showNotes();
}

function removeall(index) {

  notesObj.splice(index);
  localStorage.setItem("names", JSON.stringify(notesObj));
  showNotes();
}



let exampleColorInput;
const defaultColor = "#d6cdbe";
window.addEventListener("load", startup, false);

function startup() {
  colorWell = document.querySelector("#exampleColorInput");
  colorWell.value = defaultColor;
  colorWell.addEventListener("input", updateFirst, false);
  colorWell.addEventListener("change", updateAll, false);
  colorWell.select();
}

function updateFirst(event) {
  const p = document.getElementById("namesection");
  if (p) {
    p.style.backgroundColor = event.target.value;
  }

}
// ------------------------------ calculator portion---------------------------

function displaynum(val) {
  document.getElementById("result").value += val;
}

function solve() {
  let x = document.getElementById('result').value;
  let y = eval(x);

  document.getElementById('result').value = y;

}

function clearScreen() {

  document.getElementById('result').value = ''

}

// ------------------------------ clock portion-------------------------------




var hour = document.querySelector(".hours");
var minute = document.querySelector(".minute");
var second = document.querySelector(".second");

var realdate = document.querySelector(".realdate");

function updateClock() {
  var date = new Date();

  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;

  var day = date.getDay();
  var tdate = date.getDate();
  var month = date.getMonth();
  var year = date.getFullYear();
  var dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  realdate.innerHTML = dayName[day] + ", " + monthName[month] + " " + tdate + ", " + year;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

setInterval(updateClock, 1000);

// ------------------------- api fteching portion------------------------

getData();
function getData() {
fetch('https://randomuser.me/api/?results=20&inc=name,location,email,phone,picture')
  // console.log("demo",demo)
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => displayEmployees(obj))

}
function displayEmployees() {
  let output = '';
  let result = obj.results.slice(0);

  result.map(item => {
    output +=
      ` 
        
        <div class="col-6">
     <div class="container ">
    <div class="row">
  
        <div class="card apicard" >
        <div class="container-fluid">
        
            <div class="col-12 upcardpart">
            <img src="${item.picture.medium}" class="card-img-top" alt="..." id="cardimg">
              <p class="card-text"> &nbsp ${item.name.title} ${item.name.first} ${item.name.last}</p>
         </div>
         <p1><b> Phone no: </b>${item.phone}</p1> <br>
         <p1><b> Email: </b>${item.email}</p1> <br>
         <p1><b> Address: </b> ${item.location.street.number}, ${item.location.street.name}, ${item.location.city},  
         ${item.location.state}, ${item.location.country}  </p1>
        </div>
   
    </div>    
    </div>    
    </div>
</div>
    `
  })

  document.querySelector('.members').innerHTML = output;
}