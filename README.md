# ERP InnovWebTech 🚀

[![Symfony Version](https://img.shields.io/badge/Symfony-7.2-000000?style=flat&logo=symfony)](https://symfony.com/)
[![React Version](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react)](https://react.dev/)
[![PHP Version](https://img.shields.io/badge/PHP-8.3+-777BB4?style=flat&logo=php)](https://www.php.net/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

**Solution ERP moderne pour la gestion d'entreprise**, utilisant une architecture découplée avec un Backend Symfony 7.2 et un Frontend React pour offrir performance, scalabilité et expérience utilisateur optimale.

---

## 📑 Table des Matières

- [Présentation](#-présentation)
- [Architecture](#️-architecture-du-projet)
- [Stack Technique](#️-stack-technique)
- [Prérequis](#-prérequis)
- [Installation](#-installation)
- [Démarrage](#-démarrage)
  - [Automatique (Recommandé)](#automatique-recommandé)
  - [Manuel](#manuel)
- [Structure du Projet](#-structure-du-projet)
- [Points d'Accès](#-points-daccès)
- [Scripts Disponibles](#-scripts-disponibles)
- [Roadmap](#️-roadmap)
- [Contribution](#-contribution)
- [Auteur](#-auteur)
- [License](#-license)

---

## 🎯 Présentation

**ERP InnovWebTech** est une solution complète de gestion d'entreprise (Enterprise Resource Planning) conçue pour moderniser et centraliser les processus métier :

- 🏢 **Gestion CRM** : Suivi complet des clients et prospects
- 💰 **Facturation intelligente** : Génération automatique avec calcul de TVA
- 📊 **Tableaux de bord** : Visualisation en temps réel des KPIs
- 🔐 **Sécurité robuste** : Authentification JWT et gestion des rôles
- 📱 **Interface responsive** : Design moderne avec Tailwind CSS v4

---

## 🏗️ Architecture du Projet

Le projet adopte une **architecture découplée** (Backend/Frontend) organisée dans un monorepo :

```
ERP-InnovWebTech/
│
├── api/                    # 🔧 Backend - Symfony 7.2
│   ├── config/            # Configuration Symfony
│   ├── src/
│   │   ├── Controller/    # Contrôleurs API
│   │   ├── Entity/        # Entités Doctrine
│   │   ├── Repository/    # Repositories
│   │   └── Service/       # Logique métier
│   ├── migrations/        # Migrations de base de données
│   └── .env               # Variables d'environnement
│
├── client/                 # 🎨 Frontend - React + Vite
│   ├── src/
│   │   ├── components/    # Composants réutilisables
│   │   ├── features/      # Modules métier (CRM, Invoices...)
│   │   ├── layouts/       # Layouts de pages
│   │   ├── services/      # Appels API
│   │   └── App.jsx        # Point d'entrée React
│   ├── public/            # Ressources statiques
│   └── package.json
│
├── documentation/          # 📚 Documentation & Schémas
│
├── start_work.bat          # 🚀 Script de démarrage automatique
├── start_work_advanced.bat # 🔧 Script avancé avec options
├── config.bat              # ⚙️ Configuration des scripts
└── README.md               # 📖 Ce fichier
```

### Avantages de cette Architecture

✅ **Séparation des responsabilités** : API et UI indépendantes
✅ **Scalabilité** : Déploiement et scaling séparés
✅ **Réutilisabilité** : L'API peut servir plusieurs clients (Web, Mobile...)
✅ **Maintenance facilitée** : Technologies spécialisées par domaine

---

## 🛠️ Stack Technique

| Composant | Technologie | Version | Description |
|-----------|-------------|---------|-------------|
| **Backend** | Symfony | 7.2 | Framework PHP robuste pour l'API REST |
| **ORM** | Doctrine | - | Gestion de la base de données |
| **Frontend** | React | 18+ | Bibliothèque UI moderne et performante |
| **Build Tool** | Vite | 5+ | Build ultra-rapide pour le développement |
| **Styles** | Tailwind CSS | v4 | Framework CSS utility-first |
| **UI Components** | Shadcn UI | - | Composants React accessibles et customisables |
| **Base de données** | MySQL | 8+ | Via WAMP Server |
| **Serveur Web** | WAMP | - | Apache, MySQL, PHP pour Windows |
| **Langage** | PHP | 8.3+ | Langage backend moderne avec typage strict |
| **Package Manager** | Composer / npm | - | Gestion des dépendances |

### Dépendances Principales

**Backend (Symfony)**

```json
{
  "symfony/framework-bundle": "^7.2",
  "doctrine/orm": "^2.19",
  "lexik/jwt-authentication-bundle": "^3.0",
  "nelmio/cors-bundle": "^2.5"
}
```

**Frontend (React)**

```json
{
  "react": "^18.3.0",
  "react-dom": "^18.3.0",
  "react-router-dom": "^6.24.0",
  "axios": "^1.7.0",
  "tailwindcss": "^4.0.0"
}
```

---

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- ✅ **PHP** >= 8.3

  ```bash
  php -v
  ```

- ✅ **Composer** (Gestionnaire de dépendances PHP)

  ```bash
  composer --version
  ```

- ✅ **Node.js** >= 18.x et **npm**

  ```bash
  node -v
  npm -v
  ```

- ✅ **Symfony CLI**

  ```bash
  symfony version
  ```

  [📥 Installation Symfony CLI](https://symfony.com/download)

- ✅ **WAMP Server** (Windows Apache MySQL PHP)
  - Installation par défaut dans `C:\wamp64`
  - MySQL activé
  - [📥 Télécharger WAMP](https://www.wampserver.com/)

- ✅ **Git** (pour cloner le projet)

  ```bash
  git --version
  ```

---

## 📥 Installation

### 1️⃣ Cloner le dépôt

```bash
git clone https://github.com/Gerard41330/ERP-InnovWebTech.git
cd ERP-InnovWebTech
```

### 2️⃣ Installation du Backend (Symfony)

```bash
cd api
composer install
```

**Configuration de la base de données** :

Créez un fichier `.env.local` dans le dossier `api/` :

```env
# api/.env.local
DATABASE_URL="mysql://root:@127.0.0.1:3306/erp_innovwebtech?serverVersion=8.0"
APP_ENV=dev
APP_SECRET=votre_secret_key_ici
```

**Création de la base de données** :

```bash
php bin/console doctrine:database:create
php bin/console doctrine:migrations:migrate
```

### 3️⃣ Installation du Frontend (React)

```bash
cd ../client
npm install
```

**Configuration de l'API** :

Créez un fichier `.env.local` dans le dossier `client/` :

```env
# client/.env.local
VITE_API_URL=http://127.0.0.1:8000/api
```

---

## 🚀 Démarrage

### Automatique (Recommandé)

Utilisez les scripts `.bat` fournis pour démarrer tous les services en une seule commande :

#### **Option 1 : Démarrage Simple**

```batch
start_work.bat
```

Ce script lance automatiquement :

1. 🟢 WAMP Server (Apache + MySQL)
2. 🔧 Serveur Symfony (port 8000)
3. 🎨 Serveur de développement React (port 5173)

#### **Option 2 : Démarrage Avancé**

```batch
start_work_advanced.bat
```

Fonctionnalités supplémentaires :

- ✅ Vérification de la configuration
- ⚠️ Alertes si WAMP n'est pas détecté
- 🔄 Option de continuer sans WAMP
- 📊 Affichage des URLs d'accès

#### **Configuration personnalisée**

Éditez `config.bat` pour adapter les chemins à votre installation :

```batch
@echo off
REM Chemin de votre installation WAMP
set WAMP_PATH=C:\wamp64

REM Délai d'attente après démarrage WAMP (secondes)
set WAMP_WAIT_TIME=10
```

---

### Manuel

Si vous préférez lancer les services séparément :

#### 1️⃣ Démarrer WAMP

- Lancez `wampmanager.exe` depuis `C:\wamp64`
- Attendez que l'icône devienne verte 🟢

#### 2️⃣ Démarrer le Backend Symfony

```bash
cd api
symfony server:start
```

Le serveur démarre sur `http://127.0.0.1:8000` 🔧

#### 3️⃣ Démarrer le Frontend React

Ouvrez un **nouveau terminal** :

```bash
cd client
npm run dev
```

Le client démarre sur `http://localhost:5173` 🎨

---

## 📂 Structure du Projet

### Backend (`/api`)

```
api/
├── config/
│   ├── packages/          # Configuration des bundles
│   ├── routes.yaml        # Définition des routes
│   └── services.yaml      # Configuration des services
├── migrations/            # Migrations Doctrine
├── public/
│   └── index.php          # Point d'entrée PHP
├── src/
│   ├── Controller/        # Contrôleurs API REST
│   ├── Entity/            # Entités Doctrine (Modèles)
│   ├── Repository/        # Repositories pour requêtes BD
│   ├── Service/           # Logique métier
│   └── Kernel.php
├── var/                   # Cache & logs
├── vendor/                # Dépendances Composer
├── .env                   # Variables d'environnement
└── composer.json
```

### Frontend (`/client`)

```
client/
├── public/                # Fichiers statiques
├── src/
│   ├── assets/           # Images, fonts, etc.
│   ├── components/       # Composants UI réutilisables
│   │   ├── ui/          # Shadcn UI components
│   │   └── common/      # Composants métier communs
│   ├── features/         # Modules fonctionnels
│   │   ├── auth/        # Authentification
│   │   ├── customers/   # Gestion clients (CRM)
│   │   ├── invoices/    # Facturation
│   │   └── dashboard/   # Tableau de bord
│   ├── layouts/          # Layouts de pages
│   ├── services/         # Services API (axios)
│   ├── utils/            # Fonctions utilitaires
│   ├── App.jsx           # Composant racine
│   ├── main.jsx          # Point d'entrée React
│   └── index.css         # Styles globaux (Tailwind)
├── .env.local            # Variables d'environnement
├── package.json
├── vite.config.js        # Configuration Vite
└── tailwind.config.js    # Configuration Tailwind
```

---

## 🌐 Points d'Accès

Une fois les serveurs démarrés, accédez aux interfaces :

| Service | URL | Description |
|---------|-----|-------------|
| 🎨 **Dashboard Client** | [http://localhost:5173](http://localhost:5173) | Interface utilisateur React |
| 🔧 **API Symfony** | [http://127.0.0.1:8000](http://127.0.0.1:8000) | Backend REST API |
| 📚 **API Docs** | [http://127.0.0.1:8000/api/doc](http://127.0.0.1:8000/api/doc) | Documentation API (à configurer) |
| 🗄️ **phpMyAdmin** | [http://localhost/phpmyadmin](http://localhost/phpmyadmin) | Gestion de la base de données |

### Identifiants par défaut (phpMyAdmin)

- **Utilisateur** : `root`
- **Mot de passe** : *(vide)*

---

## 📜 Scripts Disponibles

### Backend (Symfony)

```bash
# Démarrer le serveur
symfony server:start

# Créer une entité
php bin/console make:entity

# Créer une migration
php bin/console make:migration

# Exécuter les migrations
php bin/console doctrine:migrations:migrate

# Vider le cache
php bin/console cache:clear

# Lancer les tests
php bin/phpunit
```

### Frontend (React)

```bash
# Démarrer en développement
npm run dev

# Build pour production
npm run build

# Preview du build
npm run preview

# Linter
npm run lint

# Formater le code
npm run format
```

---

## 🗓️ Roadmap

### Phase 1 : Fondations ✅

- [x] Initialisation de l'architecture Symfony 7.2 & React
- [x] Configuration de Tailwind CSS v4 + Shadcn UI
- [x] Mise en place des scripts d'automatisation `.bat`
- [x] Configuration de WAMP et connexion MySQL

### Phase 2 : Base de Données 🚧

- [ ] Création du schéma de base de données
- [ ] Entités principales : User, Customer, Invoice, Product
- [ ] Relations et contraintes
- [ ] Seeders de données de test

### Phase 3 : Module CRM 📋

- [ ] API REST pour gestion des clients
- [ ] Interface de liste des clients
- [ ] Formulaires d'ajout/modification
- [ ] Recherche et filtres avancés
- [ ] Export de données (CSV, PDF)

### Phase 4 : Module Facturation 💰

- [ ] Création de factures avec items
- [ ] Calcul automatique de TVA (multi-taux)
- [ ] Génération de PDF
- [ ] Historique et suivi des paiements
- [ ] Relances automatiques

### Phase 5 : Authentification & Sécurité 🔐

- [ ] JWT Authentication
- [ ] Gestion des rôles (Admin, Manager, User)
- [ ] Middleware de sécurité
- [ ] Gestion des permissions

### Phase 6 : Dashboard & Analytics 📊

- [ ] KPIs en temps réel
- [ ] Graphiques et statistiques
- [ ] Rapports personnalisables
- [ ] Export de rapports

### Phase 7 : Optimisations 🚀

- [ ] Tests unitaires et fonctionnels
- [ ] Performance optimization
- [ ] SEO et accessibilité
- [ ] Documentation complète
- [ ] Containerisation Docker

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Forkez** le projet
2. **Créez** une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Pushez** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

### Standards de Code

- **Backend** : Suivre les [Symfony Best Practices](https://symfony.com/doc/current/best_practices.html)
- **Frontend** : Suivre les conventions React et ESLint configuré
- **Commits** : Utiliser les [Conventional Commits](https://www.conventionalcommits.org/)

---

## 👨‍💻 Auteur

**Gérard Stéphane**
Développeur Fullstack

- GitHub : [@Gerard41330](https://github.com/Gerard41330)
- LinkedIn : [Votre Profil LinkedIn](#)
- Email : <votre.email@example.com>

---

## 📄 License

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 🙏 Remerciements

- [Symfony](https://symfony.com/) pour le framework backend robuste
- [React](https://react.dev/) pour la bibliothèque UI moderne
- [Tailwind CSS](https://tailwindcss.com/) pour le framework CSS
- [Shadcn UI](https://ui.shadcn.com/) pour les composants accessibles
- [Vite](https://vitejs.dev/) pour le build tool ultra-rapide

---

## 📞 Support

Pour toute question ou problème :

1. Consultez la [documentation](./documentation)
2. Ouvrez une [issue](https://github.com/Gerard41330/ERP-InnovWebTech/issues)
3. Contactez-moi directement

---

<div align="center">

**Développé avec ❤️ par Gérard Stéphane**

⭐ N'oubliez pas de mettre une étoile si ce projet vous plaît !

</div>
