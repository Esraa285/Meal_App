
let allMeals = [];
 async function getApi() {
  try {
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let res = await meal.json();
    console.log(res)
    allMeals = res.meals;


  } catch (error) {

  }
  display()
}
getApi();
function display() {
  let cartona = ``;
  if (allMeals){
    for (let i = 0; i < allMeals.length; i++) {
    cartona += ` <div class="col-md-3">
                        <div class="image" onclick="window.location.href='./details.html?id=${allMeals[i].idMeal}'">
                    <div class="inner">
                        <img class="w-100 rounded-3 " src=${allMeals[i].strMealThumb} alt="">
                    </div>
                    <div class="layer">
                        <h4>${allMeals[i].strMeal}</h4>
                    </div>
                </div>
                    </div>`

  }
  }
  
  document.querySelector(".row").innerHTML += cartona;
}



