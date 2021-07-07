const searchBar = document.querySelector('#search-bar')

searchBar.addEventListener('keyup', function(event) {
    let searchQuery = event.target.value.toLowerCase()
    let names = document.querySelectorAll('.name')

    for (let i = 0; i < names.length; i++) {
        const currentName = names[i].textContent.toLowerCase()

        if (currentName.includes(searchQuery)) {
            names[i].style.display = "block"
        } else {
            names[i].style.display = "none"
        }

    }
})

const addBar = document.querySelector("#add-bar")
const addBtn = document.querySelector(".add-btn")

addBtn.addEventListener('click', function() {
    if (addBar.value) {
        let ulEl = document.querySelector('.ul-el')
        ulEl.innerHTML += `<li class="name">${addBar.value}</li>`
        addBar.value = ''
    }
})