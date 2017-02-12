function PokemonController() {
    var _this = this;

    _this.pokemonList = [
        {
            id: 1,
            name: "Bulbasaur",
            type: "Grass"
        },
        {
            id: 2,
            name: "Charmander",
            type: "Fire"
        },
        {
            id: 3,
            name: "Squirtel",
            type: "Water"
        },
        {
            id: 4,
            name: "Weedle",
            type: "Bug"
        },
        {
            id: 5,
            name: "Pidgey",
            type: "Normal"
        },
        {
            id: 6,
            name: "Pikachu",
            type: "Electric"
        },
        {
            id: 7,
            name: "Jigglypuff",
            type: "Fairy"
        },
        {
            id: 8,
            name: "Zubat",
            type: "Poison"
        },
        {
            id: 9,
            name: "Diglett",
            type: "Ground"
        },
        {
            id: 10,
            name: "Snorlax",
            type: "Normal"
        }
    ];
}

angular
    .module('pokemonList.app')
    .component('pokemon', {
        templateUrl: './pokemon.html',
        controller: PokemonController
    });