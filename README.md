# Assistant IA pour dirigeants

---

## 1. Présentation du projet

Ce projet consiste à développer un assistant conversationnel intelligent destiné à des dirigeants d’entreprise.

L’assistant permet de poser des questions en langage naturel et d’obtenir des réponses structurées et professionnelles.

Le système repose actuellement sur une intégration d’un modèle de langage via l’API Hugging Face (Router API), avec une évolution future vers une architecture RAG (Retrieval Augmented Generation) basée sur des documents internes.

---

## 2. Objectif principal

- Fournir un assistant IA capable de répondre à des questions stratégiques
- Simuler un assistant décisionnel pour dirigeants
- Développer une interface web type SaaS (style ChatGPT)
- Préparer l’intégration de documents internes (RAG)

---

## 3. Architecture du projet

### Backend (Flask)

Technologies :
- Python
- Flask
- Hugging Face Router API
- dotenv (gestion des variables d’environnement)

Rôle :
- gestion des routes API
- communication avec le modèle IA
- traitement des messages utilisateur
- renvoi des réponses JSON

Endpoint principal :
- `/chat`

---

### Frontend

Technologies :
- HTML
- CSS
- JavaScript
- Flask templates

Rôle :
- interface utilisateur du chat IA
- envoi des messages vers `/chat`
- affichage dynamique des réponses
- UX type chat SaaS

---

## 4. Modèle IA utilisé

Le projet utilise actuellement :

- Hugging Face Router API
- Modèle : Llama 3 Instruct

Ce modèle permet de générer des réponses conversationnelles de qualité adaptées à un usage assistant.

---

## 5. Sécurité

Le projet utilise une gestion sécurisée des clés API :

- variables d’environnement `.env`
- aucune clé API stockée en dur dans le code
- fichier `.env` ignoré par Git (`.gitignore`)

---

## 6. Structure du projet

```plaintext
assistant-ia-dirigeants/

├── app.py
├── .env
├── .gitignore
├── requirements.txt

├── templates/
│   ├── index.html
│   ├── base.html

├── static/
│   ├── css/
│   │   ├── chat.css
│   │   ├── style.css
│   ├── js/
│       ├── chat.js
````

---

## 7. Fonctionnalités principales

### Backend

* API `/chat` fonctionnelle
* intégration Hugging Face Router API
* modèle LLM (Llama 3 Instruct)
* gestion des erreurs HTTP et JSON

### Frontend

* interface de chat fonctionnelle
* messages utilisateur / assistant
* communication via fetch API
* UX type SaaS

---

## 8. Répartition du travail

| Membre        | Rôle                         | Responsabilité principale           |
| ------------- | ---------------------------- | ----------------------------------- |
| Nathan        | Backend, IA, architecture    | API, intégration LLM, backend Flask |
| Trésor        | Frontend, UI/UX, intégration | Interface, UX, communication API    |
| Pierre-Thyrel | Données & tests              | Jeux de données & évaluation        |
| Lina          | Documentation                | Rapport & soutenance                |

---

## 9. Avancement du projet

### Backend

* Flask fonctionnel
* API `/chat` opérationnelle
* Intégration Hugging Face Router API
* Modèle LLM connecté

### Frontend

* Interface chat fonctionnelle
* UX type SaaS en place
* Communication avec backend active

---

## 10. Prochaines étapes

### Backend

* amélioration du prompt système (assistant plus stratégique)
* gestion mémoire conversationnelle
* optimisation des réponses

### Frontend

* ajout indicateur “assistant en train d’écrire”
* amélioration UX (animations, fluidité)
* structuration JS en modules

---

## 11. État actuel du projet

Le projet est actuellement en phase :

> MVP fonctionnel complet (frontend + backend + IA connectée)

Le chat est entièrement opérationnel avec une IA réelle connectée via Hugging Face.

La prochaine étape consiste à améliorer l’expérience utilisateur et enrichir l’intelligence de l’assistant (niveau professionnel / dirigeant).
