import 'regenerator-runtime';
import { mark } from 'regenerator-runtime';

import * as model from './model';
import recipeView from './views/recipeView';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinnner();

    // loading recipe #1
    await model.loadRecipe(id);

    // rendering recipe #2
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};

['hashchange', 'load'].forEach(ev =>
  window.addEventListener(ev, controlRecipes)
);
