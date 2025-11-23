let sName = document.getElementById('name');
let firstL = document.getElementById('fL');


sName.addEventListener('input',function(){
    getMeals(sName.value)
})
firstL.addEventListener('input',function(){
    let letter = firstL.value;
    searchLetter(letter[0])
})

let allMeals =[];
async function getMeals(meal) {
    try {
        let mealN = await fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`);
        let res = await mealN.json()
        console.log(res)
        allMeals = res.meals;
        display()
    } catch (error) {
        
    }
}
async function searchLetter(letter) {
    try {
        let mealN = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        let res = await mealN.json();
        allMeals = res.meals;
        display();
    } catch (error) {
        console.log(error);
    }
}
function display() {
  let cartona = ``;
  if (!allMeals) {
        document.querySelector(".show").innerHTML = "";
        return;
    }
    for (let i = 0; i < allMeals.length; i++) {
    cartona += ` <div class="col-md-3">
                        <div class="image" onclick="window.location.href='./search_details.html?id=${allMeals[i].idMeal}'">
                    <div class="inner">
                        <img class="w-100 rounded-3 " src=${allMeals[i].strMealThumb} alt="">
                    </div>
                    <div class="layer">
                        <h4>${allMeals[i].strMeal}</h4>
                    </div>
                </div>
                    </div>`

  }
  
  document.querySelector(".show").innerHTML = cartona;
}