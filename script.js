document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    const recipeList = document.getElementById('recipe-list');

   
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    
    function displayRecipes() {
        recipeList.innerHTML = '';
        recipes.forEach((recipe, index) => {
            const li = document.createElement('li');
            li.textContent = recipe.name;
            li.classList.add('bg-white', 'p-2', 'rounded', 'shadow');
            li.dataset.index = index;
            recipeList.appendChild(li);

            
            li.addEventListener('click', () => {
                alert(`Name: ${recipe.name}\nIngredients: ${recipe.ingredients.join(', ')}\nInstructions: ${recipe.instructions}`);
            });

           
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('bg-red-500', 'text-white', 'px-2', 'py-1', 'rounded', 'hover:bg-red-600', 'transition', 'duration-300', 'ml-2');
            deleteButton.addEventListener('click', (e) => {
                e.stopPropagation(); 
                recipes.splice(index, 1);
                localStorage.setItem('recipes', JSON.stringify(recipes));
                displayRecipes();
            });
            li.appendChild(deleteButton);
        });
    }

    
    recipeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('recipe-ingredients').value.split(',');
        const instructions = document.getElementById('recipe-instructions').value;

        if (name && ingredients.length > 0 && instructions) {
            recipes.push({ name, ingredients, instructions });
            localStorage.setItem('recipes', JSON.stringify(recipes));
            displayRecipes();
            recipeForm.reset();
        }
    });

  
    displayRecipes();
    
function displayRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe, index) => {
        const li = document.createElement('li');
        li.classList.add('bg-white', 'p-2', 'rounded', 'shadow');
        li.dataset.index = index;

        const nameElement = document.createElement('h3');
        nameElement.textContent = recipe.name;
        nameElement.classList.add('text-lg', 'font-semibold', 'mb-2');
        li.appendChild(nameElement);

        const ingredientsElement = document.createElement('p');
        ingredientsElement.textContent = `Ingredients: ${recipe.ingredients.join(', ')}`;
        ingredientsElement.classList.add('mb-1');
        li.appendChild(ingredientsElement);

        const instructionsElement = document.createElement('p');
        instructionsElement.textContent = `Instructions: ${recipe.instructions}`;
        li.appendChild(instructionsElement);

        recipeList.appendChild(li);

        
        li.addEventListener('click', () => {
            alert(`Name: ${recipe.name}\nIngredients: ${recipe.ingredients.join(', ')}\nInstructions: ${recipe.instructions}`);
        });

        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('bg-red-500', 'text-white', 'px-2', 'py-1', 'rounded', 'hover:bg-red-600', 'transition', 'duration-300', 'ml-2');
        deleteButton.addEventListener('click', (e) => {
            e.stopPropagation(); 
            recipes.splice(index, 1);
            localStorage.setItem('recipes', JSON.stringify(recipes));
            displayRecipes();
        });
        li.appendChild(deleteButton);
    });
}

});
