const containerSlot = document.querySelector(".notif-slot")
const errorButton = document.getElementById("event-01");

var notif = "";

errorButton.addEventListener("click", addNotif())

function addNotif() {
  containerSlot.innerHTML += '<div class="notif danger"> <h3>Error!</h3> <br> <p>Contents of the error</p> </div> ';
notif = document.querySelector('.notif');

return notif;
};

let notifState = "vanish";

if (notifState == "vanish" && notif != null) { setTimeout(() => {
  notif.style.animation = "vanishing 1000ms ease forwards"
}, 3000) }

if (notifState == "keepDisplaying") {
  notif.style.animation = ""
}

