import "./styles/style.scss";
import {pokemonArray} from "./data/pokemon";


const pokemonContainer = document.querySelector<HTMLElement>(".card-container");

if (!pokemonContainer)
throw new Error ("couldn't get the details about the pokemon");


const handleRender = () => {
pokemonContainer.innerHTML = "";
pokemonArray.forEach((pokemon) => {
    const typesString = pokemon.types.join(" & ");
    pokemonContainer.innerHTML += 
    `<div>
        <img class = "card__imag" src="${pokemon.sprite}" alt="image of pokemon">
        <h2 class = "card__heading">${pokemon.name}</h2>
        <p class = "card__text">${pokemon.name} is a ${typesString} type pokemon </p>

</div>`
});
};

//let filteredPokemon =[...pokemonArray]

//const filterInput =

//document.querySelector<HTMLInputElement>("#filter-pokemonArray");

//if(!filterInput) {throw new Error ("filter not working")}

//const handleFilter = (event : Event) => {
//    const userInput = (
//        event.currentTarget as HTMLInputElement).value.toLowerCase();

//        filteredPokemon = pokemonArray.filter((pokemon) => {
//            return (
//                pokemon.name.toLowerCase().includes(userInput)
 //           );
//         });

//         handleRender();
// };

// filterInput.addEventListener("input", handleFilter);

 handleRender();




