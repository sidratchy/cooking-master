document.getElementById("search-Btn").addEventListener('click', function () {
    const searchInput = document.getElementById('search-input').value.trim();
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then(res => res.json())
      .then(data => displayMenu(data))
  });



  /// for display menu chart ////
  const displayMenu = (menu) => {

    menu.meals.forEach(meal => {

      const myMeal = document.createElement("div");
      const mealList = `
        
     
      <div class="card shadow m-2 ssss">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="..." onclick="#recipeIngrideants(${meal.strMeal})">
          <div class="card-body ">
            <h5 class="card-title text-center">${meal.strMeal}</h5>
            <button class="btn btn-info text-white d-block mx-auto" onclick="recipeIngredients('${meal.strMeal}')">Details</button>
           
          </div>
        </div>
     
    
        `;
      myMeal.innerHTML = mealList
      const result = document.getElementById('menu-result');
      result.appendChild(myMeal);

    }

    )
  };

const recipeIngredients = name =>{
  

      fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
      .then(res => res.json())
      .then(data => {
        const detail = data.meals[0];
         
        const menuRecipe = document.getElementById("details"); 
        menuRecipe.innerHTML = `
        <div class="card mx-auto shadow" style="width:26rem;">
  <img src="${detail.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    

    <h3>${detail.strMeal}</h3>
    
    <ul >
      <li>${detail.strIngredient1}</li>
      <li>${detail.strIngredient2}</li>
      <li>${detail.strIngredient3}</li>
      <li>${detail.strIngredient4}</li>
      <li>${detail.strIngredient5}</li>
      <li>${detail.strIngredient6}</li>
      <li>${detail.strIngredient7}</li>
      <li>${detail.strIngredient8}</li>
    </ul>
    <p>${detail.strInstructions}</p>
  </div>
</div>
         `
        
      })

  }



