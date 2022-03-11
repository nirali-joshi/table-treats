import axios from "axios";

export function getCategories() {
  return () =>
    axios({
      method: "get",
      url: "http://localhost:5000/categories",
    })
      .then((resp) => {
        if (resp && resp.data) {
          return resp.data;
        }
      })
      .catch((err) => {
        if (err) {
          return err;
        }
      });
}

export function saveNewRecipe(newRecipe) {
  return () =>
    axios({
      method: "post",
      url: "http://localhost:5000/categories",
      data: newRecipe,
    })
      .then((resp) => resp)
      .catch((err) => err);
}

export function getRecipes() {
  return () =>
    axios({
      method: "get",
      url: "http://localhost:5000/categories/recipes",
    })
      .then((resp) => {
        if (resp && resp.data) {
          return resp.data;
        }
      })
      .catch((err) => {
        if (err) {
          return err;
        }
      });
}

export function getRecipeById(recipeId) {
  return () =>
    axios({
      method: "get",
      url: `http://localhost:5000/categories/recipe/${recipeId}`,
    })
      .then((resp) => {
        if (resp && resp.data) {
          return resp.data;
        }
      })
      .catch((err) => {
        if (err) {
          return err;
        }
      });
}

export function deleteRecipe(recipeId) {
  return () =>
    axios({
      method: "delete",
      url: `http://localhost:5000/categories/recipe/${recipeId}`,
    })
      .then((resp) => {
        if (resp) {
          return resp;
        }
      })
      .catch((err) => {
        if (err) {
          return err;
        }
      });
}
