import Notiflix from 'notiflix';//Notiflix.Notify.success(

function createPromise(position,delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(()=>{
      if (shouldResolve) {
        resolve({position,delay});
      } else {
        reject({position,delay});
      }
    },delay);
  });
}
function callCreatePromise(event){
  event.preventDefault();
 // console.log(obj);

  

  setTimeout(()=>{
    let sumDelay=obj.delay;

  for(let i=1;i<=obj.amount;i++){

    createPromise(i,sumDelay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    sumDelay+=obj.step;
    //console.log(sumDelay);
  }
},obj.delay);
}

const form = document.querySelector('.form');

let obj={};
function objF(event){
  event.preventDefault();
  obj[event.target.name] = Number(event.target.value);
}
form.addEventListener('input', objF);


form.addEventListener('submit', callCreatePromise);
//// 
// const ann = 5;
// const b = {ann};
// console.log(b);