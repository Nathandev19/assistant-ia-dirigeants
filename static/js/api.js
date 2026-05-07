export async function sendMessageAPI(message) {
    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        return data.response;

    } catch (error) {
        console.error("API error:", error);
        return "Erreur serveur...";
    }
}