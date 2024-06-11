

async function fetchPokemon(){
    const pokemon = document.getElementById("pokemon").value;
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
               
        if(!response.ok){
            throw new Error("Could not fetch resource");
        }
        
        const data = await response.json();
        console.log(data);
        
        const pokemonDescription = document.getElementById("pokemon-description")
        pokemonDescription.style.display = "block";

        // pokemon form image
        const pokemonImage = document.getElementById("pokemon-sprite");
        pokemonImage.setAttribute("src",  data.sprites.front_default);
        pokemonImage.style.display = "block";

        const pokemonName = document.getElementById("pokemon-name")
        pokemonName.textContent = `Name : ${data.name.toUpperCase()}`;

        const pokemonType = document.getElementById("pokemon-type")
        const types = data.types.map(element => {
            return element.type.name;
        })
        pokemonType.textContent = `Type : ${types}`;

        const pokemonWeight= document.getElementById("pokemon-weight");
        pokemonWeight.textContent = `Weight : ${data.weight/10} kg`;

        const pokemonHeight= document.getElementById("pokemon-height");
        pokemonHeight.textContent = `Height : ${data.height/10} m`;
        const pokemonPower = document.getElementById("pokemon-power")

        
    }catch(error){
        console.error(error);
    }

}
