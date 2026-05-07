# Assistant IA pour dirigeants

---

## 1. Présentation du projet

Ce projet consiste à développer un **assistant conversationnel intelligent destiné à des dirigeants d’entreprise**.

L’assistant permet de poser des questions en langage naturel et d’obtenir des réponses structurées, pertinentes et orientées décision.

Le système repose actuellement sur une intégration d’un modèle de langage via l’API Hugging Face (Router API), avec une évolution vers une architecture **RAG (Retrieval Augmented Generation)** basée sur des documents internes.

---

## 2. Objectif principal

- Fournir un assistant IA capable de répondre à des questions stratégiques
- Simuler un assistant décisionnel pour dirigeants
- Développer une interface web type SaaS (style ChatGPT)
- Préparer l’intégration de documents internes (RAG)
- Transformer le projet en **produit IA utilisable en entreprise**

---

## 3. Architecture du projet

### Backend (Flask)

**Technologies :**
- Python
- Flask
- Hugging Face Router API
- dotenv

**Rôle :**
- gestion des routes API
- communication avec le modèle IA
- traitement des messages utilisateur
- retour des réponses JSON

**Endpoint principal :**
- `/chat`

---

### 💻 Frontend

**Technologies :**
- HTML
- CSS
- JavaScript (modularisé)

**Rôle :**
- interface utilisateur type SaaS
- envoi des messages vers `/chat`
- affichage dynamique des réponses
- UX type ChatGPT (typing effect, scroll intelligent, auto-resize textarea)

---

## 4. Modèle IA utilisé

- Hugging Face Router API
- Modèle : `Llama 3 Instruct (meta-llama/Llama-3.1-8B-Instruct)`

Ce modèle permet de générer des réponses conversationnelles adaptées à un assistant professionnel.

---

## 5. Sécurité

- utilisation de variables d’environnement (`.env`)
- aucune clé API stockée en dur
- `.env` ignoré via `.gitignore`
- fichier `.env.example` fourni

---

## 6. Structure du projet

```plaintext
assistant-ia-dirigeants/

├── app.py
├── config.py
├── requirements.txt
├── .env.example
├── .gitignore

├── data/
├── vectorstore/

├── modules/
│   ├── llm/
│   ├── services/
│   ├── utils/

├── templates/
│   ├── base.html
│   ├── index.html

├── static/
│   ├── css/
│   │   ├── chat.css
│   │   ├── style.css
│   ├── js/
│   │   ├── chat.js
│   │   ├── api.js
│   │   ├── ui.js
│   │   ├── upload.js
│   │   ├── app.js

├── tests/
└── README.md
````

---

## 7. Frontend (UX améliorée)

Le frontend a été progressivement amélioré pour se rapprocher d’une expérience SaaS moderne :

* interface de chat type ChatGPT
* messages utilisateur / assistant dynamiques
* animation de réponse (typing effect)
* indicateur de chargement animé (3 points)
* textarea avec **auto-resize dynamique**
* scroll intelligent (UX fluide)
* architecture JS modularisée (`ui.js`, `api.js`)

---

## 8. Fonctionnalités principales

### Backend

* API `/chat` fonctionnelle
* intégration Hugging Face
* génération de réponses IA
* gestion des erreurs

### Frontend

* chat fonctionnel
* UX fluide type SaaS
* communication frontend ↔ backend
* animations et feedback utilisateur

---

## 9. Installation et lancement

### 1. Cloner le projet

```bash
git clone https://github.com/ton-repo/assistant-ia-dirigeants.git
cd assistant-ia-dirigeants
```

### 2. Environnement virtuel

```bash
python -m venv venv
source venv/bin/activate
```

### 3. Installation

```bash
pip install -r requirements.txt
```

### 4. Variables d’environnement

```bash
cp .env.example .env
```

### 5. Lancer le projet

```bash
python app.py
```

---

## 10. Répartition du travail

| Membre        | Rôle            | Responsabilité                          |
| ------------- | --------------- | --------------------------------------- |
| Nathan        | Backend / IA    | API, LLM, architecture                  |
| Trésor        | Frontend / UX   | UI, intégration, expérience utilisateur |
| Pierre-Thyrel | Données & tests | datasets, évaluation                    |
| Lina          | Documentation   | rapport, soutenance                     |

---

## 11. Avancement du projet

### Backend

* API fonctionnelle
* intégration IA active
* structure propre et scalable

### Frontend

* chat opérationnel
* UX améliorée (typing, scroll, auto-resize)
* modularisation JS en cours

---

## 12. Prochaines étapes

### Backend

* amélioration du prompt système
* ajout mémoire conversationnelle
* intégration RAG (documents internes)

### Frontend

* amélioration UX globale
* upload de documents (`upload.js`)
* interface plus SaaS

---

## 13. État actuel

Le projet est actuellement en phase :

> MVP fonctionnel avec assistant IA connecté

La prochaine étape vise à transformer ce MVP en **assistant IA d’entreprise enrichi par documents internes (RAG)**.

