console.log('### js-create-img-click-small-fullsize-layout.js')

// fullsize container 
var rootPageFullsizeContainer = document.getElementById('root-page-fullsize');
var linkCloseFullsizeMode = document.getElementById('link-close-img-fullsize-view');
var imgAddSrcFullsize = document.getElementById('img-fullsize');

// small img topic cover 
var arrImgTopicCover = document.getElementsByClassName('img-topic-cover-small')
// convert non array to array ( special js thing )
arrImgTopicCover = Array.from(arrImgTopicCover);

// console.log( "Array Test = " + Array.isArray(arrImgTopicCover) )
// console.log( "Array Lenght = " + arrImgTopicCover.length )

// arrImgTopicCover.forEach(element => {
    
//     console.log("P = " + element.getAttribute('src') );

// });




/*

    1. Position img -> absolute aber gefangen in einem vorher erstellten root - page layout container

*/

arrImgTopicCover.forEach(imgTopicCover => {
    
    imgTopicCover.addEventListener('click', ()=> {

        console.log("clicked > img > imgTopicCover") 

        rootPageFullsizeContainer.style.top = "0%"
        // rootPageFullsizeContainer.style.zIndex = "100";

        // set img src from clicked img
        imgAddSrcFullsize.setAttribute('src', imgTopicCover.getAttribute('src') );
    
    });

});


linkCloseFullsizeMode.addEventListener('click', ()=> {

    console.log("clicked > close > fullsize mode ")

    // rootPageFullsizeContainer.style.zIndex = "-1";
    // rootPageFullsizeContainer.style.opacity = "0";
    rootPageFullsizeContainer.style.top = "-200%"

})


