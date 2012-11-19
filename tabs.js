(function($){
  function Tabs(el, options) {
    this.opts = $.extend({}, this.defaults, options);
    this.$el = $(el);
  }

  Tabs.prototype = {
    init: function() {
      var _this = this;

      $('a', this.$el).on('click', function (e) {
        e.preventDefault();
        _this.showTab(this);
      });
    },

    showTab: function(target) {
      var $target = $(target);

      $target.trigger('show');

      $('a.active', this.$el).removeClass('active');
      $target.addClass('active');

      var paneID = $target.data('pane');
      $('.tab-content .tab-pane').hide();
      $('.tab-content #' + paneID + '.tab-pane').show();
    }
  };

  $.fn.tabs = function(options) {
    if (options === 'show') {
      var $parent = $(this).parents('ul').first();
      var obj = $parent.data('tabs');
      obj.showTab(this);
    }

    if (this.length) {
      this.each(function() {
        var obj = new Tabs(this, options);
        obj.init();
        $(this).data('tabs', obj);
      });
    }
  };
})(jQuery);
