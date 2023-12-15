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
*/

function removeLastChild (){
let olist = document.querySelector('ol');
let lastchild = olist.lastElementChild;
olist.insertBefore(lastchild, olist.firstElementChild)

}
removeLastChild ()


function MoveH2 (){
  let section2 = document.querySelectorAll('main > section')[1];
  let section3 = document.querySelectorAll('main > section')[2];
  let h2section2 = section2.querySelector('h2');
  let h2section3 = section3.querySelector('h2');

section2.insertBefore(h2section3,section2.firstChild)
section3.insertBefore(h2section2,section3.firstChild)
}
MoveH2()

function RemoveSection3 (){
  let section3 = document.querySelectorAll('main > section')[2];
  section3.remove()

}

