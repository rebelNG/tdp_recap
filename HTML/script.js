// for (let i = 1; i <= 100; i++){
//     // console.log(`i = ${i}`);
//     if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log(`FizzBuzz`);
//     } else if (i % 3 == 0){
//         console.log(`Fizz`);
//     } else if (i % 5 == 0){
//         console.log('Buzz');
//     } else{
//         console.log(`i = ${i}`)
//     }
// }

// const people = {
//     name: ['Bob', 'Smith'],
//     age: 32,
//     gender: 'male',
//     interests: ['music', 'skiing'],
//     bio: function(){
//         alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1]+'.')
//     },
//     greeting: function(){
//         alert('Hi! i\'m '+ this.name[0]+'.')
//     }
// }

let json_data = [
    {
        userId: 1,
        id: 1,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    }
]

let myList = document.getElementById("todo-list")

json_data.forEach(element => {
    let listItem = document.createElement("li")
    listItem.appendChild(
        document.createTextNode(element.title)
    )
    let deleteLink = document.createElement("a")

    deleteLink.href = "#"
    deleteLink.className = "btn btn-sm btn-danger m-1 delete"
    deleteLink.appendChild(
        document.createTextNode("Delete")
    )
    listItem.appendChild(deleteLink)
    myList.appendChild(listItem)
})

let closeButtons = document.getElementsByClassName("Delete")
for(let i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', deleteTodo, false)
}
function deleteTodo(){
    let li = this.parentElement
    myList.removeChild(li)
}