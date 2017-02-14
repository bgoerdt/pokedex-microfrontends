"use strict";
var router_1 = require('@angular/router');
var pokemon_component_1 = require('./pokemon.component');
var pokemon_detail_component_1 = require('./pokemon-detail.component');
var appRoutes = [
    {
        path: '',
        component: pokemon_component_1.PokemonComponent
    },
    {
        path: 'detail/:id',
        component: pokemon_detail_component_1.PokemonDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map