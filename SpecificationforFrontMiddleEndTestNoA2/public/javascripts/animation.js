const obj2 = document.getElementById("obj2")
const OptButt = document.getElementById("optionButton")


document.addEventListener("click", () => {
    if (event.target == OptButt) {
        obj2.style.animation = "slide 2s forwards" 
    }  else if (event.target !== obj2) {
        obj2.style.animation = "dissapier 2s forwards"
}})


