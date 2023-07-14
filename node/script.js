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