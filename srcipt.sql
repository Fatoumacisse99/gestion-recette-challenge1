DROP DATABASE IF EXISTS gestion_recette_abda;
CREATE DATABASE gestion_recette_abda;
use gestion_recette_abda;
CREATE TABLE recipes(
   id INT PRIMARY KEY AUtO_INCREMENT NOT NULL,
   titre  VARCHAR(50) NOT NULL UNIQUE,
   ingredients VARCHAR(50) NOT NULL,
   type VARCHAR(50) NOT NULL
);
INSERT INTO recipes (titre, ingredients, type) 
VALUES 
('Poulet Yassa', 'Poulet, Oignons, Moutarde, Citron', 'Plat principal'),
('Tiep Bou Dienn', 'Riz, Poisson, Legumes', 'Plat principal'),
('Crepes Sucrees', 'Farine, Oeufs, Lait, Sucre', 'Dessert'),
('Salade Nicoise', 'Thon, Œufs, Tomates, Haricots verts', 'Entree'),
('Mafe', 'Viande, Sauce arachide, Riz', 'Plat principal'),
('Fondant au chocolat', 'Chocolat, Beurre, Sucre, Œufs', 'Dessert');