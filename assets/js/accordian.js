let btnPreOrderRadio = document.querySelectorAll('.btn-pre-order-radio');
let accordian = document.querySelectorAll('.accordion-content-1');

btnPreOrderRadio.forEach((btn)=>{
    btn.addEventListener('change',function(){
        accordian.forEach((acc)=>{
            acc.classList.remove('active');
        })
    })
})

const accordionHeaders = document.querySelectorAll('.accordion-header-1');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const currentlyActiveContent = document.querySelector('.accordion-content-1.active');
    if (currentlyActiveContent && currentlyActiveContent !== header.nextElementSibling) {
      currentlyActiveContent.classList.remove('active');
    }

    const accordionItem = header.parentElement;
    const accordionContent = accordionItem.querySelector('.accordion-content-1');
    accordionContent.classList.toggle('active');
  });
});