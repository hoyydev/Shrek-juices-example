let list = document.querySelectorAll('.list .item');
list.forEach(item => {
    item.addEventListener('click', function(even){
        if(even.target.classList.contains('add')){
            alert('111')
        }
    })
})