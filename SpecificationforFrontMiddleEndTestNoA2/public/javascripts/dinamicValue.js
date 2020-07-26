const inputField = document.getElementById("Quantity")
const itemType = document.querySelector('select')
const itemlist = document.getElementById('itemlist')
const back = document.getElementById('back')
const next = document.getElementById('next')

var inp = null
var type =  null
var itens = []
var pages = null
var page = 0
var totalPages = 0
var currentPage = 0

inputField.addEventListener("change", () => {
    inputField.style.animation = null 
    inp = inputField.value
    window.inp = inp
    generateItens()
})

itemType.addEventListener("change", (type) => {
    if (inputField.value == ""){
        inputField.style.animation = "blinkRed 1s infinite"
    } else {
        inputField.style.animation = null 
    }
    type = itemType.options[itemType.selectedIndex].text
    window.type = type
    generateItens()
})

function generateItens(params) {
    itemlist.innerHTML = ""
    window.page = 0
    console.log(
        currentPage
        )
    if ((window.type != null) && (inp != null)) {
        itens = []
        generation()
        pagination()
        nextPage()        
        backPage()
    }
}


function generation(){
    for (let index = 0; index < window.inp; index++) {
        let li = document.createElement('li')
        li.innerHTML = "<p class='tertiary-definition'>" + (index + 1) + "</p><p class='item'>Item " + window.type + (index + 1) + "</p>"
        itens.push(li)
    }
}


function pagination(){
    itemlist.innerHTML = ""
    for (let index = page; index < page + 3; index++) {
        try {
            itemlist.appendChild(itens[index])
        } catch (error) {
        }
    }
}

function nextPage(){
    
        next.addEventListener('click', () => {
            if (page < itens.length){
                window.page += 3
                if(page < itens.length){
                    pagination()
                    console.log(itens.length, page)
                } 
            } else {
                window.page -= 3
            }
        })
}

function backPage(){
    back.addEventListener('click', () => {
        if (page >= 3){
            window.page -= 3
            pagination()
            console.log(itens.length, page)
        }
    })
}

