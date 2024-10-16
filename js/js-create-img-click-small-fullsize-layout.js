console.log('### js-create-img-click-small-fullsize-layout.js')

var imgTopicInfoCard = document.getElementById('img-cafe-am-rande-der-welt');

var imgAddSrcFullsize = document.getElementById('img-fullsize');

var linkCloseFullsizeMode = document.getElementById('close-img-fullsize-mode');

var rootPageFullsizeContainer = document.getElementById('root-page-fullsize');


/*

    1. Position img -> absolute aber gefangen in einem vorher erstellten root - page layout container

*/


imgTopicInfoCard.addEventListener('click', ()=> {

    console.log("clicked > img > cafe am rande der Welt")

    rootPageFullsizeContainer.style.display = "grid";

    // console.log("D" + imgTopicInfoCard.getAnimations('src') )

    imgAddSrcFullsize.setAttribute('src', imgTopicInfoCard.getAttribute('src') );
})




linkCloseFullsizeMode.addEventListener('click', ()=> {

    console.log("clicked > close > fullsize mode ")

    rootPageFullsizeContainer.style.display = "none";
})