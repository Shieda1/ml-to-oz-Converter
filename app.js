// https://www.omnicalculator.com/conversion/ml-to-oz-converter

const v =  document.getElementById('v');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const ozRadio = document.getElementById('ozRadio');
const mlRadio = document.getElementById('mlRadio');

let oz;
let ml = v; 

// labels of the inpust
const variable = document.getElementById('variable');

ozRadio.addEventListener('click', function() {
  variable.textContent = 'ml';
  ml = v;
  result.textContent = '';
});

mlRadio.addEventListener('click', function() {
  variable.textContent = 'oz';
  oz = v;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(ozRadio.checked)
    result.textContent = `oz = ${computeoz().toFixed(5)}`;

  else if(mlRadio.checked)
    result.textContent = `ml = ${computeml().toFixed(5)}`;
})

// calculation

function computeoz() {
  return Number(ml.value) / 29.574;
}

function computeml() {
  return Number(oz.value) * 29.574;
}