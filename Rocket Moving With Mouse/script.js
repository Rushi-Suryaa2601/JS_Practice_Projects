let roc=document.getElementById('roc')

document.addEventListener("mousemove",(e)=>{
    move(e);
})

const move=(e)=>{
    var x=e.pageX;
    var y=e.pageY;

    roc.style.left=x-50 + 'px';
    roc.style.top=y-50+'px';
}