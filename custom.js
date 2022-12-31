$('section').fireworks({ 
    sound: true, 
    opacity: 0.8, 
    width: '100%', 
    height: '100%' 
});
2 / 2


const textElement = document.getElementById("text");
let textIndex = 0;
const messages = ["Happy", "New", "Year","2023"];
setInterval(() => {
  textElement.style.opacity = 0;
  setTimeout(() => {
    textElement.innerHTML = messages[textIndex];
    textElement.style.opacity = 1;
    textElement.style.color = "blue";
    textIndex = (textIndex + 1) % messages.length;
  }, 500);
}, 1000);