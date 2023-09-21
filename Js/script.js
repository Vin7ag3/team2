function fetchAnimals(e) {
    e.preventDefault();
  
    const animal = document.querySelector('#animal').value;
    const zip = document.querySelector('#zip').value;
    const clientId = 'HHRUxcBG0cLtwB0LSBvqAZAYDpF6BnioiSgK0iHJ7kc6YdNtUV';
    const clientSecret = 'xTg1ROLZKJUN1oF6E09Vdku0dkgsrjuu3tuMby7W';
    const tokenUrl = 'https://api.petfinder.com/v2/oauth2/token';
  
    // req body with client credentials grant type
    const requestBody = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
  
    // post request to obtain an access token
    fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: requestBody,
    })
      .then((res) => res.json())
      .then((tokenData) => {
        // extract the access token from the response
        const accessToken = tokenData.access_token;
  
        // access token to fetch animal data
        fetch(`https://api.petfinder.com/v2/animals?type=${animal}&location=${zip}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
          .then((res) => res.json())
          .then((data) => {

          // window.location.href = `animals.html?data=${encodeURIComponent(JSON.stringify(data.animals))}`;
  
            const jsonData = JSON.stringify(data); 
            showAnimals(data.animals);
  
            console.log(jsonData);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
}

/* Geolocation Pop Up */
let current_location = document.getElementById("location");
const success = (position) => {
  const longitude = position.coords.longitude;
  const latitude = position.coords.latitude;
  
  current_location.textContent = `Longitute = ${longitude} \n latitude = ${latitude}`;
}
const error = (error) => {
  current_location.textContent = `Couldn't access your location \n Reason: ${error.message}`;
}
const getLocation = () => {
  if(navigator.geolocation)
    navigator.geolocation.getCurrentPosition(success,error);
  else 
    current_location.textContent = `Your browser does not support this feature`;
}

  const petForm = document.querySelector('#pet-form');
  petForm.addEventListener('submit', fetchAnimals);

  // function to display the animals
  function showAnimals(animals) {
    // display animal data rendering it on the web page
    console.log(animals);
}

/* NavBar Dropdown Menu*/

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

  function updateButtonText() {
    var selectedAnimal = document.getElementById("animal").value;
    document.querySelector(".dropbtn").textContent = selectedAnimal;
}

document.querySelector("#pet-form button[type='submit']").addEventListener("click", function(e) {
  var selectedAnimal = document.getElementById("animal").value;
  console.log("Selected animal: " + selectedAnimal);
});

const animalSelect = document.getElementById("animal");
animalSelect.addEventListener("change", updateButtonText);

// close dropdown onclick outside
window.onclick = function(event) {
  if(!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
