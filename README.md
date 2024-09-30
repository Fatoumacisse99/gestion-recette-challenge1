

# API de Gestion des Recettes

## Description

Cette API permet de gérer les recettes dans une application de gestion de recettes. Elle permet de créer, lire, mettre à jour et supprimer des recettes.

## Endpoints

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
        "type": "Entree"
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
      "titre": "Salade Cesar revisitee",
      "ingredients": "Laitue, Poulet grille",
      "type": "Entree"
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
      "type": "Entree"
    }
    ```
  - **Exemple de réponse** :
    ```json
    {
      "id": 1,
      "titre": "Salade César améliorée",
      "ingredients": "Laitue, Poulet grillé, Parmesan",
      "type": "Entree"
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

## Installation

1. Clonez le dépôt :

   ```bash
   git clone https://github.com/Fatoumacisse99/APIGestion_Recettes.git

 2. Accédez au répertoire du projet :

```bash
cd APIGestion_Recettes
```
3. Installez les dépendances :

```bash
npm install
```

4. Configurez la base de données dans un fichier .env :

```bash

DB_HOST=localhost
DB_USER=root
DB_PASSWORD= yourpassword
DB_NAME=yourdb
DB_PORT= port
```

4. Démarrez le serveur :

```bash
 npm start
 ```


## Auteurs

[Fatima cissé](https://github.com/Fatoumacisse99)
et [Abdarahmane Demba](https://github.com/Abdarahmane)

