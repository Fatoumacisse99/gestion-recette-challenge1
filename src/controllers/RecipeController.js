// Recipe.js
import RecipeModel from '../models/RecipeModel.js';
const validateRecipeFields = (fields) => {
  const errors = [];
  if (!fields.titre || fields.titre.trim() === '') {
    errors.push({
      type: 'field',
      msg: 'Le titre ne peut pas être vide!',
      path: 'titre',
      location: 'body',
    });
  }
  if (!fields.ingredients || fields.ingredients.trim() === '') {
    errors.push({
      type: 'field',
      msg: 'Les ingrédients ne peuvent pas être vides!',
      path: 'ingredients',
      location: 'body',
    });
  }
  if (!fields.type || fields.type.trim() === '') {
    errors.push({
      type: 'field',
      msg: 'Le type ne peut pas être vide!',
      path: 'type',
      location: 'body',
    });
  }
  return errors;
};

export const createRecipe = async (req, res) => {
  const { titre, ingredients, type } = req.body;

  const errors = validateRecipeFields(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    const existingRecipe = await RecipeModel.getRecipeByTitle(titre);
    if (existingRecipe) {
      return res
        .status(400)
        .json({ message: 'Une recette avec ce titre existe déjà.' });
    }
    const newRecipe = await RecipeModel.createRecipe({
      titre,
      ingredients,
      type,
    });
    return res.status(201).json(newRecipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getAllRecipes = async (_req, res) => {
  try {
    const recipes = await RecipeModel.getAllRecipes();
    return res.status(200).json(recipes);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await RecipeModel.getRecipeById(id);
    if (!recipe) {
      return res.status(404).json({ message: 'Recette non trouvée.' });
    }
    return res.status(200).json(recipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export const updateRecipe = async (req, res) => {
  const { id } = req.params; 
  const { titre, ingredients, type } = req.body;

  // Valider les champs envoyés dans la requête
  const errors = validateRecipeFields(req.body);
  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  try {
    // Vérifie si une recette avec le nouveau titre existe déjà, mais ignore la recette actuelle
    const existingRecipe = await RecipeModel.getRecipeByTitle(titre);
    if (existingRecipe && existingRecipe.id !== id) {
      return res.status(400).json({ message: 'Une recette avec ce titre existe déjà.' });
    }

    // Mettre à jour la recette avec les nouvelles informations
    const updatedRecipe = await RecipeModel.updateRecipe(id, {
      titre,
      ingredients,
      type,
    });

    if (!updatedRecipe) {
      return res.status(404).json({ message: 'Recette non trouvée.' });
    }

    return res.status(200).json(updatedRecipe); // Répondre avec la recette mise à jour
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  console.log(`Suppression de la recette avec l'ID : ${id}`); // Log de l'ID reçu

  try {
    const deleted = await RecipeModel.deleteRecipe(id);
    console.log(`Résultat de la suppression : ${deleted}`); // Log du résultat de la suppression

    if (!deleted) {
      return res.status(404).json({ message: 'Recette non trouvée.' });
    }

    // Suppression réussie
    return res.status(200).json({ message: 'Recette supprimée avec succès.' });
  } catch (err) {
    console.error(`Erreur lors de la suppression : ${err.message}`); // Log des erreurs
    return res.status(500).json({ message: err.message });
  }
};


export default {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
