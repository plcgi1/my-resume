;(function(){
	 'use strict';
    window.views.Navigation = window.views.Navigation || {};

    var View = Backbone.View.extend({
        el : $('#navbar'),
        template : $('#navigationTpl').html(),
        initialize: function(opts){
            this.model = opts.model;
        },
        render : function(){
            var list = this.model.toJSON();
            var markup = Mustache.render(this.template, {nav : list})
            $(this.el).html(markup);
            //alert(markup);
        },
        setActive: function(active){
            $(this.el).find('li.active').removeClass('active');
            $(this.el).find('a[href="#content/'+active+'"]').parent().addClass('active');
        }
    });
    
    window.views.Navigation.initialize = function(model){
        var v = new View({model:model});
        
        model.fetch({
            success:function(coll,data){
                model.reset(data);
                v.render();                       	
            }
        });
        
        return v;
    };
})();