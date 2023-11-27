var istatus = document.querySelector("h5")
var add = document.querySelector("#add")
// var remove = document.querySelector("#remove")
let check=0

add.addEventListener("click",function()
{  
    if(check==0)
    {
        istatus.innerHTML="Friends.."
        istatus.style.color="green"
        check=1
    }
    else
    {
        istatus.innerHTML="Stranger"
        istatus.style.color="red"
        check=0
    }
})
// remove.addEventListener("click",function()
// {
//     istatus.innerHTML="Strenger"
//     istatus.style.color="red"
// })