function fetchAnimals(e) {
    e.preventDefault();
  
    const animal = document.querySelector('#animal').value;
    const zip = document.querySelector('#zip').value;
    const clientId = 'HHRUxcBG0cLtwB0LSBvqAZAYDpF6BnioiSgK0iHJ7kc6YdNtUV';
    const clientSecret = 'xTg1ROLZKJUN1oF6E09Vdku0dkgsrjuu3tuMby7W';
    const tokenUrl = 'https://api.petfinder.com/v2/oauth2/token';
  
    // req body with client credentials grant type
    const requestBody = `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`;
  
    // pOST request to obtain an access token
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
            // contains the JSON response
          // window.location.href = `animals.html?data=${encodeURIComponent(JSON.stringify(data.animals))}`;
  
            const jsonData = JSON.stringify(data); // Convert data to a JSON string
            showAnimals(data.animals);
  
            // JSON string if needed
            console.log(jsonData);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }

  const petForm = document.querySelector('#pet-form');
  petForm.addEventListener('submit', fetchAnimals);

  // Function to display the animals
  function showAnimals(animals) {
    // Handle the display of animal data here, e.g., rendering it on the web page
    console.log(animals);
  }

/* NavBar Dropdown Menu*/

  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }