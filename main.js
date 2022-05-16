let dropMenu=[...document.querySelectorAll(".drop")];
let dropButton=document.getElementsByClassName('drop-button')[0];

dropMenu.forEach((drop)=>{
    drop.style.display='none';
})
dropButton.addEventListener('click',()=>{
    
    for(let i=0;i<dropMenu.length;i++){
    if( dropMenu[i].style.display==='none'){
        dropMenu[i].style.display='block';
        dropMenu[i].style.backgroundColor='rgba(192, 185, 185, 0.989)';

    }
    else{  
         dropMenu[i].style.display='none';
             }
    }
 
})

dropButton.addEventListener('mouseover',()=>{
    for(let i=0;i<dropMenu.length;i++){
    if( dropMenu[i].style.display==='none'){
        dropMenu[i].style.display='block';
        dropMenu[i].style.backgroundColor='rgba(192, 185, 185, 0.989)';

    }
    else{  
         dropMenu[i].style.display='none';
             }
    }
 
})