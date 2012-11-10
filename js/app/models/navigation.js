;(function(){
    'use strict';
    window.models.Navigation = window.models.Navigation || {};

    var Model = Backbone.Model.extend({});
    var Collection = Backbone.Collection.extend({
        url : '/data/data.json'
    });
    
    window.models.Navigation.initialize = function(){
        return new Collection();
    };
})();