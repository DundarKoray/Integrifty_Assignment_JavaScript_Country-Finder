
//Get the countries list
// console.log(countries) // testing if it is working



//Target the input 'Search Box' = input
const searchBox = document.querySelector('.search-box')

// Target the buttons 'Search by Initials' and 'Search by Any'
const searchByInitials = document.querySelector('.search-by-initials')
const searchAny = document.querySelector('.search-by-any')
const searchAlphabetical = document.querySelector('.fontawesome-button')
document.querySelector('.fontawesome-button').addEventListener('click', fontawesome)

searchByInitials.addEventListener('click', selected)
searchAny.addEventListener('click', selected)

// Add EVENTLISTENER for buttons:  'click' and call the functions for them
    searchByInitials.addEventListener('click', searchCountriesByInitials)
    searchByInitials.addEventListener('click', generateDiv)
    
    searchAny.addEventListener('click', searchByAny)
    searchAny.addEventListener('click', generateDiv2)
    
    searchBox.addEventListener('keyup', generateDiv2)
    searchBox.addEventListener('keyup', generateDiv)

    


    

/**********************************
* FUNCTIONS - FUNCTIONS - FUNCTIONS
*/


//Search by first letter 
function searchCountriesByInitials () {
    const searchKey = searchBox.value

    const countriesStartWith = countries.filter(element =>{
        return element.toUpperCase().startsWith(searchKey.toUpperCase())
    })
   
    return countriesStartWith     
}

//Search by any
function searchByAny () {
    const searchKey = searchBox.value
    const pattern = new RegExp(searchKey, 'gi')
    
    const searchResult = countries.filter(element => {
        return element.match(pattern)
    })
    return searchResult
    
}

// GENERATE DIV 1 - GENERATE DIV 1 - GENERATE DIV 1
function generateDiv () {

    if(searchByInitials.classList.contains('selected')){

        clearItem()
        
        const resultBox = document.querySelector('.result-section')
        const newCountries = searchCountriesByInitials ()
    
        newCountries.forEach((element, index) => {
        
        const resultSpan = document.createElement('span')
        const createNewDiv = document.createElement('div')
        
        createNewDiv.setAttribute('class', 'country-div')
        resultSpan.textContent= element
        createNewDiv.appendChild(resultSpan)
        resultBox.appendChild(createNewDiv)
        // createNewDiv.style.background = generateRGB()
        
        if(index % 2 === 0){
            createNewDiv.classList.add('dark')
        }else {
            createNewDiv.classList.add('light')
        }

        createNewDiv.addEventListener('mouseenter', playOnHover)
        
        })
    

        if(searchBox.value === '') {
            resultBox.style.display = 'none'
        } else {
            resultBox.style.display = 'block'
        }

    }
}

// GENERATE DIV 2 - GENERATE DIV 2 - GENERATE DIV 2
function generateDiv2 () {
    if(searchAny.classList.contains('selected')){
    clearItem()
        
    const resultBox = document.querySelector('.result-section')
    const newCountries = searchByAny()

    newCountries.forEach((element, index) => {
        
        const resultSpan = document.createElement('span')
        const createNewDiv = document.createElement('div')
        
        createNewDiv.setAttribute('class', 'country-div')
        resultSpan.textContent= element
        createNewDiv.appendChild(resultSpan)
        resultBox.appendChild(createNewDiv)
        // createNewDiv.style.background = generateRGB()
        
        if(index % 2 === 0){
            createNewDiv.classList.add('dark')
        }else {
            createNewDiv.classList.add('light')
        }
        
        createNewDiv.addEventListener('mouseenter', playOnHover)
    })

    if(searchBox.value === '') {
        resultBox.style.display = 'none'
    } else {
        resultBox.style.display = 'block'
    }
    }
}








// Clearing result
function clearItem(){
    const divsToRemove = document.querySelectorAll('.country-div')
    divsToRemove.forEach(element => {
        element.remove()
    })
}

//Hover Audio Sword Effect
function playOnHover () {
    var audio = document.getElementsByTagName("audio")[0];
        audio.play();
}

//selected button
function selected () {
    document.querySelectorAll('.btn').forEach(element =>{
        element.classList.toggle('selected')
    })
}

//change font awesome icon
function fontawesome () {
    document.querySelector('.fas').classList.toggle('fa-sort-alpha-down')
    document.querySelector('.fas').classList.toggle('fa-sort-alpha-up')
}


function reverseArray () {
    return countries.reverse()
}




































// Generate Color
// function generateRGB () {
//     let r = Math.floor(Math.random() * 256)
//     let g = Math.floor(Math.random() * 256)
//     let b = Math.floor(Math.random() * 256)

//     let generatedRGB = `rgb(${r},${g},${b})`
//     return generatedRGB
    
// }


