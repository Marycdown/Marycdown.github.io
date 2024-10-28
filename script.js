const getRandomPokemon = async () => {
    try {
        const randomId = Math.floor(Math.random() * 898) + 1; // Random Pokémon ID between 1 and 898
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch Pokémon data:', error);
    }
};

const displayPokemon = async () => {
    const pokemon = await getRandomPokemon();
    if (!pokemon) return; // Exit if no Pokémon was fetched

    const pokemonName = pokemon.name;
    const pokemonTypes = pokemon.types.map(type => type.type.name).join(', ');
    const pokemonImage = pokemon.sprites.front_default;

    // Displaying the data in the HTML
    document.getElementById('pokemon-name').innerText = `Name: ${pokemonName}`;
    document.getElementById('pokemon-types').innerText = `Types: ${pokemonTypes}`;
    document.getElementById('pokemon-image').src = pokemonImage;
};
