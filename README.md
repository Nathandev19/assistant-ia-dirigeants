# Assistant IA pour dirigeants

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

### Backend (Nathan)

Technologies :

* Python
* Flask
* OpenAI API
* ChromaDB / FAISS (vector database)

Modules principaux :

* `app.py` : serveur principal Flask
* `modules/` : logique métier (RAG, embeddings, traitement)
* `vectorstore/` : stockage des embeddings
* `data/` : documents sources
* `tests/` : tests backend

Endpoints :

* `/chat` : conversation avec l’IA
* `/upload` : ajout de documents
* `/history` : historique des échanges

Rôle :

* traitement des documents
* génération des embeddings
* interaction avec le modèle IA

---

### Frontend (Trésor)

Technologies :

* HTML / CSS / JavaScript
* Flask templates (intégré backend)

Structure :

```plaintext
templates/
├── base.html
├── index.html
├── about.html

static/
├── css/
│   ├── style.css
│   ├── chat.css
│
├── js/
│   ├── app.js
│   ├── chat.js
│   ├── api.js
│   ├── ui.js
│   ├── upload.js

assets/
```

Rôle :

* interface utilisateur
* expérience de chat
* communication avec l’API backend
* affichage des réponses et sources

---

## 4. Fonctionnalités principales

### Backend

* ingestion de documents
* découpage en chunks
* vectorisation (embeddings)
* recherche sémantique
* génération de réponses via LLM
* gestion des conversations

---

### Frontend

* interface de chat type assistant IA
* affichage des messages utilisateur / assistant
* connexion API Flask (`/chat`, `/upload`)
* upload de documents
* affichage des sources utilisées
* design responsive et professionnel

---

## 5. Répartition du travail

| Membre        | Rôle                             | Responsabilité principale  |
| ------------- | -------------------------------- | -------------------------- |
| Nathan        | Backend, RAG, IA, API            | Cœur technique             |
| Trésor        | Frontend, UI/UX, intégration API | Interface utilisateur      |
| Pierre-Thyrel | Données & tests                  | Jeux de données & éval     |
| Lina          | Rapport & documentation          | Documentation & soutenance |


---

## 6. Avancement du projet

### Backend

* Structure complète en place
* API fonctionnelle
* RAG en cours / opérationnel

### Frontend

* Architecture mise en place
* Dossiers créés
* Fichiers JS et CSS structurés
* Interface non encore implémentée

---

## 7. Prochaines étapes (Frontend)

* Construction de `base.html`
* Création de l’interface `index.html` (chat)
* Implémentation `api.js` (connexion backend)
* Logique de chat (`chat.js`)
* Affichage UI (`ui.js`)
* Module upload (`upload.js`)
* Amélioration UX (design SaaS)

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

---


