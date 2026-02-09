let noCount = 0;

const messages = [
  "Whyyyy 😭",
  "Soch le ache se 🥺",
  "Itna bhi kya bhaav 😤",
  "Dil toot raha hai 💔",
  "Last chance 😔",
  "Ab toh haan bol de 😭💖",
  "Bolde abbb, Aur kitna testt kregaa??",
  "Haa, theek hai mat bol chal😔😔"
];

function noClicked() {
  const msg = document.getElementById("message");
  msg.innerText = messages[noCount % messages.length];
  noCount++;
}

function yesClicked() {
  window.location.href = "gallery.html";
}
