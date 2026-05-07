import { sendMessageAPI } from "./api.js";
import { addMessage, setLoadingState, typeEffect, createTypingIndicator } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {

    const input = document.getElementById("user-input");
    const button = document.getElementById("send-btn");
    const messages = document.getElementById("messages");

    // auto-resize
    function autoResize() {
        input.style.height = "auto";
        input.style.height = Math.min(input.scrollHeight, 120) + "px";
    }

    input.addEventListener("input", autoResize);

    async function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        addMessage(text, "user", messages);

        input.value = "";

        // reset hauteur après envoi (IMPORTANT UX)
        input.style.height = "auto";

        const loadingMsg = createTypingIndicator(messages);

        setLoadingState(input, button, true);

        const response = await sendMessageAPI(text);
        const safeResponse = response || "Erreur : réponse vide";

        typeEffect(loadingMsg, safeResponse, input, button);
    }

    // click
    button.addEventListener("click", sendMessage);

    // enter + shift+enter
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();

            // reset UX propre
            input.style.height = "auto";
        }
    });

});