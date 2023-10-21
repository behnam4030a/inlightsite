const swiperBlog = new Swiper(".swiper-blog-article", {
    autoplay: false,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      768: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
})


/********************************************************************* like dislike ***/ 
let btnLike = document.querySelectorAll('.btn-like');
let btnDisLike = document.querySelectorAll('.btn-dislike');

btnLike.forEach((like)=>{
  like.addEventListener('click',function(){
    like.lastElementChild.classList.toggle('btn-like-active');
    like.nextElementSibling.lastElementChild.classList.remove('btn-dislike-active')
  })
})

btnDisLike.forEach((dislike)=>{
  dislike.addEventListener('click',function(){
    dislike.lastElementChild.classList.toggle('btn-dislike-active');
    dislike.previousElementSibling.lastElementChild.classList.remove('btn-like-active')
  })
})