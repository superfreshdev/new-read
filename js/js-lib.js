console.log("### js-lib ### ")


// const radioSelectMainContent = [

//     "radio-books",
//     "radio-language"

// ]

// const ulMainSelectContent = document.querySelector("#js-nav-select-main-content > label:nth-of-type(1)");

// ulMainSelectContent.style.display = "none";

// ulMainSelectContent.addEventListener("click" , ()=> {

//     console.log("Bücher")
   

//     const language = document.querySelector("#js-nav-select-main-content > label:nth-of-type(2)");

//     // console.log( " => " + language.style.position )
//     console.log( "vorher = " + language.style.position )
//     console.log( language )
    
//     // if( language.style.position === "absolute" ) {

//     //     console.log("relative")
//     //     language.style.position = "relative";
        
//     // } else {

//     //     console.log("absolute")
//     //     language.style.position = "absolute";

//     // }
       
  
//     // console.log( language )

  
   
    
// })




const imgCafe = document.getElementById("imgCafe");

console.log( " cafe = " + imgCafe.getAttribute("src") )

imgCafe.addEventListener( "click" , ()=> {

    console.log("click");
    imgCafe.classList.toggle("img-header-book-fullsize");


})



const btnMehr = document.getElementById("mehr-hoer");
const moreContainer = document.getElementById("all-books-container");