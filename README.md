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
- Développer une interface web type SaaS (style ChatGPT / Copilot)
- Préparer l’intégration de documents internes (RAG)
- Transformer le projet en produit IA utilisable en entreprise

---

## 3. Architecture du projet

### Backend (Flask)

### Technologies

- Python
- Flask
- Hugging Face Router API
- dotenv

### Rôle

- gestion des routes API
- communication avec le modèle IA
- traitement des messages utilisateur
- retour des réponses JSON

### Endpoint principal

- `/chat`

---

### Frontend

### Technologies

- HTML
- CSS
- JavaScript (modularisé)

### Rôle

- interface utilisateur type SaaS
- envoi des messages vers `/chat`
- affichage dynamique des réponses
- UX moderne inspirée de ChatGPT / Copilot

---

## 4. Modèle IA utilisé

- Hugging Face Router API
- Modèle : `meta-llama/Llama-3.1-8B-Instruct`

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
```

---

## 7. Frontend (UX améliorée)

Le frontend a été progressivement amélioré pour se rapprocher d’une expérience SaaS moderne.

### Fonctionnalités UX ajoutées

- interface de chat type ChatGPT / Copilot
- redesign UI plus moderne et professionnelle
- messages utilisateur / assistant dynamiques
- animation de réponse (typing effect)
- indicateur de chargement animé (3 points)
- textarea avec auto-resize dynamique
- scroll intelligent
- responsive mobile / tablette
- amélioration du layout global et du centrage UX
- architecture JS modularisée (`ui.js`, `api.js`, `chat.js`, `upload.js`)
- bouton copier les réponses IA
- système d’upload de documents côté frontend
- sélection de fichiers depuis l’interface
- preview des fichiers uploadés
- suppression de fichier avant envoi

---

## 8. Fonctionnalités principales

### Backend

- API `/chat` fonctionnelle
- intégration Hugging Face
- génération de réponses IA
- gestion des erreurs

### Améliorations futures Frontend

- historique de conversations
- sidebar pour navigation entre chats
- dark mode
- connexion upload frontend ↔ backend (Flask)
- amélioration UX avancée (micro-interactions, animations)

---

## 9. Installation et lancement

### 1. Cloner le projet

```bash
git clone https://github.com/Nathandev19/assistant-ia-dirigeants.git
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

| Membre | Rôle | Responsabilité |
|---|---|---|
| Nathan | Backend / IA | API, LLM, architecture |
| Trésor | Frontend / UX | UI, intégration, expérience utilisateur |
| Pierre-Thyrel | Données & tests | datasets, évaluation |
| Lina | Documentation | rapport, soutenance |

---

## 11. Avancement du projet

### Backend

- API fonctionnelle
- intégration IA active
- structure propre et scalable

### Frontend

- chat opérationnel
- UX moderne et responsive
- redesign inspiré de ChatGPT / Copilot
- auto-resize textarea optimisé
- modularisation JavaScript
- système upload frontend ajouté
- preview et suppression de fichiers
- bouton copier les réponses
- interface SaaS améliorée
- responsive mobile/tablette

---

## 12. Prochaines étapes

### Backend

- amélioration du prompt système
- ajout mémoire conversationnelle
- endpoint `/upload`
- extraction PDF/TXT
- intégration RAG (documents internes)

### Frontend

- amélioration UX globale
- polish interface SaaS
- historique de conversations
- sidebar future
- dark mode éventuel
- connexion upload frontend ↔ backend

---

## 13. État actuel

Le projet est actuellement en phase :

> MVP fonctionnel avec assistant IA connecté

Le frontend dispose désormais :

- d’une interface moderne inspirée de ChatGPT / Copilot
- d’une UX responsive et fluide
- d’un système d’upload frontend
- d’une architecture JavaScript modulaire
- d’un système de copie rapide des réponses IA

La prochaine étape vise à transformer ce MVP en :

> assistant IA d’entreprise enrichi par documents internes (RAG)