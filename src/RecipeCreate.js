import React, { useState } from "react";

function RecipeCreate(state) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });
  const formDataHandler = ((event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  });
  const submitHandler = ((event) => {
    event.preventDefault();
    state.setState([...state.state, formData]);
    setFormData({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  });
  
  return (
    <form name="create">
      <table style={{ backgroundColor: '#fcebbb' }}>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={formDataHandler}
              ></input>
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                placeholder="Cuisine"
                value={formData.cuisine}
                onChange={formDataHandler}
              ></input>
            </td>
            <td>
              <input
                name="photo"
                type="text"
                placeholder="URL"
                value={formData.photo}
                onChange={formDataHandler}
              ></input>
            </td>
            <td>
              <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={formData.ingredients}
                onChange={formDataHandler}
              ></textarea>
            </td>
            <td>
              <textarea
                name="preparation"
                placeholder="Preparation"
                value={formData.preparation}
                onChange={formDataHandler}
              ></textarea>
            </td>
            <td>
              <button type="submit" onClick={submitHandler}>
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
