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

// searchByAny.addEventListener('click', searchCountriesByAny)










//Search by first letter 


function searchCountriesByInitials () {
    let searchKey = searchBox.value

        const countriesStartWith = countries.filter(element =>{
        return element.toUpperCase().startsWith(searchKey.toUpperCase())
        })

        

    return countriesStartWith
}


// Search Generate Div
function generateDiv () {
    const resultBox = document.querySelector('.result-section')
    const newCountries = searchCountriesByInitials ()
  
    const el = newCountries.forEach(element => {
        
        const createNewDiv = document.createElement('div')
        createNewDiv.setAttribute('class', 'country-div')
        createNewDiv.textContent= element;
        resultBox.appendChild(createNewDiv)
    })

    
}




//Search is some certain characters exist such as "land"
// function searchCountriesByAny () {

// }
