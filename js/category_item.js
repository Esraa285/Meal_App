const params = new URLSearchParams(window.location.search);
const catgry = params.get("catgry");

let allCategories =[];
async function getCategoryMeals(categoryName) {
  try {
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    let data = await response.json();
    console.log(data.meals); 
    allCategories = data.meals;
    display()
  } catch (error) {
    console.log(error);
  }
}
getCategoryMeals(catgry)


function display() {
  let cartona = ``;
    for (let i = 0; i < allCategories.length; i++) {
    cartona += ` <div class="col-md-3">
                        <div class="image" onclick="window.location.href='./category_details.html?id=${allCategories[i].idMeal}'">
                    <div class="inner">
                        <img class="w-100 rounded-3 " src=${allCategories[i].strMealThumb} alt="">
                    </div>
                    <div class="layer">
                        <h4>${allCategories[i].strMeal}</h4>
                    </div>
                </div>
                    </div>`

  }
  document.querySelector(".row").innerHTML = cartona;
}
