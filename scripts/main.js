const track = document.getElementById("img-track");
window.onmousedown = e =>{
    track.dataset.mouseDownAt = e.clientX;
}
window.onmouseup = e =>{
    track.dataset.mouseDownAt = "0";
    track.dataset.prevpercentage = track.dataset.percentage
}
window.onmousemove = e =>{
    
    if (track.dataset.mouseDownAt == "0")return;
    var d_max = (window.innerWidth / 2.0);
    var d_mouse = parseFloat(track.dataset.mouseDownAt) - e.clientX;
    var percentage = (d_mouse / d_max) * -100;
    var nextpercentage = percentage + parseFloat(track.dataset.prevpercentage);
    nextpercentage = Math.max(Math.min(nextpercentage, 0), -100);
    track.dataset.percentage = nextpercentage;
    track.animate({transform: `translate(${nextpercentage}%, 0%)`}, { duration: 1200, fill: "forwards" });
    for(const image of track.getElementsByClassName("gallary-img")){

        image.animate({ objectPosition:`${100 + nextpercentage}% center`}, { duration: 1200, fill: "forwards" });
    }
}