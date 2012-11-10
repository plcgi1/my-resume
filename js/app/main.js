;(function(){
    var Router = Backbone.Router.extend({
        routes : {
            ".*" : "dispatchme",
            "content/:route" : "dispatchme"
        },
        
        initialize: function(opts){
            _.bindAll(this);
            this.views = opts.views;
            this.defaultRoute = 'expirience';
            Backbone.history.start();
        },
        dispatchme: function(route){
            
            if(location.hash){
                route = location.hash.split('/')[1];
            }
            else if(!route || typeof route == 'undefined' ){
                route = this.defaultRoute;    
            }

            timeline_view.render(route);
            nav_view.setActive(route);
        }
    });
    var nav_model = window.models.Navigation.initialize();
    var nav_view = window.views.Navigation.initialize(nav_model);
    
    var timeline_view = window.views.Timeline.initialize();
    
    var router = new Router({views:{ timeline: timeline_view, nav : nav_view},model:nav_model});
})();
$(document).ready(function(){
    $('.dropdown-toggle').dropdown();
    $('.bottombar').hover(
        function(){
            $(this).animate({opacity:1,'font-size':'110%','font-weight':'bold'},400);
        },
        function(){
            $(this).animate({opacity:0.8,'font-size':'100%','font-weight':'normal'},400);
        }
    );
    //$('#navbar').scrollspy();
});