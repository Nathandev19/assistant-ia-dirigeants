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

    async function sendMessageToAPI(message) {
        try {
            const response = await fetch("/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ message: message })
            });

            const data = await response.json();
            return data.response;

        } catch (error) {
            console.error("Erreur API :", error);
            return "Erreur serveur...";
        }
    }

    async function sendMessage() {
        const text = input.value.trim();

        if (!text) return;

        // message utilisateur
        addMessage(text, "user");

        // message loading
        const loadingMsg = document.createElement("div");
        loadingMsg.classList.add("message", "bot");
        loadingMsg.textContent = "Assistant est en train d’écrire...";
        messages.appendChild(loadingMsg);
        messages.scrollTop = messages.scrollHeight;

        input.value = "";

        // appel API
        const botResponse = await sendMessageToAPI(text);

        loadingMsg.textContent = botResponse;
    }

    button.addEventListener("click", sendMessage);

    input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });

});