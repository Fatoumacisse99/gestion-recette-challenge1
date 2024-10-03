# API de Gestion des Recettes

## Description

Cette API permet de gérer les recettes dans une application de gestion de recettes. Elle permet de créer, lire, mettre à jour et supprimer des recettes.

## Endpoints de l’API

| Méthode | Endpoint           | Description                      |
| ------- | ------------------ | -------------------------------- |
| GET     | `/api/recipes`     | Récupérer toutes les recettes    |
| GET     | `/api/recipes/:id` | Récupérer une recette par ID     |
| POST    | `/api/recipes`     | Créer une nouvelle recette       |
| PUT     | `/api/recipes/:id` | Mettre à jour une recette par ID |
| DELETE  | `/api/recipes/:id` | Supprimer une recette par ID     |

### Recettes

- **GET /api/recipes**

  - Récupère toutes les recettes.
  - **Exemple de réponse** :
    ```json
    [
      {
        "id": 1,
        "titre": "Salade César revisitée",
        "ingredients": "Laitue, Poulet grillé",
        "type": "Entrée"
      }
    ]
    ```

- **GET /api/recipes/:id**

  - Récupère une recette par ID.
  - **Paramètre** :
    - `id` : L'ID de la recette à récupérer.
  - **Exemple de requête** :
    ```bash
    GET /api/recipes/1
    ```
  - **Exemple de réponse** :
    ```json
    {
      "id": 1,
      "titre": "Salade César revisitée",
      "ingredients": "Laitue, Poulet grillé",
      "type": "Entrée"
    }
    ```

- **POST /api/recipes**

  - Crée une nouvelle recette.
  - **Exemple de requête** :
    ```bash
    POST /api/recipes
    Content-Type: application/json
    ```
  - **Corps de la requête (Body)** :
    ```json
    {
      "titre": "Pâtes à la carbonara",
      "ingredients": "Pâtes, Œufs, Lardons",
      "type": "Plat principal"
    }
    ```
  - **Exemple de réponse** :
    ```json
    {
      "id": 2,
      "titre": "Pâtes à la carbonara",
      "ingredients": "Pâtes, Œufs, Lardons",
      "type": "Plat principal"
    }
    ```

- **PUT /api/recipes/:id**

  - Met à jour une recette existante.
  - **Paramètre** :
    - `id` : L'ID de la recette à mettre à jour.
  - **Exemple de requête** :
    ```bash
    PUT /api/recipes/1
    Content-Type: application/json
    ```
  - **Corps de la requête (Body)** :
    ```json
    {
      "titre": "Salade César améliorée",
      "ingredients": "Laitue, Poulet grillé, Parmesan",
      "type": "Entrée"
    }
    ```
  - **Exemple de réponse** :
    ```json
    {
      "id": 1,
      "titre": "Salade César améliorée",
      "ingredients": "Laitue, Poulet grillé, Parmesan",
      "type": "Entrée"
    }
    ```

- **DELETE /api/recipes/:id**
  - Supprime une recette par ID.
  - **Paramètre** :
    - `id` : L'ID de la recette à supprimer.
  - **Exemple de requête** :
    ```bash
    DELETE /api/recipes/1
    ```
  - **Exemple de réponse** :
    ```json
    {
      "message": "Recette supprimée avec succès."
    }
    ```

# Prérequis

avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine:

- Node.js(v16 ou superieure)
- Mysql
- Postman ( pour tester l'API)

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Fatoumacisse99/gestion-recette-challenge1.git

   ```

2. Accédez au répertoire du projet :

```bash
cd gestion-recette-challenge1
```

3. Installez les dépendances :

```bash
npm install
```

4. Configurez la base de données :

Assurez-vous que Mysql est en cours d'exécution sur votre machine locale.
renommer le fichier .env.exemple en .env et entrer vos informations de connexion dans ce fichier:

```bash
DB_HOST=localhost  //pour executer l'application avec  Docker, remplacer 'localhost'par 'db'
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdb
DB_PORT=3306
APP_PORT=3010
```

5. Démarrez le serveur :

```bash
 npm start
```

## Exécution des commandes

- Pour exécuter les tests unitaires, utilisez la commande suivante :

```bash
npm test
```

- Pour linting, exécutez la commande suivante

```bash

npm run lint
```

Pour formater le code avec Prettier, exécutez :

```bash

npm run format
```

## Lancer l'API avec Docker

Pour lancer l'API avec Docker, suivez ces étapes :

## Commandes Docker

1. **Construire et démarrer les services avec la commande suivante:**
   ```bash
   docker-compose up --build
   ```

````
2.**Démarrer les services en arrière-plan avec la commande suivante:**
```bash
docker-compose up -d
````

3.**Ensuite Exécuter les tests de l'application avec la commande suivante:**

```bash
  docker exec -it recette-api npm run test
```

- **Exécuter ESLint pour corriger le code avec la commande suivante:**

```bash
docker exec -it recette-api npm run lint:fix
```

**Formater le code selon les normes avec la commande suivante:**

```bash
docker exec -it recette-api npm run format
```

- Vérifier que les conteneurs sont en cours d'exécution avec la commande suivante:
  ```bash
  docker ps
  ```

4. Accéder à l'API

L'API sera disponible à l'adresse suivant

- http://localhost:3011/api/recipes.

## Auteur

- [Fatouma Cisse](https://github.com/Fatoumacisse99)
