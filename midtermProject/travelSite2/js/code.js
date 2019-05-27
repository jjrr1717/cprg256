window.onload = initPhotos

//i is for the index of the arrays
var i = 0;

//photos is an array of photos 
var photos =
[
    "images/14.png",
    "images/cr/COLOURBOX21458237.jpg",
    "images/13.png",
    "images/15.png",
    "images/cr/COLOURBOX24026236.jpg",
    "images/cr/COLOURBOX35994282.jpg", 
    "images/10.jpg",
    "images/12.jpg"
];

//captions is a parellel array of captions for the photos
var captions = 
[

    "Enjoy the Beach!", 
    "See the Mountains!", 
    "Travel the World!", 
    "Put on Your Sunglasses!", 
    "Go Hiking!",
    "Visit the Wilderness!",
    "Head over to the Mediterranean!",
    "Enjoy the Sunshine!"

];

//when website opens start the switchPhotos function
function initPhotos()
{
    switchPhotos();

}

//switchPhotos is used to display different photos 
function switchPhotos()
{
    //used setTimeout to filter through the photos and captions arrays
    setTimeout(function(){
    //display photo
    document.getElementById("myPhotos").src = photos[i];
    //display caption
    document.getElementById("captionForImages").innerHTML = captions[i];
    }, 3000);
    //increase index by one to access another element in both arrays
    i++

    //once arrays reaches the end start them over from index 0
    if(i == photos.length)
    {
       i = 0;
    }
 
   //run the whole function again in order to change the index to go to the next photo
   setTimeout(switchPhotos, 3000);
    
}

