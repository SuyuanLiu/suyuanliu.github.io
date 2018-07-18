(function(window) {
  'use strict';
  function Cicada(config) {
    this.config = config;
  }

  Cicada.prototype.setup = function() {
    var theme = this.config;
    if (theme.fancybox) {
      this.fancybox();
    }
  };

  Cicada.prototype.fancybox = function() {
    if ($.fancybox) {
      $('.blog-post-full, .blog-post-content').each(function() {
        $(this).find('img').each(function() {
          let href = 'href="' + this.src + '"';
          let title = 'title="' + this.alt + '"';
          $(this).wrap('<a class="fancybox" ' + href + ' ' + title + '></a>');
        });
      });
      $('.fancybox').fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic'
      });
    }
  };

  let config = window.config;
  let cicada = new Cicada(config);
  cicada.setup();
}(window))