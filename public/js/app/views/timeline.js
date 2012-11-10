;(function(){
	 'use strict';
     window.views.Timeline = window.views.Timeline || {};

     var View = Backbone.View.extend({
          el : $('#content'),
          models : {},	
          render : function(template){
               var markup = Mustache.render($('#'+template).html(), {});
               var el = $(this.el);
               
               el.animate({     
                    //width: '0%',
                    //height: '0%',
                    opacity: 0
               },500,'swing',function(){el.html(markup)})
               .animate({         
                    //width: "100%",        
                    //height: "100%",
                    opacity: 0.9
               },500,'swing'
               );
              
               $(this.el).masonry({itemSelector : '.item'});
               
               $(this.el).find('.item').each(function(i){
                    $(this).addClass('borderclass');
                    $(this).hover(
                         function(){
                              $(this).animate({opacity:1},300);
                         },
                         function(){
                              $(this).animate({opacity:0.9},300);
                         }
                    );
               });
               
          }
      });
     var v = new View();
     window.views.Timeline.initialize = function(template){
          return v;
     };
})();