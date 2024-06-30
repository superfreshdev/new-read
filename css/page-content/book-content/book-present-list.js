console.log("### book-present-list.js ")

const imgBookPresentList = document.querySelectorAll(".img-header-list-item-book");

var imgClicked = [];

/* -------------------------------------------------------------------------- */ 
/* Create to All IMG Elements an Click Listener 
/* -------------------------------------------------------------------------- */ 

for( let i = 0; i < imgBookPresentList.length; i++ ) {

    imgClicked[i] = 0;

    imgBookPresentList[i].addEventListener( 'click', ()=> {

        console.log("img clicked , index = " + i)

        if(  imgClicked[i] == 0 ) {

            imgBookPresentList[i].setAttribute( 'class' , 'img-fullsize-header-list-item-book')

            imgClicked[i] = 1;

        } else {

            imgBookPresentList[i].setAttribute( 'class' , 'img-header-list-item-book')
            imgClicked[i] = 0;
        }

    })

}


/* -------------------------------------------------------------------------- */ 
/* Create to All Clicks 'anhören' slide content
/* -------------------------------------------------------------------------- */ 

/* Switch Content Book List & Book Playlist */
const bookList = document.getElementById('js-book-list-container')
const bookPlaylist = document.getElementById('js-book-playlist-container')

/* Switch Page Content Buttons */
const anCafe = document.getElementById('anCafe')
const zurueck = document.getElementById('zurueck');


anCafe.addEventListener( 'click' , ()=> {

    console.log('cafe anhören clicked ')


    bookList.style.transform = "translateX(-150%)";

    bookPlaylist.style.transform = "translateX(-100%)";

   
  

})

zurueck.addEventListener( 'click' , ()=> {

    console.log('zrueck anhören clicked ')


    bookList.style.transform = "translateX(0%)";

    bookPlaylist.style.transform = "translateX(10%)";


})


// slide-in-book-present-list-view-container
// slide-out-book-present-list-view-container 


// slide-out-book-play-list-view-container
// .slide-in-book-play-list-view-container