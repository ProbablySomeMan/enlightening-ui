const containerSlot = document.querySelector(".notif-slot")
const errorButton = document.getElementById("event-01");
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
  containerSlot.innerHTML += `
    <div 
      id="notif${this.notifId}" 
      class="notif danger"> 
      <h3>${this.messageHead}</h3> 
      <br> 
      <p>${this.message}</p> 
      <br>
      <button class="ui dismiss">dismiss</button>
    </div> 
  `
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

  notifNumber += 1
}
errorButton.addEventListener("click", () => {
  notifs.push(new Notification('danger', 'Test message', 'test message text', notifNumber).add())
})
