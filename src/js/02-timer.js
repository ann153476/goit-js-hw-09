//console.log();
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] <= new Date()) {
            Notiflix.Notify.info('Please choose a date in the future');
          } else {start.disabled = false;}
    },
  };
  function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }

  let timerId = null;

const myInput = document.querySelector('#datetime-picker');
const start = document.querySelector('[data-start]');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = document.querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');
function addLeadingZero(value) {
    if (String(value).length <= 2) {
      return String(value).padStart(2, '0');
    } else {
      return String(value);
    }
  }

start.disabled = true;

function startTimer(){
start.disabled = true;

timerId = setInterval(()=> {
const date = new Date();//время сейчас
let checkedTime =convertMs(flatpickrMy.selectedDates[0].getTime() - date.getTime());
if (checkedTime.seconds < 0) {
    clearInterval(timerId);
    start.disabled = false;
    return;
  }
days.textContent =addLeadingZero(checkedTime.days);
hours.textContent =addLeadingZero(checkedTime.hours);
minutes.textContent =addLeadingZero(checkedTime.minutes);
seconds.textContent =addLeadingZero(checkedTime.seconds);
}, 1000);
}



start.addEventListener('click', startTimer);
let flatpickrMy = flatpickr("#datetime-picker", options);



