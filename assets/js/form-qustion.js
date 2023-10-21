let btnNextPage = document.querySelectorAll('.next-page');

btnNextPage.forEach((btnnext) =>{
    btnnext.addEventListener('click',function(e){
        e.preventDefault();
        e.target.parentElement.parentElement.parentElement.parentElement.classList.remove('form-active');
        e.target.parentElement.parentElement.parentElement.parentElement.classList.add('form-notactive');
        e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.add('form-active')
        e.target.parentElement.parentElement.parentElement.parentElement.nextElementSibling.classList.remove('form-notactive')
    })
})

let items = document.querySelectorAll('.text-course-select');

items.forEach((item)=>{
    item.addEventListener('click',function(){
        items.forEach((itemsBg) =>{
            itemsBg.style.backgroundColor = "#fff";
            itemsBg.previousElementSibling.style.border = `5px solid #fff`;
        })
        item.style.backgroundColor ="#FFBABA";
        item.previousElementSibling.style.border = `5px solid #FFBABA`;
    })
})