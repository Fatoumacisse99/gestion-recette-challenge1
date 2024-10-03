// /* eslint-disable */
// import RecipeModel from '../src/models/RecipeModel.js';
import RecipeModel from '../src/models/RecipeModel.js';

describe('Recipe Model with Real Database', () => {
  it('should create a new recipe', async () => {
    const uniqueTitle = 'New Recipe ' + Date.now();
    const newRecipe = {
      titre: uniqueTitle,
      ingredients: 'Some ingredients',
      type: 'Main',
    };
    const result = await RecipeModel.createRecipe(newRecipe);
    expect(result.id).toBeDefined();
  });

  it('should retrieve a recipe by ID', async () => {
    const uniqueTitle = 'Retrieve Me ' + Date.now();
    const newRecipe = {
      titre: uniqueTitle,
      ingredients: 'Ingredients',
      type: 'Main',
    };
    const createdRecipe = await RecipeModel.createRecipe(newRecipe);
    const recipe = await RecipeModel.getRecipeById(createdRecipe.id);
    expect(recipe).toBeDefined();
    expect(recipe.id).toBe(createdRecipe.id);
  });

  it('should update a recipe', async () => {
    const uniqueTitle = 'Recipe to Update ' + Date.now();
    const createdRecipe = await RecipeModel.createRecipe({
      titre: uniqueTitle,
      ingredients: 'Ingredients',
      type: 'Main',
    });

    const updatedRecipeData = {
      titre: 'Updated Recipe ' + Date.now(),
      ingredients: 'Updated ingredients',
      type: 'Dessert',
    };
    const updatedRecipe = await RecipeModel.updateRecipe(
      createdRecipe.id,
      updatedRecipeData,
    );

    expect(updatedRecipe.titre).toBe(updatedRecipeData.titre);
    expect(updatedRecipe.id).toBe(createdRecipe.id);
  });

  it('should retrieve a recipe by title', async () => {
    const uniqueTitle = 'Test Recipe ' + Date.now();
    const newRecipe = {
      titre: uniqueTitle,
      ingredients: 'Some ingredients',
      type: 'Main',
    };
    await RecipeModel.createRecipe(newRecipe);

    const recipe = await RecipeModel.getRecipeByTitle(uniqueTitle);
    expect(recipe).toBeDefined();
    expect(recipe.titre).toBe(uniqueTitle);
  });

  it('should return null for a non-existent recipe by title', async () => {
    const recipe = await RecipeModel.getRecipeByTitle('Non-existent Title');
    expect(recipe).toBeNull();
  });

  it('test delete', async () => {
    const recipe = await RecipeModel.deleteRecipe(1);
    expect(recipe).not.toBeNull();
  });
});
