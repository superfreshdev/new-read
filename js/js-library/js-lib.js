console.log("[Library] - js-lib")


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




// const imgCafe = document.getElementById("imgCafe");

// // console.log( " cafe = " + imgCafe.getAttribute("src") )

// imgCafe.addEventListener( "click" , ()=> {

//     // console.log("click");
//     imgCafe.classList.toggle("img-header-book-fullsize");


// })



// const btnMehr = document.getElementById("mehr-hoer");
// const moreContainer = document.getElementById("all-books-container");


/* ---------------------------------------------------------- */
/* [Help] - Functions
/* ---------------------------------------------------------- */

// Set Radio Index Checked

// Check - Array Length 
function checkHasArrayLength( elements ) {

    if( elements.length != null || elements.length != undefined ) {

        return true;

    } else {

        return false;
    }
}

// Get - Radio Checked Index 
function getRadioCheckedIndex ( radios ) {

    if( checkHasArrayLength( radios ) ) {
    
        for( let i=0; i < radios.length; i++ ) {

            if( radios[i].checked ) {

                // console.log( "output=" + radios[i] )
                return i;
            }
        }

        return -1;
    
    } else {

        console.log("[Error] - Radios had no length, no Radio Array found.")
        return null;
    }

   
    

}






























// function getSelectedRadioIndex( radios ) {

//     var settedIndexContent = null;

//     for( let i=0; i < radios.length; i++ ) {

//         if( radios[i].checked ) {

//             // console.log("Index checked = " + i)
//             settedIndexContent = i;
            
//         }
//     }

//     if( settedIndexContent == null ) {

//         // console.log("[Warning] - U shouldnt set a standard viewing content ")
//         // console.log("[settedIndexContent] = " + settedIndexContent )

//         return null;
//     }

//     return settedIndexContent;

// }