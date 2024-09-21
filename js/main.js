document.getElementById("main-menu").addEventListener("click", function(){
    document.getElementById("modal").classList.add("open")
})

document.getElementById("exit").addEventListener("click", function(){
    document.getElementById("modal").classList.remove("open")
})