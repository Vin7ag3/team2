// function to populate breed select dropdown
function populateBreedSelect() {
// get breed selection by .
      const breedSelect = document.querySelector('.breed_select');
// clear options in the dropdown
      breedSelect.innerHTML = '';
    
// default option for the dropdown and append
      breedSelect.appendChild(createOption('', 'Select a breed'));
    
// function to add options to the dropdown
      const addOptions = options => options.forEach(option => breedSelect.appendChild(createOption(option.id || option, option.name || option)));
    
// fetch data for dog breeds and cat breeds - two API
      Promise.all([
        fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()),
        fetch('https://api.thecatapi.com/v1/breeds').then(response => response.json())
      ]).then(([dogBreedsData, catBreedsData]) => {
// dog and cat breed options to dropdown
        addOptions(Object.keys(dogBreedsData.message));
        addOptions(catBreedsData);
    
// get the breed search input element by its ID
        const breedSearchInput = document.getElementById('breed_search');
// event listener to handle input changes - search
        breedSearchInput.addEventListener('input', () => fetchAnimalData(document.querySelector("input[name='animal']:checked").value, breedSearchInput.value.trim()));
    
// event listener for changes in breed selection
        breedSelect.addEventListener('change', () => fetchAnimalData(document.querySelector("input[name='animal']:checked").value, breedSelect.value));
      }).catch(error => console.error('Error:', error));
}
    
// function to create an option for the dropdown
    const createOption = (value, text) => {
      const option = document.createElement('option');
      option.value = value;
      option.textContent = text;
      return option;
};
    
// function to fetch animal data based on species and breed
    function fetchAnimalData(animalType, breed) {
// get element id for displaying image and description
      const breedImage = document.getElementById('breed_image');
      const breedDescription = document.getElementById('breed_description');
    
// clear img and description text
      breedImage.src = '';
      breedDescription.textContent = '';
    
// define api based on the selected animal species
      const apiUrl = animalType === 'dog'
        ? `https://dog.ceo/api/breed/${breed}/images/random`
        : `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;
    
// fetch data from the API
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (animalType === 'dog') { 
            breedImage.src = data.message; // dog image
    
// fetch data for dog temperament
            fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`)
              .then(response => response.json())
              .then(dogData => {
                const temperament = (dogData[0] && dogData[0].temperament) || 'Temperament not available.';
                breedDescription.textContent = 'Temperament: ' + temperament;
              }).catch(error => {
                console.error('Error fetching:', error);
                breedDescription.textContent = 'Temperament not available.';
              });
          } else if (animalType === 'cat') {
            const catData = data[0];
            breedImage.src = catData.url;  // cat image
    
// fetch data for cat description
            fetch(`https://api.thecatapi.com/v1/breeds/${breed}`)
              .then(response => response.json())
              .then(catBreedData => {
                const description = (catBreedData && catBreedData.description) || 'Description not available.';
                breedDescription.textContent = 'Description: ' + description;
              }).catch(error => {
                console.error('Error fetching:', error);
                breedDescription.textContent = 'Description not available.';
              });
          }
        }).catch(error => console.error('Error fetching:', error));
}
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// replicate same function as first for second modal //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function to populate breed select dropdown
function populateBreedSelect_two () {

// get breed selection by .
    const breedSelect_two = document.querySelector('.breed_select_two');
    
// clear options in the dropdown
    breedSelect_two.innerHTML = '';
    
// default option for the dropdown and append
    breedSelect_two.appendChild(createOption('', 'Select a breed'));
    
// function to add options to the dropdown
    const addOptions_two = options => options.forEach(option => breedSelect_two.appendChild(createOption(option.id || option, option.name || option)));
    
// fetch data for dog breeds and cat breeds - two API
        Promise.all([
            fetch('https://dog.ceo/api/breeds/list/all').then(response => response.json()), 
            fetch('https://api.thecatapi.com/v1/breeds').then(response => response.json())
        ]).then(([dogBreedsData, catBreedsData]) => {
    
// dog and cat breed options to dropdown
            addOptions_two(Object.keys(dogBreedsData.message));
            addOptions_two(catBreedsData);
    
// get the breed search input element by its ID
            const breedSearchInput_two = document.getElementById('breed_search_two');
    
// event listener to handle input changes - search
            breedSearchInput_two.addEventListener('input', () => fetchAnimalData_two(document.querySelector("input[name='animal_two']:checked").value, breedSearchInput_two.value.trim()));
    
// event listener for changes in breed selection
            breedSelect_two.addEventListener('change', () => fetchAnimalData_two(document.querySelector("input[name='animal_two']:checked").value, breedSelect_two.value));
        }).catch(error => console.error('Error:', error));
}
    

// function to fetch animal data based on species and breed
    function fetchAnimalData_two(animalType, breed) {
        const breedImage_two = document.getElementById('breed_image_two');
        const breedDescription_two = document.getElementById('breed_description_two');
    
// clear img and description text
        breedImage_two.src = '';
        breedDescription_two.textContent = '';
    
// define api based on the selected animal species
        const apiUrl_two = animalType === 'dog'
            ? `https://dog.ceo/api/breed/${breed}/images/random`
            : `https://api.thecatapi.com/v1/images/search?breed_ids=${breed}`;
    
// fetch data from the API
        fetch(apiUrl_two)
            .then(response => response.json())
            .then(data => {
                if (animalType === 'dog') {
                    breedImage_two.src = data.message; 
    
// fetch data for dog temperament
                    fetch(`https://api.thedogapi.com/v1/breeds/search?q=${breed}`)
                        .then(response => response.json())
                        .then(dogData => {
                            const temperament = (dogData[0] && dogData[0].temperament) || 'Temperament not available.';
                            breedDescription_two.textContent = 'Temperament: ' + temperament;
                        }).catch(error => {
                            console.error('Error fetching:', error);
                            breedDescription_two.textContent = 'Temperament not available.';
                        });
                } else if (animalType === 'cat') {
                    const catData = data[0];
                    breedImage_two.src = catData.url; 
    
// fetch data for cat description
                    fetch(`https://api.thecatapi.com/v1/breeds/${breed}`) 
                    .then(response => response.json())
                    .then(catBreedData => {
                        const description = (catBreedData && catBreedData.description) || 'Description not available.';
                        breedDescription_two.textContent = 'Description: ' + description;
                    }).catch(error => {
                        console.error('Error fetching:', error);
                        breedDescription_two.textContent = 'Description not available.';
                    });
                }
            }).catch(error => console.error('Error fetching:', error));
}

// call function to populate the breed select drop down 1 & 2
populateBreedSelect();
populateBreedSelect_two();
    