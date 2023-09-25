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

            // contains the JSON response
           
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

   // Card 10
    
   const fetchedPet10 = animalData.animals[9];
   const petName10 = document.getElementById('name10').firstChild;
   const petBreed10 = document.getElementById('breed10').firstChild;
   const petAge10 = document.getElementById('age10').firstChild;
   const petGender10 = document.getElementById('gender10').firstChild;
   const phone10 = document.getElementById('phone10').firstChild;
   const email10 = document.getElementById('email10').firstChild;
   petName10.replaceWith("Pet Name: " + fetchedPet10.name);    
   petBreed10.replaceWith("Breed: " + fetchedPet10.breeds.primary);    
   petAge10.replaceWith("Age: " + fetchedPet10.age);
   petGender10.replaceWith("Gender: " + fetchedPet10.gender);
   phone10.replaceWith('Phone Number: ' + fetchedPet10.contact.phone);
   email10.replaceWith("Email: " + fetchedPet10.contact.email);

   // image10 section
   var petImg10Link = fetchedPet10.photos.length > 0 ? fetchedPet10.photos[0].full : undefined;

   if (petImg10Link === undefined) {
     document.getElementById('pet-img-10').src = "./Assets/no-image-icon.jpg";
   } else {
     document.getElementById('pet-img-10').src = petImg10Link;
   }

    // Card 11
    
    const fetchedPet11 = animalData.animals[10];
    const petName11 = document.getElementById('name11').firstChild;
    const petBreed11 = document.getElementById('breed11').firstChild;
    const petAge11 = document.getElementById('age11').firstChild;
    const petGender11 = document.getElementById('gender11').firstChild;
    const phone11 = document.getElementById('phone11').firstChild;
    const email11 = document.getElementById('email11').firstChild;
    petName11.replaceWith("Pet Name: " + fetchedPet11.name);    
    petBreed11.replaceWith("Breed: " + fetchedPet11.breeds.primary);    
    petAge11.replaceWith("Age: " + fetchedPet11.age);
    petGender11.replaceWith("Gender: " + fetchedPet11.gender);
    phone11.replaceWith('Phone Number: ' + fetchedPet11.contact.phone);
    email11.replaceWith("Email: " + fetchedPet11.contact.email);

    // image11 section
    var petImg11Link = fetchedPet11.photos.length > 0 ? fetchedPet11.photos[0].full : undefined;

    if (petImg11Link === undefined) {
      document.getElementById('pet-img-11').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-11').src = petImg11Link;
    }

     // Card 12
    
     const fetchedPet12 = animalData.animals[11];
     const petName12 = document.getElementById('name12').firstChild;
     const petBreed12 = document.getElementById('breed12').firstChild;
     const petAge12 = document.getElementById('age12').firstChild;
     const petGender12 = document.getElementById('gender12').firstChild;
     const phone12 = document.getElementById('phone12').firstChild;
     const email12 = document.getElementById('email12').firstChild;
     petName12.replaceWith("Pet Name: " + fetchedPet12.name);    
     petBreed12.replaceWith("Breed: " + fetchedPet12.breeds.primary);    
     petAge12.replaceWith("Age: " + fetchedPet12.age);
     petGender12.replaceWith("Gender: " + fetchedPet12.gender);
     phone12.replaceWith('Phone Number: ' + fetchedPet12.contact.phone);
     email12.replaceWith("Email: " + fetchedPet12.contact.email);
 
     // image12 section
     var petImg12Link = fetchedPet12.photos.length > 0 ? fetchedPet12.photos[0].full : undefined;
 
     if (petImg12Link === undefined) {
       document.getElementById('pet-img-12').src = "./Assets/no-image-icon.jpg";
     } else {
       document.getElementById('pet-img-12').src = petImg12Link;
     }

      // Card 13
    
    const fetchedPet13 = animalData.animals[12];
    const petName13 = document.getElementById('name13').firstChild;
    const petBreed13 = document.getElementById('breed13').firstChild;
    const petAge13 = document.getElementById('age13').firstChild;
    const petGender13 = document.getElementById('gender13').firstChild;
    const phone13 = document.getElementById('phone13').firstChild;
    const email13 = document.getElementById('email13').firstChild;
    petName13.replaceWith("Pet Name: " + fetchedPet13.name);    
    petBreed13.replaceWith("Breed: " + fetchedPet13.breeds.primary);    
    petAge13.replaceWith("Age: " + fetchedPet13.age);
    petGender13.replaceWith("Gender: " + fetchedPet13.gender);
    phone13.replaceWith('Phone Number: ' + fetchedPet13.contact.phone);
    email13.replaceWith("Email: " + fetchedPet13.contact.email);

    // image13 section
    var petImg13Link = fetchedPet13.photos.length > 0 ? fetchedPet13.photos[0].full : undefined;

    if (petImg13Link === undefined) {
      document.getElementById('pet-img-13').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-13').src = petImg13Link;
    }

     // Card 14
    
     const fetchedPet14 = animalData.animals[13];
     const petName14 = document.getElementById('name14').firstChild;
     const petBreed14 = document.getElementById('breed14').firstChild;
     const petAge14 = document.getElementById('age14').firstChild;
     const petGender14 = document.getElementById('gender14').firstChild;
     const phone14 = document.getElementById('phone14').firstChild;
     const email14 = document.getElementById('email14').firstChild;
     petName14.replaceWith("Pet Name: " + fetchedPet14.name);    
     petBreed14.replaceWith("Breed: " + fetchedPet14.breeds.primary);    
     petAge14.replaceWith("Age: " + fetchedPet14.age);
     petGender14.replaceWith("Gender: " + fetchedPet14.gender);
     phone14.replaceWith('Phone Number: ' + fetchedPet14.contact.phone);
     email14.replaceWith("Email: " + fetchedPet14.contact.email);
 
     // image14 section
     var petImg14Link = fetchedPet14.photos.length > 0 ? fetchedPet14.photos[0].full : undefined;
 
     if (petImg14Link === undefined) {
       document.getElementById('pet-img-14').src = "./Assets/no-image-icon.jpg";
     } else {
       document.getElementById('pet-img-14').src = petImg14Link;
     }

      // Card 15
    
    const fetchedPet15 = animalData.animals[14];
    const petName15 = document.getElementById('name15').firstChild;
    const petBreed15 = document.getElementById('breed15').firstChild;
    const petAge15 = document.getElementById('age15').firstChild;
    const petGender15 = document.getElementById('gender15').firstChild;
    const phone15 = document.getElementById('phone15').firstChild;
    const email15 = document.getElementById('email15').firstChild;
    petName15.replaceWith("Pet Name: " + fetchedPet15.name);    
    petBreed15.replaceWith("Breed: " + fetchedPet15.breeds.primary);    
    petAge15.replaceWith("Age: " + fetchedPet15.age);
    petGender15.replaceWith("Gender: " + fetchedPet15.gender);
    phone15.replaceWith('Phone Number: ' + fetchedPet15.contact.phone);
    email15.replaceWith("Email: " + fetchedPet15.contact.email);

    // image15 section
    var petImg15Link = fetchedPet15.photos.length > 0 ? fetchedPet15.photos[0].full : undefined;

    if (petImg15Link === undefined) {
      document.getElementById('pet-img-15').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-15').src = petImg15Link;
    }

     // Card 16
    
     const fetchedPet16 = animalData.animals[15];
     const petName16 = document.getElementById('name16').firstChild;
     const petBreed16 = document.getElementById('breed16').firstChild;
     const petAge16 = document.getElementById('age16').firstChild;
     const petGender16 = document.getElementById('gender16').firstChild;
     const phone16 = document.getElementById('phone16').firstChild;
     const email16 = document.getElementById('email16').firstChild;
     petName16.replaceWith("Pet Name: " + fetchedPet16.name);    
     petBreed16.replaceWith("Breed: " + fetchedPet16.breeds.primary);    
     petAge16.replaceWith("Age: " + fetchedPet16.age);
     petGender16.replaceWith("Gender: " + fetchedPet16.gender);
     phone16.replaceWith('Phone Number: ' + fetchedPet16.contact.phone);
     email16.replaceWith("Email: " + fetchedPet16.contact.email);
 
     // image16 section
     var petImg16Link = fetchedPet16.photos.length > 0 ? fetchedPet16.photos[0].full : undefined;
 
     if (petImg16Link === undefined) {
       document.getElementById('pet-img-16').src = "./Assets/no-image-icon.jpg";
     } else {
       document.getElementById('pet-img-16').src = petImg16Link;
     }

      // Card 17
    
    const fetchedPet17 = animalData.animals[16];
    const petName17 = document.getElementById('name17').firstChild;
    const petBreed17 = document.getElementById('breed17').firstChild;
    const petAge17 = document.getElementById('age17').firstChild;
    const petGender17 = document.getElementById('gender17').firstChild;
    const phone17 = document.getElementById('phone17').firstChild;
    const email17 = document.getElementById('email17').firstChild;
    petName17.replaceWith("Pet Name: " + fetchedPet17.name);    
    petBreed17.replaceWith("Breed: " + fetchedPet17.breeds.primary);    
    petAge17.replaceWith("Age: " + fetchedPet17.age);
    petGender17.replaceWith("Gender: " + fetchedPet17.gender);
    phone17.replaceWith('Phone Number: ' + fetchedPet17.contact.phone);
    email17.replaceWith("Email: " + fetchedPet17.contact.email);

    // image17 section
    var petImg17Link = fetchedPet17.photos.length > 0 ? fetchedPet17.photos[0].full : undefined;

    if (petImg17Link === undefined) {
      document.getElementById('pet-img-17').src = "./Assets/no-image-icon.jpg";
    } else {
      document.getElementById('pet-img-17').src = petImg17Link;
    }

     // Card 18
    
     const fetchedPet18 = animalData.animals[17];
     const petName18 = document.getElementById('name18').firstChild;
     const petBreed18 = document.getElementById('breed18').firstChild;
     const petAge18 = document.getElementById('age18').firstChild;
     const petGender18 = document.getElementById('gender18').firstChild;
     const phone18 = document.getElementById('phone18').firstChild;
     const email18 = document.getElementById('email18').firstChild;
     petName18.replaceWith("Pet Name: " + fetchedPet18.name);    
     petBreed18.replaceWith("Breed: " + fetchedPet18.breeds.primary);    
     petAge18.replaceWith("Age: " + fetchedPet18.age);
     petGender18.replaceWith("Gender: " + fetchedPet18.gender);
     phone18.replaceWith('Phone Number: ' + fetchedPet18.contact.phone);
     email18.replaceWith("Email: " + fetchedPet18.contact.email);
 
     // image18 section
     var petImg18Link = fetchedPet18.photos.length > 0 ? fetchedPet18.photos[0].full : undefined;
 
     if (petImg18Link === undefined) {
       document.getElementById('pet-img-18').src = "./Assets/no-image-icon.jpg";
     } else {
       document.getElementById('pet-img-18').src = petImg18Link;
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

  