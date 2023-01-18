import Notiflix from 'notiflix';//Notiflix.Notify.success(

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
  
}

const delay = document.querySelector('[name="delay"]')
const step = document.querySelector('[name="step"]')
const amount = document.querySelector('[name="amount"]')
const btn = document.querySelector('button')
const form = document.querySelector('.form')

let obj={};
function f(event){
  event.preventDefault();
  obj[event.target.name] = event.target.value;
  console.log(obj,"<");
  //createPromise();
}

form.addEventListener('submit', f)