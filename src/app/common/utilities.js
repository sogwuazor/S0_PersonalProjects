define(['jquery'], function($) {
  'use strict';

  return {
    maxZIndex: function($element) {
      if ($element && $element instanceof $) {
        return Math.max.apply(null, $.map($element.find('> *'), function (ele, n) {
          if ($(ele).css('position') == 'absolute') {
            return parseInt($(ele).css('z-index')) || 1;
          }
        }));
      } else {
        return Math.max.apply(null,$.map($('body > *'), function(e,n){
            if($(e).css('position')=='absolute')
              return parseInt($(e).css('z-index'))||1 ;
          })
        );
      }
    }
  };
});
