// select the input from the html
const searchBox = document.querySelector(".search-box");
// // target the button from html
const buttonInitial = document.querySelector(".search-by-initials");
const buttonAny = document.querySelector(".search-by-any");
const resultSection = document.querySelector(".result-section");

searchBox.addEventListener("keyup", function(){
    if(buttonInitial.classList.contains('selected')){
        searchCountriesByInitials()
    }
});



searchBox.addEventListener("keyup", function(){
    if(buttonAny.classList.contains('selected')){

        searchByAny()
    }
} );

buttonInitial.addEventListener("click", function() {
    document.querySelectorAll('.btn').forEach(element =>{
        element.classList.toggle('selected')
    })
  
  searchCountriesByInitials();
});

buttonAny.addEventListener("click", function() {
    document.querySelectorAll('.btn').forEach(element =>{
        element.classList.toggle('selected')
    })
 
  searchByAny();
});

// adding action listener to the sort button
const sortButton = document.querySelector(".fontawesome-button");
sortButton.addEventListener("click", function() {
  countries.reverse();
  document.querySelector('.fas').classList.toggle("fa-sort-alpha-down");
  document.querySelector('.fas').classList.toggle("fa-sort-alpha-up");

  if (buttonInitial.classList.contains("selected")) {
    searchCountriesByInitials();
  }

  if (buttonAny.classList.contains("selected")) {
    searchByAny();
  }
});

// this function filters country starting with the given searchkey
function searchCountriesByInitials() {
  clearItems();
  const searchResult = countries.filter(country => {
    return country.toUpperCase().startsWith(searchBox.value.toUpperCase());
  });

  // target where you wanna put the created box
  searchResult.forEach((element, index) => {
    // create new divs
    const resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "country-div");
    // resultDiv.style.backgroundColor = generateRGB();

    const resultSpan = document.createElement("span");
    resultSpan.textContent = element;

    // append created child to result section
    resultDiv.appendChild(resultSpan);
    resultSection.appendChild(resultDiv);

    if(index % 2 === 0){
        resultDiv.classList.add('dark')
    }else {
        resultDiv.classList.add('light')
    }

    resultDiv.addEventListener('mouseenter', playOnHover)

    

  });

  if(searchBox.value == '') {
    resultSection.style.display = 'none'

    }else {
        resultSection.style.display = 'block'
    
    }

  // FUNCTION GENERATEDIV ENDS
}

// this function filters country from array with any searchkey
function searchByAny() {

  clearItems();

  const pattern = new RegExp(searchBox.value, "gi");
  const searchResult = countries.filter(country => {
    return country.toUpperCase().match(pattern);
  });

  // target where you wanna put the created box
  searchResult.forEach((element, index) => {
    // create new divs
    const resultDiv = document.createElement("div");
    resultDiv.setAttribute("class", "country-div");
    // resultDiv.style.backgroundColor = generateRGB();

    const resultSpan = document.createElement("span");
    resultSpan.textContent = element;

    // append created child to result section
    resultDiv.appendChild(resultSpan);
    resultSection.appendChild(resultDiv);
    
    if(index % 2 === 0){
        resultDiv.classList.add('dark')
    }else {
        resultDiv.classList.add('light')
    }
        
  })
  if(searchBox.value == '') {
    resultSection.style.display = 'none'

    }else {
        resultSection.style.display = 'block'
    
    }


    resultDiv.addEventListener('mouseenter', playOnHover)
}

// creating function that creates rgb color
// function generateRGB() {
//   let r = Math.floor(Math.random() * 256);
//   let g = Math.floor(Math.random() * 256);
//   let b = Math.floor(Math.random() * 256);

//   return `rgb(${r},${g},${g})`;
// }

// this function clears the search results
function clearItems() {
  const divsToRemove = document.querySelectorAll(".country-div");
  divsToRemove.forEach(element => {
    element.remove();
  });
}


function playOnHover () {
    var audio = document.getElementsByTagName("audio")[0];
        audio.play();
}


// function sortCountries() {
//   return countries.reverse();
// }