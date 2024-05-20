_QUANTITY_TYPE = {
    'Onion': 'Onions',
    'Red Onion': 'Onions',
    'Garlic': 'Cloves',
    'Ginger': 'Roots',
    'Spinach': 'Grams',
    'Peppers': 'Peppers',
    'Chilli': 'Chillies',
    'Peas': 'Grams',
    'Spring Onions': 'Spring Onions',
    'Potatoes': 'Potatoes',
    'Broccoli': 'Trees',
    'Carrot': 'Carrots',
    'Celery': 'Celery',
    'Stir Fry Vegetables': 'Grams',
    'Tinned Tomatoes': 'Tins',
    'Arrabbiata Sauce': 'Jars',
    'Tomato Puree': 'Tbsps',
    'Coconut Milk': 'Tins',
    'Kidney Beans': 'Tins',
    'Pork Mince': 'Grams',
    'Diced Ham': 'Grams',
    'Chorizo': 'Sausages',
    'Beef Mince': 'Grams',
    'Chicken Breasts': 'Grams',
    'Chicken Thighs': 'Grams',
    'Fish': 'Grams',
    'Sausages': 'Sauages',
    'Rice': 'Grams',
    'Pasta': 'Grams',
    'Lasagne Sheets': 'Sheets',
    'Spaghetti': 'Grams',
    'Noodles': 'Grams',
    'Wraps': 'Wraps',
    'Chips': 'Grams',
    'Eggs': 'Eggs',
    'Double Cream': 'Mls',
    'Mascarpone': 'Grams',
    'Ricotta': 'Grams',
    'Mozzarella': 'Grams',
    'Cheddar': 'Grams',
    'Soy Sauce': 'Tbsps',
    'Sweet Chilli Sauce': 'Tbsps',
    'Red Curry Paste': 'Tbsps',
    'Green Curry Paste': 'Tbsps',
    'Beef Stock': 'Pots',
    'Chicken Stock': 'Pots',
    'Vegetable Stock': 'Pots',
    'Cornflour': 'Tsps',
    'Oats': 'Grams',
    'Milk': 'Pints',
    'Frozen Chicken': 'Grams',
    'Salad': 'Grams',
    'Crisps': 'Packets',
    'Bacon': 'Rashers',
    'Hash Browns': 'Hash Browns',
    'Chocolate': 'Bars',
    'Coke': 'Bottles',
    'Tortellini': 'Pack',
    'Beer': 'Cans',
    'Wine': 'Bottles'
};

_RECIPES = {
    'Stir Fry': [
        { ingredient: 'Garlic', quantity: 3 },
        { ingredient: 'Ginger', quantity: 0.25 },
        { ingredient: 'Pork Mince', quantity: 750 },
        { ingredient: 'Noodles', quantity: 250 },
        { ingredient: 'Stir Fry Vegetables', quantity: 500 },
        { ingredient: 'Soy Sauce', quantity: 8 },
        { ingredient: 'Sweet Chilli Sauce', quantity: 8 },
        { ingredient: 'Cornflour', quantity: 2 }
    ],
    'Pasta Bake': [
        { ingredient: 'Onion', quantity: 1 },
        { ingredient: 'Garlic', quantity: 3 },
        { ingredient: 'Spinach', quantity: 200 },
        { ingredient: 'Peppers', quantity: 1 },
        { ingredient: 'Chicken Breasts', quantity: 400 },
        { ingredient: 'Pasta', quantity: 250 },
        { ingredient: 'Tinned Tomatoes', quantity: 2 },
        { ingredient: 'Mascarpone', quantity: 200 },
        { ingredient: 'Mozzarella', quantity: 50 },
        { ingredient: 'Cheddar', quantity: 100 }
    ],
    'Chorizo Pasta': [
        { ingredient: 'Onion', quantity: 1 },
        { ingredient: 'Chilli', quantity: 1 },
        { ingredient: 'Garlic', quantity: 3 },
        { ingredient: 'Spinach', quantity: 200 },
        { ingredient: 'Peppers', quantity: 1 },
        { ingredient: 'Chorizo', quantity: 1 },
        { ingredient: 'Pasta', quantity: 250 },
        { ingredient: 'Tinned Tomatoes', quantity: 1 }
    ],
    'Fish Pasta': [
        { ingredient: 'Onion', quantity: 1 },
        { ingredient: 'Garlic', quantity: 3 },
        { ingredient: 'Spinach', quantity: 200 },
        { ingredient: 'Peas', quantity: 200 },
        { ingredient: 'Peppers', quantity: 1 },
        { ingredient: 'Pasta', quantity: 250 },
        { ingredient: 'Fish', quantity: 300 },
        { ingredient: 'Double Cream', quantity: 300 },
        { ingredient: 'Vegetable Stock', quantity: 1 }
    ],
    'Sausage Pasta': [
        { ingredient: 'Onion', quantity: 1 },
        { ingredient: 'Garlic', quantity: 3 },
        { ingredient: 'Spinach', quantity: 200 },
        { ingredient: 'Peppers', quantity: 1 },
        { ingredient: 'Spaghetti', quantity: 250 },
        { ingredient: 'Arrabbiata Sauce', quantity: 1 },
        { ingredient: 'Sausages', quantity: 8 }
    ],
    'Egg Fried Rice': [
        { ingredient: 'Spring Onions', quantity: 4 },
        { ingredient: 'Eggs', quantity: 4 },
        { ingredient: 'Rice', quantity: 600 },
        { ingredient: 'Diced Ham', quantity: 400 },
        { ingredient: 'Soy Sauce', quantity: 3 }
    ],
    'Spaghetti Bolognese': [
        { ingredient: 'Onion', quantity: 1 },
        { ingredient: 'Carrot', quantity: 2 },
        { ingredient: 'Celery', quantity: 4 },
        { ingredient: 'Garlic', quantity: 3 },
        { ingredient: 'Spinach', quantity: 200 },
        { ingredient: 'Beef Mince', quantity: 750 },
        { ingredient: 'Tinned Tomatoes', quantity: 2 },
        { ingredient: 'Tomato Puree', quantity: 2 },
        { ingredient: 'Beef Stock', quantity: 1 },
        { ingredient: 'Spaghetti', quantity: 250 }
    ],
    'Peri Peri Chicken': [
        { ingredient: 'Red Onion', quantity: 1 },
        { ingredient: 'Broccoli', quantity: 1 },
        { ingredient: 'Potatoes', quantity: 3 },
        { ingredient: 'Chicken Thighs', quantity: 500 }
    ],
    'Red Thai Curry': [
        { ingredient: 'Ginger', quantity: 2 },
        { ingredient: 'Spinach', quantity: 200 },
        { ingredient: 'Peppers', quantity: 1 },
        { ingredient: 'Coconut Milk', quantity: 2 },
        { ingredient: 'Chicken Breasts', quantity: 350 },
        { ingredient: 'Rice', quantity: 250 },
        { ingredient: 'Red Curry Paste', quantity: 3 }
    ],
    'Green Thai Curry': [
        { ingredient: 'Ginger', quantity: 2 },
        { ingredient: 'Spinach', quantity: 200 },
        { ingredient: 'Peppers', quantity: 1 },
        { ingredient: 'Coconut Milk', quantity: 2 },
        { ingredient: 'Chicken Breasts', quantity: 350 },
        { ingredient: 'Rice', quantity: 250 },
        { ingredient: 'Green Curry Paste', quantity: 3 }
    ],
    'Creamy Chicken Pasta': [
        { ingredient: 'Onion', quantity: 1 },
        { ingredient: 'Spinach', quantity: 200 },
        { ingredient: 'Peppers', quantity: 1 },
        { ingredient: 'Garlic', quantity: 2 },
        { ingredient: 'Chicken Breasts', quantity: 500 },
        { ingredient: 'Chicken Stock', quantity: 1 },
        { ingredient: 'Pasta', quantity: 250 },
        { ingredient: 'Double Cream', quantity: 300 }
    ],
    'Lasagne': [
        { ingredient: 'Onion', quantity: 1 },
        { ingredient: 'Garlic', quantity: 3 },
        { ingredient: 'Peppers', quantity: 1 },
        { ingredient: 'Spinach', quantity: 200 },
        { ingredient: 'Beef Mince', quantity: 750 },
        { ingredient: 'Lasagne Sheets', quantity: 10 },
        { ingredient: 'Mascarpone', quantity: 200 },
        { ingredient: 'Ricotta', quantity: 200 },
        { ingredient: 'Cheddar', quantity: 100 },
        { ingredient: 'Mozzarella', quantity: 50 }
    ],
    'Beef Burritos': [
        { ingredient: 'Onion', quantity: 1 },
        { ingredient: 'Garlic', quantity: 2 },
        { ingredient: 'Peppers', quantity: 1 },
        { ingredient: 'Kidney Beans', quantity: 1 },
        { ingredient: 'Beef Mince', quantity: 750 },
        { ingredient: 'Tinned Tomatoes', quantity: 1 },
        { ingredient: 'Rice', quantity: 300 },
        { ingredient: 'Wraps', quantity: 4 },
        { ingredient: 'Cheddar', quantity: 100 }
    ],
    'Fish and Chips': [
        { ingredient: 'Fish', quantity: 300 },
        { ingredient: 'Chips', quantity: 250 }
    ],
    'Porridge': [
        { ingredient: 'Oats', quantity: 1000 },
        { ingredient: 'Milk', quantity: 2 }
    ],
    'Sweet Chilli Chicken Wraps': [
        { ingredient: 'Frozen Chicken', quantity: 100 },
        { ingredient: 'Wraps', quantity: 2 },
        { ingredient: 'Sweet Chilli Sauce', quantity: 2 },
        { ingredient: 'Salad', quantity: 100 }
    ],
    'Breakfast Wrap' : [
        { ingredient: 'Eggs', quantity: 2 },
        { ingredient: 'Bacon', quantity: 3 },
        { ingredient: 'Wraps', quantity: 1 }
    ],
    'Cooked Breakfast' : [
        { ingredient: 'Eggs', quantity: 2 },
        { ingredient: 'Bacon', quantity: 3 },
        { ingredient: 'Sausages', quantity: 2 },
        { ingredient: 'Hash Browns', quantity: 2 }
    ],
    'Tortellini' : [
        { ingredient: 'Tortellini', quantity: 1 },
        { ingredient: 'Tinned Tomatoes', quantity: 1 },
        { ingredient: 'Onion', quantity: 1 },
        { ingredient: 'Garlic', quantity: 1 },
        { ingredient: 'Spinach', quantity: 100 }
    ],
};

_EXTRAS = [
    'Crisps',
    'Chocolate',
    'Coke',
    'Beer',
    'Wine',
];

_SELECTED_MEALS = [];
_SELECTED_EXTRAS = [];
_SHOPPING_LIST = {};

function getRecipes() {
    let recipes = [];
    for (let recipe in _RECIPES) {
        recipes.push(recipe);
    }
    let HTML = ``;
    for (let i = 0; i < recipes.length; i++) {
        let selectedCount = _SELECTED_MEALS.filter(meal => meal === recipes[i]).length;
        HTML += `<div class="recipe" onclick="getIngredients('${recipes[i]}')"> 
            <div>${recipes[i]} </div>
            <button class='decrease-button' onclick="selectRecipe('${recipes[i]}', -1)">-</button>
            <input class='input' type="number" value="${selectedCount}" readonly>
            <button class='increase-button' onclick="selectRecipe('${recipes[i]}', 1)">+</button>
            </div>`;
    }
    document.getElementById('recipeList').innerHTML = HTML;
}

function getExtras() {
    let extras = [];
    for (let extra of _EXTRAS) {
        extras.push(extra);
    }
    let HTML = ``;
    for (let i = 0; i < extras.length; i++) {
        let selectedCount = _SELECTED_EXTRAS.filter(extra => extra === extras[i]).length;
        HTML += `<div class="extra"> 
            <div>${extras[i]} </div>
            <button class='decrease' onclick="selectExtra('${extras[i]}', -1)">-</button>
            <input class='input' type="number" value="${selectedCount}" readonly>
            <button class='increase' onclick="selectExtra('${extras[i]}', 1)">+</button>
            </div>`;
    }
    document.getElementById('extrasList').innerHTML = HTML;
};

function getIngredients(recipe) {
    let ingredients = _RECIPES[recipe];
    let HTML = ``;
    for (let i = 0; i < ingredients.length; i++) {
        HTML += `<div class="ingredient">${ingredients[i].ingredient}: ${ingredients[i].quantity} ${_QUANTITY_TYPE[ingredients[i].ingredient]}</div>`;
    }
    document.getElementById('ingredientsList').innerHTML = HTML;
};

function selectRecipe(recipe, value) {
    if (value == 1) {
        for (let i = 0; i < value; i++) {
            _SELECTED_MEALS.push(recipe);
        }
    } else if (value == -1) {
        const index = _SELECTED_MEALS.lastIndexOf(recipe);
        if (index !== -1) {
            _SELECTED_MEALS.splice(index, 1);
        }
    }
    getRecipes();
    showSelectedMeals();
};

function selectExtra(extra, value) {
    if (value == 1) {
        for (let i = 0; i < value; i++) {
            _SELECTED_EXTRAS.push(extra);
        }
    } else if (value == -1) {
        const index = _SELECTED_EXTRAS.lastIndexOf(extra);
        if (index !== -1) {
            _SELECTED_EXTRAS.splice(index, 1);
        }
    }
    getExtras();
    showSelectedExtras();
};

function showSelectedMeals() {
    let HTML = ``;
    if (_SELECTED_MEALS.length == 0) {
        HTML = `No Meals Selected`;
    } else {
        for (let i = 0; i < _SELECTED_MEALS.length; i++) {
            if (!HTML.includes(_SELECTED_MEALS[i])) {
                if (_SELECTED_MEALS.filter(item => item === _SELECTED_MEALS[i]).length == 1) {
                    HTML += `<div class="selectedMeal">${_SELECTED_MEALS[i]}</div>`;
                } else {
                    HTML += `<div class="selectedMeal">${_SELECTED_MEALS[i]} (x ${_SELECTED_MEALS.filter(item => item === _SELECTED_MEALS[i]).length})</div>`;
                }
            }
        }
    }
    document.getElementById('selectedMealsList').innerHTML = HTML;
};

function showSelectedExtras() {
    let HTML = ``;
    if (_SELECTED_EXTRAS.length == 0) {
        HTML = `No Extras Selected`;
    } else {
        for (let i = 0; i < _SELECTED_EXTRAS.length; i++) {
            if (!HTML.includes(_SELECTED_EXTRAS[i])) {
                if (_SELECTED_EXTRAS.filter(item => item === _SELECTED_EXTRAS[i]).length == 1) {
                    HTML += `<div class="selectedExtra">${_SELECTED_EXTRAS[i]}</div>`;
                } else {
                    HTML += `<div class="selectedExtra">${_SELECTED_EXTRAS[i]} (x ${_SELECTED_EXTRAS.filter(item => item === _SELECTED_EXTRAS[i]).length})</div>`;
                }
            }
        }
    }
    document.getElementById('selectedExtrasList').innerHTML = HTML;
};

function generateShoppingList() {
    _SHOPPING_LIST = {};
    for (let i = 0; i < _SELECTED_MEALS.length; i++) {
        let recipe = _SELECTED_MEALS[i];
        let ingredients = _RECIPES[recipe];        
        for (let j = 0; j < ingredients.length; j++) {
            let ingredient = ingredients[j].ingredient;
            let quantity = ingredients[j].quantity;     
            if (_SHOPPING_LIST.hasOwnProperty(ingredient)) {
                _SHOPPING_LIST[ingredient] += quantity;
            } else {
                _SHOPPING_LIST[ingredient] = quantity;
            }
        }
    }
    
    for (let i = 0; i < _SELECTED_EXTRAS.length; i++) {
        let extra = _SELECTED_EXTRAS[i];      
        if (_SHOPPING_LIST.hasOwnProperty(extra)) {
            _SHOPPING_LIST[extra] += 1;
        } else {
            _SHOPPING_LIST[extra] = 1;
        }
    }
    
    showShoppingList();
};

function showShoppingList() {
    let HTML = ``;
    for (let ingredient in _SHOPPING_LIST) {
        HTML += `<div class="shoppingListItem">${ingredient}: ${_SHOPPING_LIST[ingredient]} ${_QUANTITY_TYPE[ingredient]}</div>`;
    }
    document.getElementById('shoppingList').innerHTML = HTML;
};