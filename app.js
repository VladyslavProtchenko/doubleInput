let input = document.querySelectorAll('input');
const section = document.querySelector('section');
const warning = document.querySelector('.warning')



//_____________Target on text input______________________________

section.addEventListener('click', (event)=>{
    section.style.borderBottom = '3px solid #5fff54'
    if(event.target == input[1]) return;
    input[0].focus()
})

//_______________changes and warnings____________________________


input.forEach(el=>{

    el.addEventListener('input',()=>{
        el.value = el.value.replace(/[^\d.]/g, '');

        let width = '25px';
        width = `${el.value.length * 7}px`

        el.style.width = width;
    })
        
    el.addEventListener('blur', ()=> {
        if( el.value==='') {
            section.style.borderBottom = '3px solid #ff0303'
            warning.classList.remove('hide')
        } 
        
    })  
    
    el.addEventListener('focus', ()=> {
        if(!warning.classList.contains('hide')) warning.classList.add('hide');
        section.style.borderBottom = '3px solid #5fff54'    
    })  
})


    


