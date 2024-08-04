const color=document.querySelectorAll('.color')
const body=document.querySelector("body")

color.forEach(function(button) {
    button.addEventListener('click',function (event){
        if(event.target.id==='grey'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==='yellow'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==='red'){
            body.style.backgroundColor=event.target.id;
        }
        if(event.target.id==='green'){
            body.style.backgroundColor=event.target.id;
        }
    })
})
