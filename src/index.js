// const container = document.querySelector('#dog-image-container');

// const getData = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json(); 
//     return data;
// }

// const createHtml = (item) => {
//     return `<img src="${item}" width="200" alt="dog" />`;
// }

// document.addEventListener('DOMContentLoaded', async () => {
//     const serverResponse = await getData('https://dog.ceo/api/breeds/image/random/4');
//     const useableData = serverResponse.message; 

//     useableData.forEach((item) => {
//         container.innerHTML += createHtml(item);
//     })

// });


const container = document.querySelector('#dog-breeds');

const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json(); 
    return data;
}

const createHtml = (item) => {
    return `<li id="${item}" >${item}</li>`;
}

document.addEventListener('DOMContentLoaded', async () => {
    const serverResponse = await getData('https://dog.ceo/api/breeds/list/all');
    for(const item in serverResponse.message) {
        container.innerHTML += createHtml(item);
        const itemInHtml = document.getElementById(item);
        itemInHtml.onClick = (() => {
            console.log(event);
        })
    }
    createHtml(serverResponse.message[0]);

});


// on page load 
    // fetch the URL 
    // parse the data 


// display the image in HTML

