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


const inputCafe = document.getElementById('radio-book-overview-item-cardw');

const page1 = document.getElementById('page-01a')
const page2 = document.getElementById('page-02b')

//   page1.style.transform='translateX(-100%)'

//   page1.style.display = 'none'

inputCafe.addEventListener( 'click' , ()=> {

    console.log("Cafe Label")

    page1.style.transform='translateX(-150%)'

    page2.style.transform='translateX(-100%)'

  
    headerUpdateViewByChapter( headerTitleContainer , 'media/img/icons/two-arrows-light-grey.png')
  
} )

const lblNavHeader = document.getElementById('nav-header-container')

const headerContainer = document.getElementById('header-container')

function headerUpdateViewByChapter( idHeaderContainer , imgSrcBackHeader , lblNavheader ) {

    var backHeader = idHeaderContainer.querySelector('#left-img-header-container');
    var imgBack = backHeader.querySelector('img:nth-of-type(1)');

    var imgCategroySrcBefore =  imgBack.getAttribute( 'src' )

    backHeader.setAttribute( 'class' , 'backHeaderContainer' )

    imgBack.setAttribute( 'src' , imgSrcBackHeader )
    imgBack.setAttribute( 'id' , 'img-back-header' )


    // unshown hamburger icon & set category on this place
    lblNavHeader.style.display = 'none';

    // add img for hamburger place 
    var imgCategory = document.createElement('img');
    imgCategory.setAttribute( 'id' , 'img-left-header')
    imgCategory.setAttribute( 'src', imgCategroySrcBefore )

    headerContainer.append( imgCategory )

   

   

    
    

    backHeader.addEventListener( 'click' , ()=> {

        console.log('click backHeader');

        page1.style.transform='translateX(0%)'
        page2.style.transform='translateX(20%)'

        backHeader.classList.remove('backHeaderContainer');

        imgBack.setAttribute( 'src' , imgCategroySrcBefore )
        imgBack.setAttribute( 'id' , 'img-left-header' )


        headerContainer.removeChild( imgCategory )

        lblNavHeader.style.display = 'grid';


    })




}