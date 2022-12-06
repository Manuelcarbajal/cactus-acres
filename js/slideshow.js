window.addEventListener('load',function(){
      

    window._ = new Glider(document.querySelector('.slide-show-list'), {
        slidesToShow: 1, //'auto',
        dots: '.slidershow-indicator',
        draggable: false,
        arrows: {
          prev: '.btn-slideshow-left',
          next: '.btn-slideshow-right'
        },
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    itemWidth: 500,
                    slidesToShow: 1,
                    exactWidth: true
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    dots: false,
                    arrows: false,
                    scrollLock: true
                }

               
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    scrollLock: true,
                    exactWidth: true,
                }
            }
        ]
      });
       
    });

