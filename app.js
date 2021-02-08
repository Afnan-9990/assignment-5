
document.getElementById('submitButton').addEventListener("click",function(){
    const input = document.getElementById("input").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
    .then(res => res.json())
    .then(data => displayMenu(data.meals))
    .catch(error => alert('Not Found'))
})




const displayMenu = foodMenu =>{
    const allfoodMenuDiv = document.getElementById('foodMenu');
    allfoodMenuDiv.innerHTML= "";
    const mealDetailDiv = document.getElementById('mealDetail');
    mealDetailDiv.innerHTML= "";
    for (let i = 0; i < foodMenu.length; i++) {
        const element = foodMenu[i];
        const foodMenuDiv = document.createElement('div');
        foodMenuDiv.className = "foodlist";
        const foodRecipe =`
        <img onclick="showMealDetails('${element.strMeal}')" src ="${element.strMealThumb}">
        <h3 onclick="showMealDetails('${element.strMeal}')">${element.strMeal}</h3>
        
     `
     foodMenuDiv.innerHTML = foodRecipe;
     allfoodMenuDiv.appendChild(foodMenuDiv);

    }
}

const showMealDetails = name =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
    .then(resp => resp.json())
    .then(data => mealDetail(data.meals))
}
const mealDetail = recipe =>{
    const allfoodMenuDiv = document.getElementById('mealDetail');
    allfoodMenuDiv.innerHTML= "";
    for (let i = 0; i < recipe.length; i++) {
        const element = recipe[i];
        const foodMenuDiv = document.createElement('div');
        foodMenuDiv.className = "mealInfo";
        const foodRecipe =`
        <img src ="${element.strMealThumb}">
        <h3>${element.strMeal}</h3>
        <h5>Ingredient</h5>
        <li>${element.strIngredient1} ${element.strMeasure1}</li>
        <li>${element.strIngredient2} ${element.strMeasure2}</li>
        <li>${element.strIngredient3} ${element.strMeasure3}</li>
        <li>${element.strIngredient4} ${element.strMeasure4}</li>
        <li>${element.strIngredient5} ${element.strMeasure5}</li>
        <li>${element.strIngredient6} ${element.strMeasure6}</li>
        <li>${element.strIngredient7} ${element.strMeasure7}</li>
        <li>${element.strIngredient8} ${element.strMeasure8}</li>
        <li>${element.strIngredient9} ${element.strMeasure9}</li>
        <li>${element.strIngredient10} ${element.strMeasure10}</li>

        
     `
     foodMenuDiv.innerHTML = foodRecipe;
     allfoodMenuDiv.appendChild(foodMenuDiv);
     
    }
}
