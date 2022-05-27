var ind = 0;
function changeToLatest(){
    ind += 1;
    document.getElementById("latest").style.zIndex = ind;
    document.getElementById("l").style.background = "pink";
    document.getElementById("n").style.background = "white";
    document.getElementById("N").style.background = "white";
    document.getElementById("l").style.color = "white";
    document.getElementById("n").style.color = "darkmagenta";
    document.getElementById("N").style.color = "darkmagenta";
}
function changeToNews(){
    ind += 1;
    document.getElementById("News").style.zIndex = ind;
    document.getElementById("n").style.background = "pink";
    document.getElementById("l").style.background = "white";
    document.getElementById("N").style.background = "white";
    document.getElementById("n").style.color = "white";
    document.getElementById("l").style.color = "darkmagenta";
    document.getElementById("N").style.color = "darkmagenta";
}
function changeToNotifications(){
    ind += 1;
    document.getElementById("Notifications").style.zIndex = ind;
    document.getElementById("N").style.background = "pink";
    document.getElementById("n").style.background = "white";
    document.getElementById("l").style.background = "white";
    document.getElementById("N").style.color = "white";
    document.getElementById("n").style.color = "darkmagenta";
    document.getElementById("l").style.color = "darkmagenta";
}