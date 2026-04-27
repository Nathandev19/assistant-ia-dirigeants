## Assistant IA pour dirigeants

---

## 1. Présentation du projet

Ce projet consiste à développer un assistant conversationnel intelligent destiné à des dirigeants d’entreprise.
L’assistant est capable de répondre à des questions stratégiques et opérationnelles en langage naturel en s’appuyant sur des documents internes.

Le système repose sur une architecture **RAG (Retrieval Augmented Generation)** permettant d’enrichir les réponses de l’IA avec des données réelles issues de l’organisation.

---

## 2. Objectif principal

* Permettre l’interrogation de documents internes (PDF, DOCX, CSV)
* Fournir des réponses contextualisées et fiables
* Simuler un assistant décisionnel pour dirigeants
* Offrir une interface simple et professionnelle type SaaS

---

## 3. Architecture du projet

### Backend

Technologies :

* Python
* Flask
* OpenAI API
* ChromaDB / FAISS

Rôle :

* exposition des routes API
* gestion future du RAG
* communication avec le frontend

Endpoints :

* `/chat` (prévu)
* `/upload` (prévu)
* `/history` (prévu)

---

### Frontend (Trésor)

Technologies :

* HTML / CSS
* JavaScript (en cours)
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
│   ├── chat.js (à implémenter)
│   ├── api.js (à implémenter)
│   ├── ui.js
│   ├── upload.js (à implémenter)
```

Rôle :

* interface utilisateur type chat IA
* affichage des messages
* communication avec backend (en cours d’implémentation)
* UX type SaaS

---

## 4. Fonctionnalités principales

### Backend (en développement)

* ingestion de documents
* embeddings
* recherche sémantique
* génération de réponses IA
* gestion des conversations

---

### Frontend (en cours)

* interface de chat fonctionnelle (structure OK)
* affichage des messages utilisateur / assistant
* design responsive type SaaS
* connexion API Flask (à venir)

---

## 5. Répartition du travail

| Membre        | Rôle             | Responsabilité principale |
| ------------- | ---------------- | ------------------------- |
| Nathan        | Backend, IA, RAG | Cœur technique            |
| Trésor        | Frontend, UI/UX  | Interface utilisateur     |
| Pierre-Thyrel | Données & tests  | Jeux de données & éval    |
| Lina          | Documentation    | Rapport & soutenance      |

---

## 6. Avancement du projet

### Backend

* Structure Flask en place
* Serveur fonctionnel
* API en cours de développement

### Frontend

* Structure HTML/CSS terminée
* Interface chat affichée
* Design de base fonctionnel
* JavaScript pas encore implémenté

---

## 7. Prochaines étapes

### Frontend (priorité)

* Implémentation `chat.js`
* Connexion API (`/chat`)
* Affichage dynamique des messages
* Upload documents (UI + backend)

### Backend

* Finalisation endpoints API
* Intégration RAG complète

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

Le projet suit une architecture modulaire permettant une séparation claire entre :

* logique IA (backend)
* interface utilisateur (frontend)
* données et tests

