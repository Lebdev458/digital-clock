// Set variables to get the elemnt by the Id's 
const hourEL = document.getElementById('hours')
const minuteEl = document.getElementById('minutes')
const secondEL = document.getElementById('seconds')
const ampmEl = document.getElementById('am-pm')

// Create a function called updateClock
function updateClock() {
    // Set this variables to get the time from the computer
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    let ampm = 'AM'

    // This if statement chances the PM to AM
    if (h > 12) {
        h -= 12
        ampm = 'PM'
    }
    else {
        ampm = 'AM'
    }

    // Another if statement that put 0 in front of the time if it is less than 10
    h = h < 10 ? '0' + h : h
    m = m < 10 ? '0' + m : m
    s = s < 10 ? '0' + s : s

    // Change the time
    hourEL.innerText = h
    minuteEl.innerText = m
    secondEL.innerText = s
    ampmEl, (innerText = ampm)

    // Set the time interval by 1000 which is 1 second
    setInterval(() => {
        updateClock()
    }, 1000);
}
// Call and run the updateClock function
updateClock()