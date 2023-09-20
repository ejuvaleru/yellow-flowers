const messages = [
  "I Love You With All My Heart",
  "My Heart Belongs To You",
  "You Make My World Shine",
  "In This World... It's Just Us",
  "We Belong Together",
  "My Kind Of Woman",
];
const msg = document.getElementById("welcome-message");
const randomPosition = Math.floor(Math.random() * messages.length);
msg.innerText = messages[randomPosition];