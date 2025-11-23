
allCategory =[];
async function getCategory() {
    try {
        let categ = await fetch ("https://www.themealdb.com/api/json/v1/1/categories.php");
        let data = await categ.json()
        console.log(data);
        allCategory = data.categories;

        displayCat()
    } catch (error) {
        
    }
    finally{
        document.getElementByClassName('loader').classList.add('d-none')
    }
}
getCategory()

function displayCat() {
    let cartona = '';
    for (let i = 0; i < allCategory.length; i++) {
        cartona += `<div class="col-md-4">
                        <div class="image" onclick="window.location.href='./category_item.html?catgry=${allCategory[i].strCategory}'">
                    <div class="inner w-75">
                        <img class="w-100 rounded-3 " src=${allCategory[i].strCategoryThumb} alt="">
                    </div>
                    <div class="layer w-75">
                        <h4>${allCategory[i].strCategory}</h4>
                        <p>${allCategory[i].strCategoryDescription.split(" ",20).join(" ")}</p>
                    </div>
                </div>
                    </div>`
        
    }
    document.querySelector(".row").innerHTML = cartona;
}