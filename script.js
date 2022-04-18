// Unsplash Api
const count = 10;
const apiKey = 'F6WFIO5vkmz_0g21lQ8zcKsaFKhFifIO8yWFHXuU2ts';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;
let photosArray = [];
const imageContainer = document.getElementById('image-container');

// Helper function to set Attributes on DOM Element
// function setAttributes(element, attributes){
//     for(const key in attributes){
//         element.setAttribute(key, attributes[key]);
//     }
// }


//Create Elements for links & photos, Add to Dom

function displayPhotos(){
    photosArray.forEach((photo)=>{
    //   Create <a> to link to unsplash
     const item = document.createElement('a');
     item.setAttribute('href', photo.links.html);
     item.setAttribute('target', '_blank');
    //  setAttributes(item,{
    //   href: photo.links.html,
    //   target: '_blank'
    //  });
    //  Create img for photos
     const img = document.createElement('img');
     img.setAttribute('src', photo.urls.regular);
     img.setAttribute('alt', photo.alt_description);
     img.setAttribute('title', photo.alt_description);
    //  setAttributes(img,{
    //   src: photo.urls.regular,
    //   alt: photo.alt_description,
    //   title: photo.alt_description
    //  });

    //  put <img> inside <a>,then put both inside imageContainer
     item.appendChild(img);
     imageContainer.appendChild(item);
    });
   
}

// Get Photos From Unsplash Api
async function getPhotos(){
    try{
        const response = await fetch(apiUrl);
        photosArray = await response.json();
        console.log(photosArray)
        displayPhotos();
    }catch(error){
    //   Catch error here
    }
}
getPhotos();

function loading(){
     let = setTimeout(showPage, 2000);
}

function showPage(){
    document.getElementById('loader').style.display = 'none';
    document.getElementById('image-container').style.display = 'block';
}

window.addEventListener('load', ()=>{
    loading();
})