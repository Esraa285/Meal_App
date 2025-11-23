let allinteg = [];
 async function getintegrates() {
  try {
    let inte = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let res = await inte.json();
    console.log(res)
    allinteg = res.meals;


  } catch (error) {

  }
  display()
}
getintegrates();
function display() {
  let cartona = ``;
    for (let i = 0; i < allinteg.slice(0, 20).length; i++) {
    cartona += ` <div class="col-md-3 text-white">
                        <div class= "text-center" onclick="window.location.href='./integrates_details.html?integrate=${allinteg[i].strIngredient}'">
                        <i class="fa-solid fa-drumstick-bite fs-1"></i>
                        <h4>${allinteg[i].strIngredient}</h4>
                        <p>${(allinteg[i].strDescription || "").split(" ",30).join(" ")}</p>
                        </div>
                    </div>`

  }
  
  document.querySelector(".row").innerHTML = cartona;
}