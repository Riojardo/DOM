
document.title = "Modifying the DOM"
console.log(document.title)
function rgbRandom() {
    let x = Math.floor(Math.random() * 255);
    let y = Math.floor(Math.random() * 255);
    let z = Math.floor(Math.random() * 255);
    return "rgb(" + x + "," + y + "," + z + ")";
}

document.body.style.backgroundColor = rgbRandom();

const bodyelement = document.body;
for (const child of bodyelement.children) {
  console.log(child.tagName);
}


