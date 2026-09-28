const chatBox = document.querySelector(".chat-box");
const input = document.querySelector("input");
const button = document.querySelector("button");

function addMessage(text, type) {
  const message = document.createElement("div");
  message.className = "message " + type;
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const text = input.value.trim();

  if (text === "") return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => {
    let reply = "Hello! Main AI Buddy hoon. Aap mujhse kuch bhi pooch sakte hain.";

    const msg = text.toLowerCase();

    if (msg.includes("hello") || msg.includes("hi") || msg.includes("namaste")) {
      reply = "Namaste! 👋 Main AI Buddy hoon. Aap kaise hain?";
    } else if (msg.includes("naam")) {
      reply = "Mera naam AI Buddy hai. 🤖";
    } else if (msg.includes("kaise ho")) {
      reply = "Main bilkul theek hoon! 😊 Aap bataiye.";
    }
