//Get the countries list
// console.log(countries) // testing if it is working



//Target the input 'Search Box' = input
const searchBox = document.querySelector('.search-box')

// Target the buttons 'Search by Initials' and 'Search by Any'
const searchByInitials = document.querySelector('.search-by-initials')
const searchByAny = document.querySelector('.search-by-any')

// Add EVENTLISTENER for buttons:  'click' and call the functions for them
searchByInitials.addEventListener('click', searchCountriesByInitials)
searchByInitials.addEventListener('click', generateDiv)
searchBox.addEventListener('keyup', generateDiv)

// searchByAny.addEventListener('click', searchCountriesByAny)










//Search by first letter 


function searchCountriesByInitials () {
    let searchKey = searchBox.value

        const countriesStartWith = countries.filter(element =>{
        return element.toUpperCase().startsWith(searchKey.toUpperCase())
        })

        

    return countriesStartWith
}


// Generate Div
function generateDiv () {
    clearItem()
    
    const resultBox = document.querySelector('.result-section')
    const newCountries = searchCountriesByInitials ()
    
    const el = newCountries.forEach((element, index) => {
        
        const resultSpan = document.createElement('span')
        const createNewDiv = document.createElement('div')
        createNewDiv.setAttribute('class', 'country-div')
        resultSpan.textContent= element
        // createNewDiv.style.background = generateRGB()
        
        createNewDiv.appendChild(resultSpan)
        resultBox.appendChild(createNewDiv)

        if(index % 2 === 0){
            createNewDiv.classList.add('dark')
        }else {
            createNewDiv.classList.add('light')
        }
    })
    
}


// Clearing result
function clearItem(){
    const divsToRemove = document.querySelectorAll('.country-div')
    divsToRemove.forEach(element => {
        element.remove()
    })
}


// Generate Color
// function generateRGB () {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)

//     let generatedRGB = `rgb(${r},${g},${b})`
//     return generatedRGB
    
// }


