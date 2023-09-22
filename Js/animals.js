function fetchAnimals(e) {
    e.preventDefault();
    localStorage.removeItem('responseData');
      
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
            localStorage.setItem('responseData', jsonData);
            showAnimals(data.animals);           
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }

  function showAnimals(animals) {

    // Pulling Animal Data from localStorage and storing info as variable = animalData
    var animalData = JSON.parse(localStorage.getItem('responseData'));
       
    // Card 1
    
    const fetchedPet1 = animalData.animals[0];
    const petName1 = document.getElementById('name1').firstChild;
    const petBreed1 = document.getElementById('breed1').firstChild;
    const petAge1 = document.getElementById('age1').firstChild;
    const petGender1 = document.getElementById('gender1').firstChild;
    const phone1 = document.getElementById('phone1').firstChild;
    const email1 = document.getElementById('email1').firstChild;
    petName1.replaceWith("Pet Name: " + fetchedPet1.name);    
    petBreed1.replaceWith("Breed: " + fetchedPet1.breeds.primary);    
    petAge1.replaceWith("Age: " + fetchedPet1.age);
    petGender1.replaceWith("Gender: " + fetchedPet1.gender);
    phone1.replaceWith('Phone Number: ' + fetchedPet1.contact.phone);
    email1.replaceWith("Email: " + fetchedPet1.contact.email);

   // image1 section
    var petImg1Link = fetchedPet1.photos.length > 0 ? fetchedPet1.photos[0].full : undefined;

    if (petImg1Link === undefined) {
      document.getElementById('pet-img-1').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-1').src = petImg1Link;
    }
 
    // Card 2        
    
    const fetchedPet2 = animalData.animals[1];
    const petName2 = document.getElementById('name2').firstChild;
    const petBreed2 = document.getElementById('breed2').firstChild;
    const petAge2 = document.getElementById('age2').firstChild;
    const petGender2 = document.getElementById('gender2').firstChild;
    const phone2 = document.getElementById('phone2').firstChild;
    const email2 = document.getElementById('email2').firstChild;
    petName2.replaceWith("Pet Name: " + fetchedPet2.name);    
    petBreed2.replaceWith("Breed: " + fetchedPet2.breeds.primary);    
    petAge2.replaceWith("Age: " + fetchedPet2.age);
    petGender2.replaceWith("Gender: " + fetchedPet2.gender);
    phone2.replaceWith('Phone Number: ' + fetchedPet2.contact.phone);
    email2.replaceWith("Email: " + fetchedPet2.contact.email);

    // image2 section
    var petImg2Link = fetchedPet2.photos.length > 0 ? fetchedPet2.photos[0].full : undefined;

    if (petImg2Link === undefined) {
      document.getElementById('pet-img-2').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-2').src = petImg2Link;
    }

    // Card 3   
    
    const fetchedPet3 = animalData.animals[2];
    const petName3 = document.getElementById('name3').firstChild;
    const petBreed3 = document.getElementById('breed3').firstChild;
    const petAge3 = document.getElementById('age3').firstChild;
    const petGender3 = document.getElementById('gender3').firstChild;
    const phone3 = document.getElementById('phone3').firstChild;
    const email3 = document.getElementById('email3').firstChild;
    petName3.replaceWith("Pet Name: " + fetchedPet3.name);    
    petBreed3.replaceWith("Breed: " + fetchedPet3.breeds.primary);    
    petAge3.replaceWith("Age: " + fetchedPet3.age);
    petGender3.replaceWith("Gender: " + fetchedPet3.gender);
    phone3.replaceWith('Phone Number: ' + fetchedPet3.contact.phone);
    email3.replaceWith("Email: " + fetchedPet3.contact.email);

    // image3 section
    var petImg3Link = fetchedPet3.photos.length > 0 ? fetchedPet3.photos[0].full : undefined;

    if (petImg3Link === undefined) {
      document.getElementById('pet-img-3').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-3').src = petImg3Link;
    }

    // Card 4
    
    const fetchedPet4 = animalData.animals[3];
    const petName4 = document.getElementById('name4').firstChild;
    const petBreed4 = document.getElementById('breed4').firstChild;
    const petAge4 = document.getElementById('age4').firstChild;
    const petGender4 = document.getElementById('gender4').firstChild;
    const phone4 = document.getElementById('phone4').firstChild;
    const email4 = document.getElementById('email4').firstChild;
    petName4.replaceWith("Pet Name: " + fetchedPet4.name);    
    petBreed4.replaceWith("Breed: " + fetchedPet4.breeds.primary);    
    petAge4.replaceWith("Age: " + fetchedPet4.age);
    petGender4.replaceWith("Gender: " + fetchedPet4.gender);
    phone4.replaceWith('Phone Number: ' + fetchedPet4.contact.phone);
    email4.replaceWith("Email: " + fetchedPet4.contact.email);

    // image4 section
    var petImg4Link = fetchedPet4.photos.length > 0 ? fetchedPet4.photos[0].full : undefined;

    if (petImg4Link === undefined) {
      document.getElementById('pet-img-4').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-4').src = petImg4Link;
    }

    // Card 5
    
    const fetchedPet5 = animalData.animals[4];
    const petName5 = document.getElementById('name5').firstChild;
    const petBreed5 = document.getElementById('breed5').firstChild;
    const petAge5 = document.getElementById('age5').firstChild;
    const petGender5 = document.getElementById('gender5').firstChild;
    const phone5 = document.getElementById('phone5').firstChild;
    const email5 = document.getElementById('email5').firstChild;
    petName5.replaceWith("Pet Name: " + fetchedPet5.name);    
    petBreed5.replaceWith("Breed: " + fetchedPet5.breeds.primary);    
    petAge5.replaceWith("Age: " + fetchedPet5.age);
    petGender5.replaceWith("Gender: " + fetchedPet5.gender);
    phone5.replaceWith('Phone Number: ' + fetchedPet5.contact.phone);
    email5.replaceWith("Email: " + fetchedPet5.contact.email);

    // image5 section
    var petImg5Link = fetchedPet5.photos.length > 0 ? fetchedPet5.photos[0].full : undefined;

    if (petImg5Link === undefined) {
      document.getElementById('pet-img-5').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-5').src = petImg5Link;
    }

    // Card 6
    
    const fetchedPet6 = animalData.animals[5];
    const petName6 = document.getElementById('name6').firstChild;
    const petBreed6 = document.getElementById('breed6').firstChild;
    const petAge6 = document.getElementById('age6').firstChild;
    const petGender6 = document.getElementById('gender6').firstChild;
    const phone6 = document.getElementById('phone6').firstChild;
    const email6 = document.getElementById('email6').firstChild;
    petName6.replaceWith("Pet Name: " + fetchedPet6.name);    
    petBreed6.replaceWith("Breed: " + fetchedPet6.breeds.primary);    
    petAge6.replaceWith("Age: " + fetchedPet6.age);
    petGender6.replaceWith("Gender: " + fetchedPet6.gender);
    phone6.replaceWith('Phone Number: ' + fetchedPet6.contact.phone);
    email6.replaceWith("Email: " + fetchedPet6.contact.email);

    // image6 section
    var petImg6Link = fetchedPet6.photos.length > 0 ? fetchedPet6.photos[0].full : undefined;

    if (petImg6Link === undefined) {
      document.getElementById('pet-img-6').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-6').src = petImg6Link;
    }

    // Card 7
    
    const fetchedPet7 = animalData.animals[6];
    const petName7 = document.getElementById('name7').firstChild;
    const petBreed7 = document.getElementById('breed7').firstChild;
    const petAge7 = document.getElementById('age7').firstChild;
    const petGender7 = document.getElementById('gender7').firstChild;
    const phone7 = document.getElementById('phone7').firstChild;
    const email7 = document.getElementById('email7').firstChild;
    petName7.replaceWith("Pet Name: " + fetchedPet7.name);    
    petBreed7.replaceWith("Breed: " + fetchedPet7.breeds.primary);    
    petAge7.replaceWith("Age: " + fetchedPet7.age);
    petGender7.replaceWith("Gender: " + fetchedPet7.gender);
    phone7.replaceWith('Phone Number: ' + fetchedPet7.contact.phone);
    email7.replaceWith("Email: " + fetchedPet7.contact.email);

    // image7 section
    var petImg7Link = fetchedPet7.photos.length > 0 ? fetchedPet7.photos[0].full : undefined;

    if (petImg7Link === undefined) {
      document.getElementById('pet-img-7').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-7').src = petImg7Link;
    }

    // Card 8
   
    const fetchedPet8 = animalData.animals[7];
    const petName8 = document.getElementById('name8').firstChild;
    const petBreed8 = document.getElementById('breed8').firstChild;
    const petAge8 = document.getElementById('age8').firstChild;
    const petGender8 = document.getElementById('gender8').firstChild;
    const phone8 = document.getElementById('phone8').firstChild;
    const email8 = document.getElementById('email8').firstChild;
    petName8.replaceWith("Pet Name: " + fetchedPet8.name);    
    petBreed8.replaceWith("Breed: " + fetchedPet8.breeds.primary);    
    petAge8.replaceWith("Age: " + fetchedPet8.age);
    petGender8.replaceWith("Gender: " + fetchedPet8.gender);
    phone8.replaceWith('Phone Number: ' + fetchedPet8.contact.phone);
    email8.replaceWith("Email: " + fetchedPet8.contact.email);

     // image8 section
     var petImg8Link = fetchedPet8.photos.length > 0 ? fetchedPet8.photos[0].full : undefined;

    if (petImg8Link === undefined) {
      document.getElementById('pet-img-8').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-8').src = petImg8Link;
    }

    // Card 9
    
    const fetchedPet9 = animalData.animals[8];
    const petName9 = document.getElementById('name9').firstChild;
    const petBreed9 = document.getElementById('breed9').firstChild;
    const petAge9 = document.getElementById('age9').firstChild;
    const petGender9 = document.getElementById('gender9').firstChild;
    const phone9 = document.getElementById('phone9').firstChild;
    const email9 = document.getElementById('email9').firstChild;
    petName9.replaceWith("Pet Name: " + fetchedPet9.name);    
    petBreed9.replaceWith("Breed: " + fetchedPet9.breeds.primary);    
    petAge9.replaceWith("Age: " + fetchedPet9.age);
    petGender9.replaceWith("Gender: " + fetchedPet9.gender);
    phone9.replaceWith('Phone Number: ' + fetchedPet9.contact.phone);
    email9.replaceWith("Email: " + fetchedPet9.contact.email);

    // image9 section
    var petImg9Link = fetchedPet9.photos.length > 0 ? fetchedPet9.photos[0].full : undefined;

    if (petImg9Link === undefined) {
      document.getElementById('pet-img-9').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-9').src = petImg9Link;
    }
  }
  
  const petForm = document.querySelector('#pet-form');
  petForm.addEventListener('submit', fetchAnimals);

  /* NavBar Dropdown Menu */
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

showAnimals();

  