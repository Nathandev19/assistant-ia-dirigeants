# Assistant IA pour dirigeants

---

## 1. Présentation du projet

Ce projet consiste à développer un assistant conversationnel intelligent destiné à des dirigeants d’entreprise.

L’assistant permet de poser des questions en langage naturel et d’obtenir des réponses structurées, pertinentes et professionnelles.

Le système repose actuellement sur une intégration d’un modèle de langage via l’API Hugging Face (Router API), avec une évolution prévue vers une architecture RAG (Retrieval Augmented Generation) basée sur des documents internes.

---

## 2. Objectif principal

* Fournir un assistant IA capable de répondre à des questions stratégiques
* Simuler un assistant décisionnel pour dirigeants
* Développer une interface web type SaaS (style ChatGPT)
* Préparer l’intégration de documents internes (RAG)

---

## 3. Architecture du projet

### Backend (Flask)

**Technologies :**

* Python
* Flask
* Hugging Face Router API
* dotenv (gestion des variables d’environnement)

**Rôle :**

* gestion des routes API
* communication avec le modèle IA
* traitement des messages utilisateur
* renvoi des réponses JSON

**Endpoint principal :**

* `/chat`

---

### Frontend

**Technologies :**

* HTML
* CSS
* JavaScript
* Flask Templates

**Rôle :**

* interface utilisateur du chat IA
* envoi des messages vers `/chat`
* affichage dynamique des réponses
* expérience utilisateur type SaaS

---

## 4. Modèle IA utilisé

Le projet utilise actuellement :

* Hugging Face Router API
* Modèle : Llama 3 Instruct (`meta-llama/Llama-3.1-8B-Instruct`)

Ce modèle permet de générer des réponses conversationnelles adaptées à un assistant professionnel.

---

## 5. Sécurité

Le projet applique de bonnes pratiques de sécurité :

* utilisation de variables d’environnement (`.env`)
* aucune clé API stockée en dur dans le code
* fichier `.env` ignoré via `.gitignore`
* fichier `.env.example` fourni pour faciliter la configuration

---

## 6. Structure du projet

```plaintext
assistant-ia-dirigeants/

├── app.py                  # Point d’entrée Flask
├── config.py               # Configuration globale
├── requirements.txt        # Dépendances Python
├── .env.example            # Exemple de variables d’environnement
├── .gitignore

├── data/                   # Données (documents internes, datasets)
├── vectorstore/            # Stockage des embeddings (RAG futur)

├── modules/                # Logique métier
│   ├── llm/                # Gestion des appels au modèle
│   ├── services/           # Logique applicative (chat, traitement)
│   ├── utils/              # Fonctions utilitaires

├── templates/              # Templates HTML (Flask)
│   ├── base.html
│   ├── index.html

├── static/                 # Assets frontend
│   ├── css/
│   │   ├── chat.css
│   │   ├── style.css
│   ├── js/
│   │   ├── chat.js         # Gestion principale du chat
│   │   ├── api.js          # Centralisation des appels API (prévu)
│   │   ├── ui.js           # Gestion UI avancée (prévu)
│   │   ├── upload.js       # Upload de documents (RAG futur)
│   │   ├── app.js          # Initialisation globale

├── tests/                  # Tests unitaires et d’intégration

└── README.md
```

---

### 6.1 Organisation backend

Le dossier `modules/` structure la logique métier :

* `llm/` : appels au modèle de langage (Hugging Face)
* `services/` : logique applicative (gestion du chat, traitement des requêtes)
* `utils/` : fonctions utilitaires

Cette organisation permet une évolution vers une architecture plus scalable (RAG, multi-agents, etc.).

---

### État des fichiers JavaScript

Actuellement :

* `chat.js` : fonctionnel (gestion du chat + appel API `/chat`)
* `app.js` : initialisation globale (peu utilisé)
* `api.js` : prévu pour centraliser les appels API
* `ui.js` : prévu pour améliorer la gestion de l’interface
* `upload.js` : prévu pour l’upload de documents (RAG)

Le frontend est en cours de modularisation pour mieux séparer les responsabilités.

---

## 7. Fonctionnalités principales

### Backend

* API `/chat` fonctionnelle
* intégration Hugging Face Router API
* génération de réponses via LLM
* gestion des erreurs HTTP et JSON

### Frontend

* interface de chat fonctionnelle
* affichage dynamique des messages
* communication avec le backend (Fetch API)
* indicateur de réponse en cours ("Assistant est en train d’écrire")

---

## 8. Installation et lancement

### 1. Cloner le projet

```bash
git clone https://github.com/ton-repo/assistant-ia-dirigeants.git
cd assistant-ia-dirigeants
```

### 2. Créer un environnement virtuel

```bash
python -m venv venv
source venv/bin/activate  # (Linux/Mac)
venv\Scripts\activate     # (Windows)
```

### 3. Installer les dépendances

```bash
pip install -r requirements.txt
```

### 4. Configurer les variables d’environnement

Créer un fichier `.env` à partir de `.env.example` :

```bash
cp .env.example .env
```

Ajouter votre clé API Hugging Face :

```env
HF_API_KEY=your_api_key_here
```

### 5. Lancer l’application

```bash
python app.py
```

Puis ouvrir :

```
http://127.0.0.1:5000
```

---

## 9. Répartition du travail

| Membre        | Rôle                         | Responsabilité principale           |
| ------------- | ---------------------------- | ----------------------------------- |
| Nathan        | Backend, IA, architecture    | API, intégration LLM, backend Flask |
| Trésor        | Frontend, UI/UX, intégration | Interface, UX, communication API    |
| Pierre-Thyrel | Données & tests              | Jeux de données & évaluation        |
| Lina          | Documentation                | Rapport & soutenance                |

---

## 10. Avancement du projet

### Backend

* serveur Flask fonctionnel
* endpoint `/chat` opérationnel
* intégration Hugging Face effective
* génération de réponses IA en temps réel

### Frontend

* interface de chat complète
* UX type SaaS en place
* communication frontend ↔ backend fonctionnelle

---

## 11. Prochaines étapes

### Backend

* amélioration du prompt système (réponses plus stratégiques)
* gestion du contexte conversationnel (mémoire)
* intégration RAG (documents internes)

### Frontend

* animations (typing effect)
* amélioration UX (fluidité, feedback utilisateur)
* modularisation JavaScript complète

---

## 12. État actuel du projet

Le projet est actuellement en phase :

> MVP fonctionnel complet (frontend + backend + IA connectée)

Le chat est entièrement opérationnel avec une IA connectée via Hugging Face.

La prochaine étape consiste à améliorer l’expérience utilisateur et à renforcer les capacités de l’assistant pour un usage professionnel avancé.

