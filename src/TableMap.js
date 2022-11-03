import React from 'react';

function TableMap(recipes){
    const buttonHandler = ((event) => {
        const recipeFilter = recipes.recipes.recipes.filter((recipe, index) => {
            if(index !== parseInt(event.target.id)){
                return recipe;
            }
            return null;
        });
        recipes.recipes.setRecipes(recipeFilter);
    });

    //I do not know why the below is happening, speculating that it has to do with the passing of the useState prop and that adds another object to it
    const rows = recipes.recipes.recipes.map((recipe, index) => {
      if (index % 2 === 0) {
        return (
          <tr key={index} style={{ backgroundColor: "#fcebbb" }}>
            <td className="smaller-col">{recipe.name}</td>
            <td className="smaller-col">{recipe.cuisine}</td>
            <td className="smaller-col">
              <img src={recipe.photo} alt="" />
            </td>
            <td className="bigger-col">{recipe.ingredients}</td>
            <td className="bigger-col"><p className='content_td'>{recipe.preparation}</p></td>
            <td className="smaller-col">
              <button name="delete" id={index} onClick={buttonHandler}>
                Delete
              </button>
            </td>
          </tr>
        );
      } else {
        return (
          <tr key={index}>
            <td className="smaller-col">{recipe.name}</td>
            <td className="smaller-col">{recipe.cuisine}</td>
            <td className="smaller-col">
              <img src={recipe.photo} alt="" />
            </td>
            <td className="bigger-col">{recipe.ingredients}</td>
            <td className="bigger-col">
              <p className="content_td">{recipe.preparation}</p>
            </td>
            <td className="smaller-col">
              <button name="delete" id={index} onClick={buttonHandler}>
                Delete
              </button>
            </td>
          </tr>
        );
      }
    });

    return (
        <>{rows}</>
    );
}

export default TableMap;