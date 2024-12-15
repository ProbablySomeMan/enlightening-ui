const containerSlot = document.querySelector(".notif-slot")
const errorButton = document.getElementById("event-01");

const successButton = document.getElementById("event-02");

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
