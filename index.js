/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  const hr = str.split(':');
  if (hr[0] < 12){
    return 'Good Morning';
  } else if (12 <= hr[0] && hr[0] < 17){
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str){
  document.getElementById('greeting').innerText = str
}