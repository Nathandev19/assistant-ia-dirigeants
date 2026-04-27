# Assistant IA pour dirigeants

---

## 1. Présentation du projet

Ce projet consiste à développer un assistant conversationnel intelligent destiné à des dirigeants d’entreprise.

L’assistant répond à des questions stratégiques et opérationnelles en langage naturel en s’appuyant sur des documents internes.

Le système repose sur une architecture **RAG (Retrieval Augmented Generation)** permettant d’enrichir les réponses de l’IA avec des données réelles issues de l’organisation.

---

## 2. Objectif principal

* Permettre l’interrogation de documents internes (PDF, DOCX, CSV)
* Fournir des réponses contextualisées et fiables
* Simuler un assistant décisionnel pour dirigeants
* Offrir une interface web simple de type SaaS

---

## 3. Architecture du projet

### Backend

Technologies :

* Python
* Flask
* OpenAI API
* ChromaDB / FAISS

Rôle :

* gestion des routes API
* traitement futur du RAG
* communication avec le frontend

Endpoints (prévisionnels / en cours) :

* `/chat`
* `/upload`
* `/history`

---

### Frontend (Trésor)

Technologies :

* HTML
* CSS
* JavaScript (à venir)
* Flask templates

Structure actuelle :

```plaintext id="frontend_struct"
templates/
├── base.html
├── index.html
├── about.html (non utilisé pour le moment)

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

* interface utilisateur du chat IA
* affichage des messages
* intégration future avec l’API backend
* UX en cours de développement

 **Remarque : l’interface est fonctionnelle mais encore en cours d’amélioration (UI/UX non finalisée).**

---

## 4. Fonctionnalités principales

### Backend (en développement)

* ingestion de documents
* découpage en chunks
* embeddings
* recherche sémantique
* génération de réponses IA

---

### Frontend (en cours de développement)

* interface de chat fonctionnelle (structure en place)
* affichage des messages utilisateur / assistant
* layout web de type SaaS basique
* connexion API Flask (non encore implémentée)

---

## 5. Répartition du travail

| Membre        | Rôle             | Responsabilité principale    |
| ------------- | ---------------- | ---------------------------- |
| Nathan        | Backend, IA, RAG | Cœur technique               |
| Trésor        | Frontend, UI/UX  | Interface utilisateur        |
| Pierre-Thyrel | Données & tests  | Jeux de données & évaluation |
| Lina          | Documentation    | Rapport & soutenance         |

---

## 6. Avancement du projet

### Backend

* Structure Flask en place
* Serveur fonctionnel
* API en cours de développement

### Frontend

* Structure HTML/CSS mise en place
* Interface de chat affichée
* Design de base fonctionnel
* JavaScript non encore implémenté
* UI encore perfectible (améliorations prévues)

---

## 7. Prochaines étapes

### Frontend

* Implémentation `chat.js`
* Connexion API `/chat`
* Affichage dynamique des messages
* Amélioration UI/UX

### Backend

* Finalisation endpoints
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

