console.log('### book-overview-list.js')

// promise , if the element exist than add img click listener 


const imgBookOverviews = document.querySelectorAll('.img-book-overview-container > img');


var imgsFullsizeSet = [];

for( let i=0; i < imgBookOverviews.length; i++ ) {
    imgsFullsizeSet.push( false )
}

for( let i=0; i < imgBookOverviews.length; i++ )  {

    // Create Img Fullsize Sets 

    console.log("Marko")

    imgBookOverviews[i].addEventListener( 'click' , ()=> {


        if( imgsFullsizeSet[i] == false ) {

            // Open Img as Fullsize 
            imgBookOverviews[i].classList.remove( 'img-book-overview' )
            imgBookOverviews[i].setAttribute( 'class' , 'img-fullsize-book-overview')


            imgsFullsizeSet[i] = true;

        } else {

            // Close img from Fullsize
            imgBookOverviews[i].classList.remove( 'img-fullsize-book-overview' )
            imgBookOverviews[i].setAttribute( 'class' , 'img-book-overview')

            imgsFullsizeSet[i] = false
        }


    } )
}