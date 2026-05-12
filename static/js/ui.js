// ajoute un message dans le chat (user ou bot)
export function addMessage(text, type, messages) {
    const msg = document.createElement("div");
    msg.classList.add("message", type);
    msg.textContent = text;

    messages.appendChild(msg);

    scrollToBottom(messages, true);

    return msg;
}

// active ou désactive l’input et le bouton (pendant chargement par exemple)
export function setLoadingState(input, button, state) {
    input.disabled = state;
    button.disabled = state;

    if (!state) {
        input.focus();
    }
}

// gère le scroll automatique vers le bas du chat
export function scrollToBottom(messages, force = false) {
    const isNearBottom =
        messages.scrollHeight - messages.scrollTop - messages.clientHeight < 100;

    if (force || isNearBottom) {
        messages.scrollTop = messages.scrollHeight;
    }
}

// affiche la réponse du bot avec effet de frappe (typewriter)
export function typeEffect(element, text, input, button) {
    let i = 0;
    element.textContent = "";

    input.disabled = true;
    button.disabled = true;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, 8);
        } else {

            // fin de l’écriture
            input.disabled = false;
            button.disabled = false;
            input.focus();

            // ajout du bouton copier
            addCopyButton(element, text);
        }

        scrollToBottom(element.parentElement, false);
    }

    type();
}

// crée l’indicateur de chargement (les 3 points animés)
export function createTypingIndicator(messages) {
    const el = document.createElement("div");
    el.classList.add("message", "bot", "typing");

    el.innerHTML = `
        <span class="dot"></span>
        <span class="dot"></span>
        <span class="dot"></span>
    `;

    messages.appendChild(el);

    scrollToBottom(messages, true);

    return el;
}

// bouton copier (nouveau)
function addCopyButton(element, text) {

    const btn = document.createElement("button");

    btn.classList.add("copy-btn");

    btn.textContent = "Copier";

    btn.addEventListener("click", () => {
        navigator.clipboard.writeText(text);

        btn.textContent = "Copié !";

        setTimeout(() => {
            btn.textContent = "Copier";
        }, 1200);
    });

    element.appendChild(document.createElement("br"));
    element.appendChild(btn);
}