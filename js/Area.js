
let allAreas =[];
 async function getArea() {
  try {
    let area = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let res = await area.json();
    console.log(res)
    allAreas = res.meals;

    displayArea();

  } catch (error) {

  }

}
getArea()
function displayArea() {
  let cartona = ``;
    for (let i = 0; i < allAreas.length; i++) {
    cartona += `   <div class="col-md-3 text-white">
                        <div class= "text-center" onclick="window.location.href='./Area_meal.html?area=${allAreas[i].strArea}'">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h4>${allAreas[i].strArea}</h4>
                        </div>
                    </div>`

  }
  
  document.querySelector(".row").innerHTML = cartona;
}
