const menu=document.querySelector(".toggle ")
const navigate=document.querySelector(".navigation")

menu.addEventListener("click",(e)=>{
    const getsvg=document.querySelectorAll(".toggle svg")
    if (getsvg[0].className["baseVal"]==="on") {
        // navigate.style.display="flex"
        navigate.style.opacity="1"
        getsvg[0].className["baseVal"]="off"
        getsvg[1].style.display="flex"
    } else {
        // navigate.style.display="none"
        navigate.style.opacity="0"
        getsvg[0].className["baseVal"]="on"
        getsvg[1].style.display="none"
    }
})

