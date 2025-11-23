
const params = new URLSearchParams(window.location.search);
const area = params.get("area");

let AreaMeals =[];
async function getAreaMeal(areaName) {
  try {
    let Area = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${areaName}`);
    let res = await Area.json();
    console.log(res)
    AreaMeals = res.meals;
    display()

  } catch (error) {

  }
}
getAreaMeal(area)

function display() {
  let cartona = ``;
    for (let i = 0; i < AreaMeals.length; i++) {
    cartona += ` <div class="col-md-3">
                        <div class="image" onclick="window.location.href='./details_area.html?id=${AreaMeals[i].idMeal}'">
                    <div class="inner">
                        <img class="w-100 rounded-3 " src=${AreaMeals[i].strMealThumb} alt="">
                    </div>
                    <div class="layer">
                        <h4>${AreaMeals[i].strMeal}</h4>
                    </div>
                </div>
                    </div>`

  }
  document.querySelector(".row").innerHTML = cartona;
}
