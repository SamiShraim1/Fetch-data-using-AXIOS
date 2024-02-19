const getData =async () =>{
    const data = await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza');
     return data.data.recipes;
    }
    const displaypizzas = async () =>{
        const pizzas = await getData();
        const result = pizzas.map(pizza =>
           `<div>
            <h2>${pizza.publisher}</h2>
            <img src="${pizza.image_url}"/>
            <a href="details.html?pizza_id=${pizza.recipe_id}">more</a>
            </div>
            `
            ).join('');
    
            document.querySelector('.pizzas').innerHTML = result;
    }
    displaypizzas();