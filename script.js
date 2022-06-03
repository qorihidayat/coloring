function changeColor() {
  // document.body.setAttribute('class', 'biru-muda');
  document.body.classList.toggle('biru-muda');
}
// ------------------------------------Ruang Lingkup---------------------------
var button = document.querySelector('button');
button.addEventListener('click', changeColor);

const newButton = document.createElement('button');
const textNewButton = document.createTextNode('Random Color');
newButton.appendChild(textNewButton);
newButton.setAttribute('type', 'submit');
button.after(newButton);

// --------------------------- Rumus Random = Math.random() * maximal + minimal-----------------------------------
function rgbRandom() {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
}
newButton.addEventListener('click', rgbRandom);
// --------------------------------------------Bermain Range Input-----------------------
// --------------------------Merah--------------------
const rMerah = document.querySelector('input[name=rMerah]');
function funRed() {
var vMerah = rMerah.value;
var vHijau = rHijau.value;
var vBiru = rBiru.value;
document.body.style.backgroundColor = 'rgb('+ vMerah +','+ vHijau +','+ vBiru +')';
}
rMerah.addEventListener('input', funRed);

// -----------------------------Hijau---------------------
const rHijau = document.querySelector('input[name=rHijau]');
function funGreen() {
var vHijau = rHijau.value;
var vMerah = rMerah.value;
var vBiru = rBiru.value;
document.body.style.backgroundColor = 'rgb('+ vMerah +','+ vHijau +','+ vBiru +')';
}
rHijau.addEventListener('input', funGreen);
// -----------------------------Biru---------------------
const rBiru = document.querySelector('input[name=rBiru]');
function funBlue() {
  var vHijau = rHijau.value;
  var vMerah = rMerah.value;
  var vBiru = rBiru.value;

  document.body.style.backgroundColor = 'rgb('+ vMerah +','+ vHijau +','+ vBiru +')';
}
rBiru.addEventListener('input', funBlue);

document.body.addEventListener('mousemove', function(event) {
  //posisi mouse = parameter.clientX
  //ukuran Browser = innerWidth
  var xPos = Math.round((event.clientX / window.innerWidth) * 255);
  var yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb('+ xPos +', '+ yPos +', 100)';
});
