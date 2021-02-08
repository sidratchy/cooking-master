document.getElementById("search-Btn").addEventListener('click', function () {
  const searchInput = document.getElementById('search-input').value.trim();


  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(res => res.json())
    .then(data => displayMenu(data))
});



/// for display menu chart ////
const displayMenu = (menu) => {
  const mealList = document.getElementById('menu-result');

  if (document.getElementById('search-input').value == "") {
    document.getElementById("required").innerHTML = 'input field required'
  }

  else {

    document.getElementById("required").innerHTML = "";

    if (menu.meals) {
      document.getElementById('search-input').value = "";
      document.getElementById('notMatch').innerHTML = "";
      mealList.innerHTML = "";

      menu.meals.forEach(meal => {
        mealList.innerHTML += `
        
     <div class="card shadow  h-100">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
          <div class="card-body ">
            <h5 class="card-title text-center">${meal.strMeal}</h5>
            <button class="btn btn-link stretched-link" onclick="recipeIngredients('${meal.strMeal}')"></button>
           
          </div>
        </div>
     `;

      })
    } else {
      document.getElementById('notMatch').innerHTML = 'Do not Match your search.Please try again..';
      document.getElementById('search-input').value = "";

    }
  }
};

//for recipeIngredients details.......
const recipeIngredients = name => {


  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(res => res.json())
    .then(data => showRecipe(data));


  const showRecipe = mealName => {
    const detail = mealName.meals[0];

    const menuRecipe = document.getElementById("details");
    menuRecipe.innerHTML = `
        <div class="card mx-auto shadow w-75">
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
  }

}



