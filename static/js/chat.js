document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("user-input");
    const button = document.getElementById("send-btn");
    const messages = document.getElementById("messages");

    function addMessage(text, type) {
        const msg = document.createElement("div");
        msg.classList.add("message", type);
        msg.textContent = text;

        messages.appendChild(msg);
        messages.scrollTop = messages.scrollHeight;
    }

    function sendMessage() {
        const text = input.value.trim();

        if (!text) return;

        // message user
        addMessage(text, "user");

        // réponse fake bot
        setTimeout(() => {
            addMessage("Réponse de l'assistant", "bot");
        }, 500);

        input.value = "";
    }

    button.addEventListener("click", sendMessage);

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

});