import RecipeModel from "../models/RecipeModel.js";
export const createRecipe = async (req, res) => {
  const { titre, ingredients, type } = req.body;

  try {
    const existingRecipe = await RecipeModel.getRecipeByTitle(titre);
    if (existingRecipe) {
      return res
        .status(400)
        .json({ message: "Une recette avec ce titre existe déjà." });
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
      return res.status(404).json({ message: "Recette non trouvée." });
    }
    return res.status(200).json(recipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const { titre, ingredients, type } = req.body;

  try {
    const existingRecipe = await RecipeModel.getRecipeByTitle(titre);
    if (existingRecipe && existingRecipe.id !== id) {
      return res
        .status(400)
        .json({ message: "Une recette avec ce titre existe déjà." });
    }

    const updatedRecipe = await RecipeModel.updateRecipe(id, {
      titre,
      ingredients,
      type,
    });

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recette non trouvée." });
    }

    return res.status(200).json(updatedRecipe);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  console.log(`Suppression de la recette avec l'ID : ${id}`);

  try {
    const deleted = await RecipeModel.deleteRecipe(id);
    console.log(`Résultat de la suppression : ${deleted}`);

    if (!deleted) {
      return res.status(404).json({ message: "Recette non trouvée." });
    }

    return res.status(200).json({ message: "Recette supprimée avec succès." });
  } catch (err) {
    console.error(`Erreur lors de la suppression : ${err.message}`);
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
