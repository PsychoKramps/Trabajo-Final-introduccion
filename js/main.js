const url = 'https://dbpokemons.herokuapp.com/pokemons';

const main = document.getElementById('mainPokemon');

const getPokemon = async () => {
    try {
        const peticion = await fetch(url);
        const pokemon = await peticion.json();
        const data = pokemon;
        
        data.forEach(item => {
            const {
                name,
                imgUrl,
                pokeType,
            } = item

            const pokeEl = document.createElement('div');
            pokeEl.classList.add('col-md-6', 'col-lg-4', 'mb-5')

            pokeEl.innerHTML = `
            <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="">
                <img class="img-fluid" src="${imgUrl}" alt="..." />
                <p style="color:white; text-align:center;">${name}</p>
            </div>
        `   
            innerHTML = '';
            main.appendChild(pokeEl)
        });
    } catch (error) {
        alert(error);
    }
}

getPokemon();