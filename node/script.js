'use strict'

const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');

// let read =URL=> {
//     fetch(URL)
//     .then((Response)=>{
//         if(Response.status !== 200){
//             console.error(`status: ${Response.status}`);
//             return;
//         }
//         Response.json()
//         .then(data =>{
//             output.innerText = JSON.stringify(data)
//         })
//     }).catch((error) => {
//         console.error(`${error}`);
//     })
// }

let read =URL=> {
    axios
        .get(URL)
        .then( (response) => {
            output.innerText = JSON.stringify(response.data);
        }).catch((error) => {
            console.error(error);
        });
}

// POST method for CREATE
let create =URL=> {
    axios
        .post(URL, {
            first_name : "Cameron",
            email : "cguthrie@qa.com"
        })
        .then( (response) => {
            output.innerText = JSON.stringify(response.data);
        }).catch((error) => {
            console.error(error);
        });
}

button.onclick =()=> create(input.value);


// button.onclick =()=> read(input.value);

axios.get('https://api.example.com/pictures')
  .then(response => {
    const pictures = response.data; // Assuming the response data is an array of picture objects

    // Process the pictures as needed
    pictures.forEach(picture => {
      // Access the picture URL or other relevant information
      const imageUrl = picture.url;
      
      // Use the picture data to display images in your application
      // Example: create an <img> element and set its source to the picture URL
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;

      // Append the image element to a container or the DOM
      document.body.appendChild(imgElement);
    });
  })
  .catch(error => {
    console.error('Error fetching pictures:', error);
  })