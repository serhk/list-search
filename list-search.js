window.addEventListener('load', function(){
    let input = document.getElementById('js-search');
    if(input){
        let list = document.getElementById('js-list'),
            li = list.querySelectorAll('li'),
            lilen = li.length;

        input.addEventListener('input', function(){
            let inputtext = this.value.toLowerCase(),
                litext,
                i = 0;
            for (i; i<lilen; i++){
                litext = li[i].innerHTML.toLowerCase();
                if (~litext.indexOf(inputtext)) {
                    li[i].classList.remove('hidden');
                } else {
                    li[i].classList.add('hidden');
                }
            }
        });
    }
});
