const containerSlot = document.querySelector(".notif-slot")
const errorButton = document.getElementById("event-01");
const themeStyle = document.getElementById("theme-style")


const successButton = document.getElementById("event-02");
const themeToggle = document.getElementById("theme-toggle");
let computedStyle = window.getComputedStyle(document.body);

const slider = document.querySelector('.slider')

const knob = document.getElementById("event-03")

// set all dynamic value placeholders

const dynamicValues = document.querySelector('.dyn-val')

dynamicValues.innerHTML = '---'

let notifs = []

var notifNumber = 0

function Notification(type, messageHead, message, notifId) {
  this.type = type;
  this.notifId = notifId;
  this.messageHead = messageHead;
  this.message = message;
}

Notification.prototype.add = function() {
  this.notifId = notifNumber
  containerSlot.insertAdjacentHTML("afterbegin", `
    <div 
      id="notif${this.notifId}" 
      class="notif ${this.type}"> 
      <h3>${this.messageHead}</h3> 
      <br> 
      <p>${this.message}</p> 
      <br>
      <button class="ui dismiss">dismiss</button>
    </div> 
    <br>
  `);
  this.domElement = document.getElementById(`notif${this.notifId}`)
  this.dismissButton = document.querySelector(`#notif${this.notifId} .dismiss`)
  
  const fadeOut = new Promise((resolve, reject) => {
    this.dismissButton.addEventListener("click", () => {
      this.domElement.style.animation = "vanishing 1000ms ease forwards"
      resolve("notif vanished")
    })
  })
  fadeOut.then(value => {
    setTimeout( () => { this.domElement.remove() }, 1000)
  })
  fadeOut.catch(value => {
    console.log('value');
  })

  notifNumber += 1
}
errorButton.addEventListener("click", () => {
  notifs.push(new Notification('danger', 'Test message', 'test message text', notifNumber).add())
})

successButton.addEventListener("click", () => {
  notifs.push(new Notification('positive', 'Test successful', 'text of a successfull message', notifNumber).add())
})

function knobFunction(e) {
  var value = 0;

  let prevX = 0;
  let prevY = 0;

  const w = knob.clientWidth / 2;
  const h = knob.clientHeight / 2;

  const x = e.clientX - knob.offsetLeft;
  const y = e.clientY - knob.offsetTop;

  const deltaX = w - x;
  const deltaY = h - y;

  const rad = Math.atan2(deltaY, deltaX);

  let deg = rad * (180 / Math.PI)

  if (y < h && x > w) {
    if (prevX <= x && prevY <= y) {
      value++;
    } else if (prevX >= x && prevY >= y) {
      value--;
    }
  }
  else if (y > h && x > w) {
    if (prevX >= x && prevY <= y) {
      value++;
    } else if (prevX <= x && prevY >= y) {
      value--;
    }
  } 
  else if (y < h && x < w) {
    if (prevX <= x && prevY >= y) {
      value++;
    } else if (prevX >= x && prevY <= y) {
      value--;
    }
  } 
  else if (y > h && x < w) {
    if (prevX >= x && prevY >= y) {
      value++;
    } else if (prevX <= x && prevY <= y) {
      value--;
    }
  } 
  
  prevX = x;
  prevY = y;
  
  return deg;
} 

function rotate(e) {
  var result = Math.floor((knobFunction(e) - 80) * 30);
  if (result < 0) {result = 0} else if (result > 360) {result = 360}
  knob.style.transform = `rotate(${result}deg)`
  
  percentage = Math.round((result / 360) * 100)

  document.getElementById('event-03-value').innerHTML = percentage;
  return percentage;
}

function startRotation() {
  window.addEventListener('mousemove', rotate);
  window.addEventListener('mouseup', endRotation);
}

function endRotation() {
  window.removeEventListener("mousemove", rotate);
}

knob.addEventListener("mousedown", startRotation);

slider.addEventListener('input', () => {
  let newColor = Math.floor((slider.value / 100 ) * 256)
  document.documentElement.style.setProperty('--danger', `rgb(${newColor}, 0, 56)`)
  document.querySelector('.slider-container .dyn-val').innerHTML= newColor;
})
function toggleTheme() {
  let currentTheme = computedStyle.getPropertyValue('--current-theme') 
  if (currentTheme == 'dark') {
      themeStyle.textContent = `
        :root {
          --text-color: var(--black);
          --bg: var(--bg-light);
          --non-bg: var(--bg-dark);
          --system-theme-preference: light;
          --current-theme: light;
        }
        .text_gradient{
          background: none;
          color: var(--black);
        }`;
  } else {
      themeStyle.textContent = `
        :root {
          --text-color: var(--white);
          --btn-t-color: var(--darkgray);
          --bg: var(--bg-dark);
          --non-bg: var(--bg-light);
          --system-theme-preference: dark;
          --current-theme: dark;
        }
        .text_gradient {
          background: linear-gradient(var(--accent-color), var(--accent-color-2));
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }`
  }
  document.head.appendChild(themeStyle)
}

themeToggle.addEventListener('change', () => {
  toggleTheme()
  console.log("theme change!")
})
