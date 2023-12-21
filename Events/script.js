/*

let important = document.querySelectorAll('.important');

for (let elem of important) {
  elem.setAttribute('title', 'This is an important item');
}

let MyImage = document.querySelectorAll('img');

for (let elem of MyImage) {
  if (elem.classList.contains('important')){  
    console.log(elem)
  }else{
    console.log(elem)
    elem.style.display = 'none';
  }
}

let myParagraph = document.querySelectorAll('p');
myParagraph.forEach((element) => console.log(element.textContent + (element + element.className)));



function rgbRandom() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return "rgb(" + x + "," + y + "," + z + ")";
}


let paragraphcolor = document.querySelectorAll('p');
for (let elem of paragraphcolor){
  if (!elem.classList.contains("")){
    elem.style.backgroundColor = rgbRandom();
  }
}
/*
let paragraphcolor = document.querySelectorAll('p');
for (let elem of paragraphcolor){
  if (elem.classList.length === 0){
    elem.style.backgroundColor = rgbRandom();
  }
}
  let paragraphColor = document.querySelectorAll('p');

for (let elem of paragraphColor) {
  if (!elem.classList.contains("yourSpecificClass")) {
    elem.style.backgroundColor = rgbRandom();
  }
}


document.title = "Modifying the DOM"
console.log(document.title)
function rgbRandom() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return "rgb(" + x + "," + y + "," + z + ")";
}
function getContrastColor(rgbColor) {

  let rgbValues = rgbColor.match(/\d+/g);
  let [r, g, b] = rgbValues;
  console.log(r)

  const brightness = (parseInt(r) * 299 + parseInt(g)* 587 + parseInt(b) * 114) / 1000;

  if (brightness >= 128){
   return ("black")}
  else{
  return ("white")
 }
}

 Liste = {};
Liste.people = ["bob", "andrée", "Eude", "Antoine"];

function addElement() {
  let newarray = []
  while( Liste.people.length > 0)
  newarray.push (Liste.people.splice(Math.floor(Math.random() * Liste.people.length), 1)[0])
  let newSection = document.createElement("section"); // --- on creés d'abord la section
  for (let elem of newarray)// --- on creés un p et un text pour chacun des elem de la liste
  { 
  let newPara = document.createElement("p");
  let newText = document.createTextNode (elem);
  newPara.appendChild(newText);
  
  newPara.style.backgroundColor = rgbRandom();
  newPara.style.color=getContrastColor(newPara.style.backgroundColor);
  newSection.appendChild (newPara);
};
  let currentArticle = document.querySelector("article");
  currentArticle.appendChild(newSection);
}

addElement()


function bodycolor () {
  let bodycol = document.body;
  if (bodycol.style.backgroundColor ==="white"){
    bodycol.style.color ="black " ;
  }else if(bodycol.style.backgroundColor ==="black"){
    bodycol.style.color ="yellow";
  }
 bodycol.style.backgroundColor ="black";
  }
bodycolor();

*/

document.addEventListener("DOMContentLoaded", function() {
  create_Li_Action()
  create_div();
  Date.now()
  getElapsedTime()
  clickOnSquare()
});

function rgbRandom() {
  let x = Math.floor(Math.random() * 255);
  let y = Math.floor(Math.random() * 255);
  let z = Math.floor(Math.random() * 255);
  return "rgb(" + x + "," + y + "," + z + ")";
}

let clickOn_generate_square = (e) => {
  alert("the square is "+ e.target.classList[1]);
  console.log(e.target.classList[1]);
 }

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  let new_square= e.target.cloneNode(true);
  new_square.setAttribute("class","displayedsquare");
  new_square.classList.add( e.target.classList[1])
  document.querySelector('.displayedsquare-wrapper').appendChild(new_square);

  let new_action = document.createElement("li")
  let ul_action = document.querySelector("ul");
  new_action.textContent = getElapsedTime () + " Create a new " +  e.target.classList[1] + " square";
  ul_action.appendChild(new_action);

  new_square.addEventListener('click', clickOn_generate_square)
 
}
const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

/*
function create_div() {
let new_div = document.createElement("div")
new_div.setAttribute("class","displayedsquare");
let first_section = document.querySelector(".displayedsquare-wrapper");
first_section.appendChild(new_div);
}

create_div()

*/

function press_touch(event) {
  let body = document.body; // Use document.body instead of document.querySelectorAll('body')
  
  if (event.code === "Space") {
    body.style.backgroundColor = rgbRandom();
    let new_action = document.createElement("li");
    let ul_action = document.querySelector("ul");
    new_action.textContent = "Le background est désormais : " + document.body.style.backgroundColor;
    ul_action.appendChild(new_action);
  } else if (event.key === "s") {
    let suppress_square = document.querySelector('.displayedsquare-wrapper');
    let displayedSquares = document.querySelectorAll('.displayedsquare');

    displayedSquares.forEach(elem => {
      elem.remove();
    });
  } else if (event.key === "l") {
    let suppress_list = document.querySelector('ul');
    let listItems = suppress_list.querySelectorAll('li');

    listItems.forEach(elem => {
      elem.remove();
    });
  }
}
 
document.addEventListener('keydown', press_touch);




