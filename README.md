# meal-planner-client
## This app allows users to enter ingredients and will deliver recipe suggestions that the user can save to their profile and make changes to the recipe as they see fit.

[Live site](https://lucky-fenglisu-5de387.netlify.app/)

***

## Collaborators
### Joel Myrtil, Daniel Yoon, Ahmed Mohamed, Phillip Chaplin

***

## User Stories

### As someone new to cooking that doesn’t know what to make, I want to find recipes for ingredients I have.

Feature Tasks:
- User can input an ingredient that they want to find recipes for.
- User can add additional input fields to search for more ingredients.
- User can see the recipe results for the ingredients they searched for.

Acceptance Test
- Ensure that a query with the user’s search parameters are being sent to our back-end server.
- Ensure that our back-end server is able to get recipes data from Spoonacular API.
- Ensure that our App is able to display recipes with the ingredients the user searched for.

Medium task

### As a gym rat, I want to be able to find recipes are easy, convenient, and quick to cook.
Feature tasks:
- User can sort recipes by how long they take to cook.
- User can sort recipes by the number of ingredients.
- User can sort recipes by number of steps.

Acceptance Test
- Ensure that a user can find recipes that take the shortest amount of time to cook.
- Ensure that a user can find recipes with the fewest ingredients.
- Ensure that a user can find recipes with the fewest number of steps.

Small task

### As someone with dietary restrictions, I want to be able to find recipes that are appropriate for me to eat.
Feature tasks:
- User can select constraints for the recipes to filter by.
- Users can see a filtered list of the recipes.
- Users can reset these filters and see all recipes.

Acceptance Test
- Ensure that a user can select filters for the recipes.
- Ensure that only the filtered recipes are displayed.
- Ensure that the original list of recipes can be retrieved.

Small task

### As someone with not a lot of time, I want to be able to refer back to recipes at a later time.
Feature tasks:
- User can have a personal list of recipes.
- User can save recipes to their personal list.
- User can remove recipes from their personal list.
- STRETCH GOAL (User can see which recipes they’ve already tried)

Acceptance Test
- Ensure that a user can save a recipe for later reference.
- Ensure that a user can access a personal list of recipes they saved.
- Ensure that a user can delete recipes from their personal list.
- STRETCH GOAL (User can checkmark if they’ve tried a recipe).
- STRETCH GOAL (User can filter the recipes they’ve already tried).

Medium task

### As a home cook that likes experimenting, I want to be able to customize recipes and refer to them later.
Feature tasks:
- User can have a copy of a recipe and customize it.
- User can update the recipe whenever they feel like it.
- User can remove custom recipes.

Acceptance Test
- Ensure that a user can customize any part of a recipe.
- Ensure that a user can update custom recipes at any point and save their updates.
- Ensure that a user can remove custom recipes from their list.

Medium-small task
