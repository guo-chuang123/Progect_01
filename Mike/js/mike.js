var divs=document.querySelectorAll(".new-course-box");
var lis=document.querySelectorAll(".btn li");
console.log(lis);

function f(index){
    for(var i=0;i<divs.length;i++){
        if(index===i){
            divs[i].style.display="block";
            lis[i].className="btn-active";
        }else{
            divs[i].style.display="none";
            lis[i].className="";

        }
    }
}