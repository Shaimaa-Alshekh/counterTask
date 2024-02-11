let btn=document.querySelectorAll("button");
let span=document.querySelectorAll("span");

for(let i=0;i<btn.length;i++){
    let count=span[i].textContent; 
    let counterValue=span[i];  

    btn[i].onclick=function(){
             count++;
             counterValue.innerHTML=count;

             

    };
}


