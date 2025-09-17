let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listHTML = document.querySelector('.carousel .list');
let seeMoreButtons = document.querySelectorAll('.seeMore');
let backButton = document.getElementById('back');

nextButton.onclick = function(){
    showSlider('next');
}
prevButton.onclick = function(){
    showSlider('prev');
}
let unAcceppClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = 'none';
    prevButton.style.pointerEvents = 'none';

    carousel.classList.remove('next', 'prev');
    let items = document.querySelectorAll('.carousel .list .item');
    if(type === 'next'){
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
    }else{
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
    }
    clearTimeout(unAcceppClick);
    unAcceppClick = setTimeout(()=>{
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
    }, 2000)
}
seeMoreButtons.forEach((button) => {
    button.onclick = function(){
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
    }
});
backButton.onclick = function(){
    carousel.classList.remove('showDetail');
}
let footerdate = document.getElementById('footer-date');
let date = new Date().getFullYear();
footerdate.innerHTML = date;


function checkAvailability(stockId, buttonId) {
    let button = document.getElementById(buttonId);
    let stockQuantity = document.getElementById(stockId);
    if (stockQuantity) {
        let availableStock = stockQuantity.innerHTML;
        if (availableStock > 0) {
            button.innerHTML = "In Stock";
            button.style.backgroundColor = "Green";
            button.style.color = "white";
            button.style.border = "none";
            button.style.padding = "10px 20px";
            button.style.cursor = "not-allowed";
            button.disabled = true;
        } else {
            button.innerHTML = "Out of Stock";
            button.style.backgroundColor = "Red";
            button.style.color = "white";
            button.style.border = "none";
            button.style.padding = "10px 20px";
            button.style.cursor = "not-allowed";
            button.disabled = true;
        }
    }
}


// Chat bot 
function toggleChatbot() {
  let chatbotBox = document.getElementById("chatbot-box");
  let chatbotButton = document.getElementById("chatbot-button");
  chatbotBox.classList.toggle("active");
  chatbotButton.classList.toggle("active");


    // change button icon 
  if (chatbotBox.classList.contains("active")) { 
    chatbotButton.textContent = "❌"; // change to close icon
  } else {
    chatbotButton.textContent = "💬"; // chat bubble
  }
}

function sendMessage() {
  let input = document.getElementById("user-input").value.toLowerCase();
  let chatLog = document.getElementById("chat-log");

  if (input.trim() === "") return; // prevent empty messages

  // Show user message
  let userMsg = document.createElement("p");
  userMsg.textContent = "You: " + input;
  chatLog.appendChild(userMsg);

  // Get bot response
  let botReply = document.createElement("p");
  botReply.textContent = "Bot: " + getBotResponse(input);
  chatLog.appendChild(botReply);

  // Clear input field
  document.getElementById("user-input").value = "";

  // Auto scroll to bottom
  chatLog.scrollTop = chatLog.scrollHeight;
}

function getBotResponse(input) {
  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you?";
  } else if (input.includes("how are you")) {
    return "I’m just a bot, but I’m doing great! What about you?";
  } else if (input.includes("bye")) {
    return "Goodbye! Have a nice day!";
  } else if (input.includes("name")) {
    return "I’m your friendly chatbot.";
  } else {
    return "Sorry, I don’t understand that yet.";
  }
}
