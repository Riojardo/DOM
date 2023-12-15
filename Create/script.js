
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


