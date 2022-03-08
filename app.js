

const clockTemplate = document.querySelector("#clockDisplayTemplate").content; // template content
const clockTemCopy = document.importNode(clockTemplate, true);
const clockTime = clockTemCopy.querySelector("#timeContainer");
const clockDate = clockTemCopy.querySelector('#dateContainer');
const clockDisplay = document.querySelector("#clockDisplay");

const hours = clockTemCopy.querySelector("#h"); 
const seconds = clockTemCopy.querySelector("#s");
const minutes = clockTemCopy.querySelector("#m");
const separator1 = clockTemCopy.querySelector("#separator1");
const separator2 = clockTemCopy.querySelector("#separator2");
const clock = document.querySelector('#clock'); 


let waitMins = (10*60*1000)
const loaded = () => { 
    const today = new Date(); 
    let hour = today.getHours();
   let progressValue = 0; 
   let progressStop = Math.round((hour/24)*100); 
   while (progressValue !== progressStop) { 
       progressValue++; 
   }
   console.log(progressStop);
   clockTime.style.background = `conic-gradient(
        rgba(0,0,0,0.9) ${progressValue*3.6}deg, 
        rgba(25,25,25,0.1) ${progressValue*3.6}deg
    )`; 
   return progressValue;
}

loaded();

let progress = setInterval (() => { 
    loaded();
}, waitMins ) 



const time = () => { // Time function. 
    const today = new Date(); 
    let h = today.getHours(); 
    let m = today.getMinutes(); 
    let s = today.getSeconds(); 

    h = checkTime(h);// adds zeros before hours if the number is less than 10
    m = checkTime(m);// adds zeros before mintues if the number is less than 10
    s = checkTime(s);// adds zeros before seconds if the number is less than 10

    hours.textContent = h;
    minutes.textContent = m ;
    seconds.textContent = s;
    separator1.textContent = ":";
    separator2.textContent = ":";

    clockTime.appendChild(seconds, separator1, minutes, separator2, hours);


    /* clockTime.textContent = hours.innerHTML + separator.innerHTML+ minutes.innerHTML + separator.innerHTML+ seconds.innerHTML ; */
    clockDisplay.appendChild(clockTime);
   
}

const date = () => { 
    const monthsArray = ['Jan', "Feb", 'Mar', "Apr", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
    const daysArray = ['Sun', "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]; 

    const today = new Date(); 
    let day = daysArray[today.getDay()]; 
    let month = monthsArray[today.getMonth()];
    let year = today.getFullYear();
    let dayDate = today.getDate()

    clockDate.textContent = ` ${day}, ${dayDate}   ${month}  ${year}`;
    clockDisplay.appendChild(clockDate)

}

function render () { 
    time();
    date();
    setTimeout(render, 1000);
}


setInterval (() => {  
    render();
}, 1000);

function checkTime (i) { // This function checks if whether the numbers in time are less than or greater than 10.
    if (i < 10) { i = "0"+i}
    return i;
}


