

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

