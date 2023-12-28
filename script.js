searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () =>{
  loginForm.classList.remove('active');
}





window.onscroll = () =>{

  searchform.classList.remove('active');
    if(window.scrollY > 80){
      document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.add('active');

    }  
    }

    window.onload = () =>{
        if(window.scrollY > 80){
          document.querySelector('.header .header-2').classList.add('active');
        }else{
            document.querySelector('.header .header-2').classList.add('active');
    
        }  
        }

var swiper = new Swiper(".books-slider",{
  loop: true,
    centeredSlides: true,
          autoplay: {
            delay: 9500,
            disableOnInteraction: false,
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
              
            },
            786: {
              slidesPerView: 2,
              
            },
            1024: {
              slidesPerView: 3,
              
            },
          },
        });

var swiper = new Swiper(".featured-slider",{
  spaceBetween: 10;
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
    },
    navigation: {
      nextE1: ".swiper-button-next",
      prevE1: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
      slidesPerView: 1,
               
      },
      450: {
        slidesPerView: 2,
      },
      786: {
      slidesPerView: 3,
      },
      1024: {
      slidesPerView: 4,
               
      },
     },
 });