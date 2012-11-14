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

        var $target = $(this);

        $('a.active', _this.$el).removeClass('active');
        $target.addClass('active');

        var paneID = $target.data('pane');
        $('.tab-content .tab-pane').hide();
        $('.tab-content #' + paneID + '.tab-pane').show();
      });
    }
  };

  $.fn.tabs = function(options) {
    if (this.length) {
      this.each(function() {
        var obj = new Tabs(this, options);
        obj.init();
        $(this).data('tabs', obj);
      });
    }
  };
})(jQuery);
