(function(window) {
  'use strict';

  function Cicada(config) {
    this.config = config;
  }


  /**
   * Initial
   */
  Cicada.prototype.setup = function() {
    let theme = this.config;

    if (theme.fancybox) {
      this.fancybox();
    }
    if (theme.leancloud.app_id && theme.leancloud.app_key) {
      this.statistic();
    }
    this.backToTop();
    // this.addHashTag();
    this.popupMenu();
    // this.tagCount();
  };


  /**
   * FancyBox
   */
  Cicada.prototype.fancybox = function() {
    if ($.fancybox) {
      $('.blog-post').each(function() {
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


  /**
   * Reading Times
   */
  Cicada.prototype.statistic = function() {

  };


  /**
   * Back To The Top
   */
  Cicada.prototype.backToTop = function() {
    let $backToTop = $('#back-to-top');

    $(window).scroll(function() {
      if ($(window).scrollTop() > 100) {
        $backToTop.fadeIn(1000);
      } else {
        $backToTop.fadeOut(1000);
      }
    });

    $backToTop.click(function() {
      $('body,html').animate({scrollTop: 0});
    });
  };


  /**
   * Add hashtag after title
   */
  Cicada.prototype.addHashTag = function() {
    let $titles = $('.post-detail h1, h2, h3, h4, h5, h6');

    $titles.each(function() {
      let link = $(this).find('a');
      link.html('<i class="fas fa-hashtag"></i>');
      link.css('color', '#75abea');
      link.css('margin-left', '5px');
      $(this).append(link);
    });
  }


  /**
   * Compute tags FIXME: css not work
   */
  Cicada.prototype.tagCount = function() {
    let $counts = $('.tag-count');
    if ($counts.length === 0) {
      return;
    }
    $counts.each(function(index) {
      let count = $(this);
      if (count.text() === 1) {
        count.css('color', 'red');
      }
    });
  }


  /**
   * Responsive menu
   */
  Cicada.prototype.popupMenu = function() {
    $('.toggle-button').on('click', function() {
      $('#menu').toggle();
    });
  };


  let config = window.config;
  let cicada = new Cicada(config);
  cicada.setup();

}(window))