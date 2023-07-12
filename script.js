const imageElement1 = document.querySelector('.div1 img');
const imageElement2 = document.querySelector('.div2 img');
const imageElement3 = document.querySelector('.div3 img');

let textElement1 = document.querySelectorAll('.name');
let textElement2 = document.querySelectorAll('.email');
let textElement3 = document.querySelectorAll('.gender');
let textElement4 = document.querySelectorAll('.country');
let textElement5 = document.querySelectorAll('.nationality');
let textElement6 = document.querySelectorAll('.date')

const generateButton = document.querySelector('.generate-btn button');

generateButton.addEventListener('click', generateUser)

function generateUser() {
    fetch('https://randomuser.me/api/?results=3')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data.results)
        // console.log(data.results[0].name.title)
        // console.log(`Dear ${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last} i love u`);
        // console.log(data.picture)
        // imageElement.src = data.pictures 
        imageElement1.src = data.results[0].picture.large;
        imageElement2.src = data.results[1].picture.large;
        imageElement3.src = data.results[2].picture.large;

        // textElement1.forEach(element => {
        //     element.innerText = `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`
            // console.log(textElement1)
        // }) 
        
        textElement1.forEach((element, index) => {
            element.innerText = `${data.results[index].name.title} ${data.results[index].name.first} ${data.results[index].name.last}`
            // element.innerText = data.results[index].name.last
            // console.log(element, index)
        })

        textElement2.forEach((element, index) => {
            element.innerText = `${data.results[index].email}`
        })
        // console.log(data.results[0].email)
        textElement3.forEach((element, index) => {
            element.innerText = `${data.results[index].gender}`
        })

        console.log(data)
        textElement4.forEach((element, index) => {
            element.innerText = `${data.results[index].location.country}`
        })
        
        textElement5.forEach((element, index) => {
            element.innerText = `${data.results[index].nat}`
        })

        textElement6.forEach((element, index) => {
            element.innerText = `${new Date(data.results[index].dob.date)}`
        })
        
    
        
    })
    .catch(function(error) {
        console.log(error)
    })
}

// async function generateUser() {
//     const food = await fetch('https://randomuser.me/api/')

//     const food_is_ready = await food.json();
//     return food_is_ready;
// }

setInterval(generateUser, 3000)

generateUser();


