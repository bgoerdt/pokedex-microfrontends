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
var pokemon_1 = require('./pokemon');
var router_1 = require('@angular/router');
var pokemon_service_1 = require('./pokemon.service');
var PokemonDetailComponent = (function () {
    function PokemonDetailComponent(pokemonService, router, route) {
        this.pokemonService = pokemonService;
        this.router = router;
        this.route = route;
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
    PokemonDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.pokemonService.getPokemon(id).then(function (p) { return _this.pokemon = p; });
        });
    };
    PokemonDetailComponent.prototype.save = function () {
        this.router.navigate(['']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', pokemon_1.Pokemon)
    ], PokemonDetailComponent.prototype, "pokemon", void 0);
    PokemonDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-pokemon-detail',
            providers: [pokemon_service_1.PokemonService],
            template: "\n    <div *ngIf=\"pokemon\">\n        <h2>{{pokemon.name}}</h2>\n        <div><label>id:</label>{{pokemon.id}}</div>\n        <div>\n            <label>name:</label>\n            <input [(ngModel)]=\"pokemon.name\" />\n        </div>\n        <div>\n            <label>type:</label>\n            <select [(ngModel)]=\"pokemon.type\">\n                <option *ngFor=\"let type of pokemonTypes\" [value]=\"type\">{{type}}</option>\n            </select>\t\t\t\n        </div>\n    </div>\n    <button (click)=\"save()\">Save</button>\n    "
        }), 
        __metadata('design:paramtypes', [pokemon_service_1.PokemonService, router_1.Router, router_1.ActivatedRoute])
    ], PokemonDetailComponent);
    return PokemonDetailComponent;
}());
exports.PokemonDetailComponent = PokemonDetailComponent;
//# sourceMappingURL=pokemon-detail.component.js.map