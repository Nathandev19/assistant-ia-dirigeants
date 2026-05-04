import os
import requests
from flask import Flask, render_template, request, jsonify
from dotenv import load_dotenv

# charger les variables .env
load_dotenv()

app = Flask(__name__)

HF_API_URL = "https://router.huggingface.co/v1/chat/completions"
HF_TOKEN = os.getenv("HF_TOKEN")

headers = {
    "Authorization": f"Bearer {HF_TOKEN}",
    "Content-Type": "application/json"
}


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():
    data = request.get_json()
    message = data.get("message")

    payload = {
        "model": "meta-llama/Llama-3.1-8B-Instruct",
        "messages": [
            {
                "role": "system",
                "content": "Tu es un assistant IA spécialisé en stratégie d'entreprise. Tu aides des dirigeants à prendre des décisions claires, structurées et professionnelles."
            },
            {
                "role": "user",
                "content": message
            }
        ],
        "temperature": 0.7,
        "max_tokens": 512
    }

    try:
        response = requests.post(HF_API_URL, headers=headers, json=payload)

        print("STATUS:", response.status_code)
        print("TEXT:", response.text)

        if response.status_code != 200:
            return jsonify({
                "response": f"HF error HTTP {response.status_code}: {response.text}"
            })

        result = response.json()

        reply = result["choices"][0]["message"]["content"]

        return jsonify({
            "response": reply
        })

    except Exception as e:
        return jsonify({
            "response": f"Erreur serveur: {str(e)}"
        })


if __name__ == "__main__":
    app.run(debug=True)