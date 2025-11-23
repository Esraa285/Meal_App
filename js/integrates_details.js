const params = new URLSearchParams(window.location.search);
const integrate = params.get("integrate");

let allintegrates =[];
async function getIntegraye(inter) {
  try {
    let interg = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${inter}`);
    let res = await interg.json();
    console.log(res)
    allintegrates = res.meals;
    display()

  } catch (error) {

  }
}
getIntegraye(integrate)

function display() {
  let cartona = ``;
    for (let i = 0; i < allintegrates.length; i++) {
    cartona += ` <div class="col-md-3">
                        <div class="image" onclick="window.location.href='./integr_item.html?id=${allintegrates[i].idMeal}'">
                    <div class="inner">
                        <img class="w-100 rounded-3 " src=${allintegrates[i].strMealThumb} alt="">
                    </div>
                    <div class="layer">
                        <h4>${allintegrates[i].strMeal}</h4>
                    </div>
                </div>
                    </div>`

  }
  document.querySelector(".row").innerHTML = cartona;
}
