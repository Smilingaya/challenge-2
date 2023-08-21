 const cont1=document.querySelector('.cont1');
 const cont2=document.querySelector('.cont2');
 const previo=document.querySelector('.previo');
 const next=document.querySelector('.next');
 function  nextButton(){
    cont2.style.display='grid';
    cont1.style.display='none';
 }
 function previoButton(){
    cont1.style.display='grid';
    cont2.style.display='none';
 }

 next.addEventListener('click',nextButton);
 previo.addEventListener('click',previoButton);
