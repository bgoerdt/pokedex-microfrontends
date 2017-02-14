"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var POKEMON_LIST = [
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
var PokemonService = (function () {
    function PokemonService() {
    }
    PokemonService.prototype.getPokemonList = function () {
        return Promise.resolve(POKEMON_LIST);
    };
    PokemonService.prototype.getPokemon = function (id) {
        return this.getPokemonList().then(function (list) { return list.find(function (p) { return p.id === id; }); });
    };
    PokemonService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PokemonService);
    return PokemonService;
}());
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map