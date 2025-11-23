const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function showAreaDetails(id) {
  try {
    let meal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let data = await meal.json();
    console.log(data)
    let res = data.meals[0];
    displayareaDetails(res)
  } 
  catch (error) {
console.log(error)
  }
  
}
showAreaDetails(id);

function displayareaDetails(res) {
  let cartona = ` <div class="col-md-4">
                <img class="w-100 rounded-3 mt-5" src="${res.strMealThumb}" alt="">
                <h3 class ="text-white">${res.strMeal}</h3>
            </div>
            <div class="col-md-8 text-white fs-5 ms-5">
                <div class="ins mt-5 ">
                    <h3>Instraction</h3>
                <p class="fs-6">${(res.strInstructions|| "").split(" ",30).join(" ")}</p>
                </div>
                <div class="reci">
                   <h4>Area:<span>${res.strArea}</span></h4> 
                   <h4>Category:<span>${res.strCategory}</span></h4> 
                  <div>
                    <h4>recipe:</h4>
                    <ul class="list-unstyled d-flex flex-wrap gap-2 ">
                    ${getIngredients(res)}
                </ul>
                  </div>
                  <h4>tags:</h4>
                  <a href=${res.strSource} class="btn btn-success">Source</a>
                  <a href=${res.strYoutube} class="btn btn-danger">Youtube</a>
                    
                </div>
            </div>`

  document.querySelector(".details").innerHTML = cartona;
}



function getIngredients(meal) {
  let list = "";

  for (let i = 1; i <= 20; i++) {
    let ing = meal[`strIngredient${i}`];
    let measure = meal[`strMeasure${i}`];

    if (ing && ing.trim()) {
      list += `<li class="alert alert-info m-2 p-1">${measure} ${ing}</li>`;
    }
  }

  return list;
}
