<template>
    <div>
        <button @click="openGallery()">
            Open gallery
        </button>
      <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="pswp__bg"></div>
        <div class="pswp__scroll-wrap">
          <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
          </div>
          <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
              <div class="pswp__counter"></div>
              <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
              <button class="pswp__button pswp__button--share" title="Share"></button>
              <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
              <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
              <div class="pswp__preloader">
                <div class="pswp__preloader__icn">
                  <div class="pswp__preloader__cut">
                    <div class="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div class="pswp__share-tooltip"></div>
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>
            <div class="pswp__caption">
              <div class="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
//   import { onMounted } from '@nuxtjs/composition-api';
  import PhotoSwipe from 'photoswipe';
  import PhotoSwipeUI_Default from 'photoswipe/dist/photoswipe-ui-default';
  
  export default {
    name: 'PhotoSwipeGallery',
    setup() {
      const openGallery = () => {
        var items = [
          {
            src: 'https://placekitten.com/600/400',
            w: 600,
            h: 400
          },
          {
            src: 'https://placekitten.com/1200/800',
            w: 1200,
            h: 800
          },
          {
            src: 'https://placekitten.com/800/1200',
            w: 800,
            h: 1200
          }
        ];
  
        var options = {
          index: 0
        };
  
        var gallery = new PhotoSwipe(
          document.querySelector('.pswp'),
          PhotoSwipeUI_Default,
          items,
          options
        );
  
        gallery.init();
      };
  
      return {
        openGallery
      };
    }
  };
  </script>
  