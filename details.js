const getData= async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('pizza_id');
    const response = await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
    return response.data.recipe;
    
}
const displayrecipe =async () =>{
    const data = await getData();
    document.querySelector('.title').textContent=data.title;
    document.querySelector('img').src=data.image_url;
    const ingredients =data.ingredients;
    const result = ingredients.map( ingredient => {
        return`
        <li>${ingredient}</li>
        `
    }).join('\n');
    document.querySelector('.ingredients').innerHTML=result;
}
displayrecipe();