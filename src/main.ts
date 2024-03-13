import "./styles/style.scss";
import {pokemonArray} from "./data/pokemon";


const pokemonContainer = document.querySelector<HTMLElement>(".card-container");

if (!pokemonContainer)
throw new Error ("couldn't get the details about the pokemon");

pokemonContainer.innerHTML = "";
pokemonArray.forEach((pokemon) : void => {
    pokemonContainer.innerHTML += 
    `<div>
        <img class = "card__imag" src="${pokemon.sprite}" alt="image of pokemon">
        <h2 class = "card__heading">${pokemon.name}</h2>
        <p class = "card__text">${pokemon.name} "is a " ${pokemon.types} "type pokemon""</p>;

</div>`

});

