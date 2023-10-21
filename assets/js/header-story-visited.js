let storyItem = document.querySelectorAll('.item-story-menu a');

storyItem.forEach((item) => {
    item.addEventListener('click',function(e){
        e.target.style.border = `6px solid #ddd`
    })
});