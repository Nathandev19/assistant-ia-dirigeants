# Assistant IA pour dirigeants

---

## 1. Présentation du projet

Ce projet consiste à développer un assistant conversationnel intelligent destiné à des dirigeants d’entreprise.

L’assistant répond à des questions stratégiques et opérationnelles en langage naturel, en s’appuyant à terme sur des documents internes.

Le système reposera sur une architecture **RAG (Retrieval Augmented Generation)** afin d’enrichir les réponses avec des données réelles issues de l’organisation.

---

## 2. Objectif principal

* Permettre l’interrogation de documents internes (PDF, DOCX, CSV)
* Fournir des réponses contextualisées et fiables
* Simuler un assistant décisionnel pour dirigeants
* Offrir une interface web simple de type SaaS (type ChatGPT)

---

## 3. Architecture du projet

### Backend (Nathan)

Technologies :

* Python
* Flask
* OpenAI API
* ChromaDB / FAISS (prévu)

Rôle :

* gestion des routes API
* communication avec le frontend
* intégration de l’IA (OpenAI)
* mise en place du RAG

Endpoints (prévisionnels / en cours) :

* `/chat`
* `/upload`
* `/history`

---

### Frontend (Trésor)

Technologies :

* HTML
* CSS
* JavaScript
* Flask templates

Structure actuelle :

```plaintext
templates/
├── base.html
├── index.html
├── about.html (non utilisé)

static/
├── css/
│   ├── style.css
│   ├── chat.css
│
├── js/
│   ├── app.js
│   ├── chat.js
│   ├── api.js (à implémenter)
│   ├── ui.js
│   ├── upload.js (à implémenter)
```

Rôle :

* interface utilisateur du chat IA
* gestion des interactions utilisateur
* affichage dynamique des messages
* intégration avec l’API backend (`/chat`)
* participation à l’intégration IA (appel simple OpenAI + logique conversationnelle basique)
* amélioration UX (chat fluide type SaaS)

**Remarque : l’interface est déjà fonctionnelle et interactive, avec un chat dynamique opérationnel côté frontend.**

---

## 4. Fonctionnalités principales

### Backend (en développement)

* ingestion de documents
* découpage en chunks
* embeddings
* recherche sémantique
* génération de réponses IA
* endpoint `/chat` pour communication frontend

---

### Frontend (en cours de développement)

* interface de chat fonctionnelle
* affichage dynamique des messages utilisateur / assistant
* gestion des événements (click, Enter)
* scroll automatique du chat
* design type SaaS (UI améliorée)
* préparation à la connexion API (`fetch /chat`)

---

## 5. Répartition du travail

| Membre        | Rôle                            | Responsabilité principale                               |
| ------------- | ------------------------------- | ------------------------------------------------------- |
| Nathan        | Backend, IA, RAG                | API, logique IA avancée, RAG, architecture              |
| Trésor        | Frontend, UI/UX, intégration IA | Interface, UX, communication API, intégration IA simple |
| Pierre-Thyrel | Données & tests                 | Jeux de données & évaluation                            |
| Lina          | Documentation                   | Rapport & soutenance                                    |

---

## 6. Avancement du projet

### Backend

* Structure Flask en place
* Serveur fonctionnel
* API en cours de développement
* IA non encore connectée

### Frontend

* Structure HTML/CSS complète
* Interface de chat opérationnelle
* UI améliorée (style SaaS)
* JavaScript implémenté (chat dynamique fonctionnel)
* simulation de réponse (mode local)
* prêt pour intégration avec backend (`/chat`)

---

## 7. Prochaines étapes

### Frontend

* connexion API `/chat` via `fetch`
* affichage des réponses backend
* amélioration UX (loading, typing indicator)
* structuration JS (`api.js`, `ui.js`)

### Backend

* finalisation endpoint `/chat`
* intégration OpenAI
* mise en place du RAG (ChromaDB / FAISS)

---

## 8. Stack technique

* Backend : Flask (Python)
* IA : OpenAI API (GPT-4o-mini)
* Embeddings : text-embedding-3-small
* Vector DB : ChromaDB ou FAISS
* Frontend : HTML / CSS / JavaScript
* Versioning : Git / GitHub

---

## 9. Remarque

Le projet suit une architecture modulaire avec séparation claire :

* logique IA → backend
* interface utilisateur → frontend
* communication via API REST (`/chat`)

---

## 10. État actuel du projet

Le projet est actuellement en phase :

> 🟡 MVP frontend fonctionnel + backend en cours

Le chat est entièrement fonctionnel côté interface, avec une logique JavaScript opérationnelle.

La prochaine étape consiste à connecter le frontend au backend, puis à intégrer l’intelligence artificielle réelle (OpenAI).
