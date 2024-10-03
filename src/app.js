/* eslint-disable */
import express from "express"; // Correct import syntax without parentheses
import recipeRoutes from "./routes/recipe.js";

const app = express(); // Correct initialization of 'app'

app.use(express.json());

// Use the recipe routes
app.use("/api", recipeRoutes);

const PORT = process.env.APP_PORT || 3011;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
