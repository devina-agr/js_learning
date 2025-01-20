let lists = document.getElementsByClassName('list');
let right = document.getElementById('right');
let left = document.getElementById('left');

for(let list of lists){
    list.addEventListener('dragstart',function(e){
        let select =e.target;

        right.addEventListener('dragover', function(e){
            e.preventDefault();
        })

        right.addEventListener('drop',function(e){
            right.appendChild(select);
            select=null;
        })

        left.addEventListener('dragover', function(e){
            e.preventDefault();
        })

        left.addEventListener('drop',function(e){
            left.appendChild(select);
            select=null;
        })

    })
}


