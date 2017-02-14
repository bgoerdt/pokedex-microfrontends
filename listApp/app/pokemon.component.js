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
var pokemon_service_1 = require('./pokemon.service');
var router_1 = require('@angular/router');
var PokemonComponent = (function () {
    function PokemonComponent(pokemonService, router) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.pokemonTypes = [
            "Grass",
            "Fire",
            "Water",
            "Electric",
            "Normal",
            "Bug",
            "Fairy",
            "Poison",
            "Ground"
        ];
    }
    PokemonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pokemonService.getPokemonList().then(function (list) { return _this.pokemonList = list; });
    };
    PokemonComponent.prototype.selectPokemon = function (pokemon) {
        this.selectedPokemon = pokemon;
    };
    PokemonComponent.prototype.goToDetail = function () {
        var link = ['detail', this.selectedPokemon.id];
        this.router.navigate(link);
    };
    PokemonComponent = __decorate([
        core_1.Component({
            selector: 'my-pokemon',
            providers: [pokemon_service_1.PokemonService],
            template: "\n        <h2>Pokemon</h2>\n        <ul>\n            <li *ngFor=\"let pokemon of pokemonList\"\n                (click)=\"selectPokemon(pokemon)\">\n                <span>{{pokemon.id}}</span> {{pokemon.name}} | {{pokemon.type}}\n            </li>\n        </ul>\n\n        <button *ngIf=\"selectedPokemon\" (click)=\"goToDetail()\">View {{selectedPokemon.name}} Details</button>\n    "
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.Router])
    ], PokemonComponent);
    return PokemonComponent;
}());
exports.PokemonComponent = PokemonComponent;
//# sourceMappingURL=pokemon.component.js.map