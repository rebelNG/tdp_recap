'use strict'

// CREATE   - POST
// READ     - GET
// UPDATE   - PUT/PATCH
// DELETE   - DELETE

const input = document.getElementById('input');
const button = document.getElementById('button');
const output = document.getElementById('output');

/*
let read =(URL)=>{
    fetch(URL)
        .then((response) =>{
            if (response.status !== 200){
                console.error(`status: ${response.status}`);
                return;
            }
            response.json()
                .then( data => {
                    output.innerText = JSON.stringify(data);
                })
        }).catch((error) => {
            console.error(`${error}`);
        })
}
*/

// button.onclick =()=> read(input.value);

let reader =(URL)=> {

    
    axios
        .get(URL)
        .then((response) =>{
            output.innerText = JSON.stringify(response.data);
            let image = document.createElement('img');
            image.src =response.data.message;
            output.append(image);
        }).catch((error) => {
            console.error(error);
        })
}
button.onclick =()=> {reader(input.value)}

// let create =(URL)=> {
//     axios
//         .post(URL, {
//             firstName: 'Emmanuel',
//             email: 'rebel@gmail.com'
//         })
//         .then ((response) => {
//             output.innerText = JSON.stringify(response.data);
//         }).catch((error) => {
//             console.error(error);
//         })
// }

// let image = document.createElement('img');
// image.src =data.message;
// output.append(image);