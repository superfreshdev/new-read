console.log("[Library] - custom-select.js")

/* ---------------------------------------------------------- */
/* Functions
/* ---------------------------------------------------------- */

function setSelectedDefaultContent( customSelectorId , contentListClass , cssUnshowContent , cssShowContent, optionalCssChangeIdElement ) {

    // Radio Options
    var radiosContent = customSelectorId.querySelectorAll(".options-container > .option > input");

    // all select options 
    var selectOptions = customSelectorId.querySelectorAll(".options-container > .option");

    // Select Options ( imgs , labels ) 
    var selectOptionImgs = customSelectorId.querySelectorAll(".options-container > .option > img");
    var selectOptionLabels = customSelectorId.querySelectorAll(".options-container > .option > label");

    // SelectedOption
    var imgSelectedOption = customSelectorId.querySelector(".selected-option > .selected-content > img");
    var divSelectedOption = customSelectorId.querySelector(".selected-option > .selected-content > div:nth-of-type(1)")
    
    /* ---------------------------------------------------- */
    /* set Default Content
    /* ---------------------------------------------------- */

    var radioCheckedIndex = getRadioCheckedIndex( radiosContent );

        /* ------------------------------------------------------------- */
        /* set radio Index 0 , if no checked
        /* ------------------------------------------------------------- */
        if( radioCheckedIndex == -1 ) { 

            console.log("[Warning] - U dont set an default content in your radio list. We sed index 0 for you.")
            radioCheckedIndex = 0;

            // set radio checked on index 0 
            radiosContent[ radioCheckedIndex ].checked = true;
        }
           
        /* ------------------------------------------------------------- */
        /* set content by radio index ( 0 or founded checked index )
        /* ------------------------------------------------------------- */
        if( radioCheckedIndex != null ) {

           
            // Set SelectedOption ( >> in function auslaggern , updateSelectedOption )
            imgSelectedOption.setAttribute("src", selectOptionImgs[ radioCheckedIndex ].getAttribute("src") )
            divSelectedOption.innerText = selectOptionLabels[ radioCheckedIndex ].innerText;

            // Show Content ( >> in function auslaggern, updateSelectContent )
            contentListClass[ radioCheckedIndex ].classList.remove(cssUnshowContent);
            contentListClass[ radioCheckedIndex ].classList.add(cssShowContent);

            /* --------------------------------------------------------- */
            /* Update | View Option Container ( dont show selected option )
            /* --------------------------------------------------------- */

            selectOptions[ radioCheckedIndex ].style.display = "none"; 

            /* --------------------------------------------------------- */
            /* Update | Header View ( optional )
            /* --------------------------------------------------------- */

            checkUpdateChangeIdElement( optionalCssChangeIdElement , radioCheckedIndex ,  customSelectorId )

        } 


}

function changeContentByClick( customSelectorId, contentListClass,  cssUnshowContent , cssShowContent, optionalCssChangeIdElement ) {

    // open selected option
    var selectedOption = customSelectorId.querySelector(".selected-option");
    var imgArrowSelectedOption = customSelectorId.querySelector(".selected-option > .img-selected-arrow");

    var imgSelectedOption = customSelectorId.querySelector(".selected-option > .selected-content > img")
    var divSelectedOption = customSelectorId.querySelector(".selected-option > .selected-content > div:nth-of-type(1)")

    var optionContainer = customSelectorId.querySelector(".options-container");

    // all select options 
    var selectOptions = customSelectorId.querySelectorAll(".options-container > .option");

    var selectRadios = customSelectorId.querySelectorAll(".options-container > .option > input");
    var selectImgs = customSelectorId.querySelectorAll(".options-container > .option > img");
    var selectLabels = customSelectorId.querySelectorAll(".options-container > .option > label");


    // saved checked content index 
    var savedContentIndex = getRadioCheckedIndex( selectRadios )


    /* ------------------------------------------------- */
    /* Open Select Options List 
    * ------------------------------------------------- */
    selectedOption.addEventListener( 'click' , () => {

        console.log("click - selected")
        
        // Toggle - Img Arrow to open 
        imgArrowSelectedOption.classList.toggle("img-selected-arrow-open");

        // Toggle - Options Container to show 
        optionContainer.classList.toggle("active");
        
    });


    /* ------------------------------------------------- */
    /* Add Click Listener 
    /* ------------------------------------------------- */
    for( let i=0; i < selectOptions.length; i++ ) {

        selectOptions[i].addEventListener( 'click', ()=> { 

            /* --------------------------------------------------------- */
            /* Update | radio checked Index 
            /* --------------------------------------------------------- */
            selectRadios[ i ].checked = true;

            /* --------------------------------------------------------- */
            /* Update | View Selected Option 
            /* --------------------------------------------------------- */
            imgSelectedOption.setAttribute("src", selectImgs[ i ].getAttribute("src") )
            divSelectedOption.innerText = selectLabels[ i ].innerText;

            
            /* --------------------------------------------------------- */
            /* Close | View Option Container 
            /* --------------------------------------------------------- */
            optionContainer.classList.remove("active");
            imgArrowSelectedOption.classList.remove("img-selected-arrow-open");


            /* --------------------------------------------------------- */
            /* Update | Header View ( optional )
            /* --------------------------------------------------------- */

            checkUpdateChangeIdElement(  optionalCssChangeIdElement , i ,  customSelectorId )

        
            /* --------------------------------------------------------- */
            /* Update | View Option Container ( dont show selected option )
            /* --------------------------------------------------------- */

            // Only if clicked option is another than the checked before 
            if( i != savedContentIndex ) {

                // Show old Option in options container 
                selectOptions[ savedContentIndex ].style.display = "flex";

                // Remove old Content    
                // e.g delete .show-selected-content     
                contentListClass[ savedContentIndex ].classList.remove( cssShowContent );
                // e.g add .main-content ( unshown mode )  
                contentListClass[ savedContentIndex ].classList.add( cssUnshowContent );

                // set new savedContentIndex 
                savedContentIndex = i;

                // Set new content
                // e.g delete .main-content   
                contentListClass[ savedContentIndex ].classList.remove( cssUnshowContent );
                // e.g replace to .show-selected-content ( show mode )   
                contentListClass[ savedContentIndex ].classList.add( cssShowContent );

                // unshown new Option in option container 
                selectOptions[ savedContentIndex ].style.display = "none";  

            }
           
        })

    }

}


// Function to decicde that u want to update an another css element 
// Only works if optionalCSSChangeIdElement is given
function checkUpdateChangeIdElement(  optionalCssChangeIdElement , changeIndex,  customSelectorId ) {

    if( optionalCssChangeIdElement != undefined || optionalCssChangeIdElement != null ) {

        switch( optionalCssChangeIdElement ) {

            case "header-content-container": 

                var selectOptionImgs = customSelectorId.querySelectorAll(".options-container > .option > img");
                updateHeader( changeIndex , selectOptionImgs[ changeIndex ].getAttribute("src") ) 

                break;


            default:
                console.log("[Warning] - Optional css id change Element cant found.")
        }

    }

}











































// // Step 1 | Set Default Page Content 


// function setDefaultContent( dSetIndex , cSelectBox , contentList , idCssShowContent ) {

   
//     /* ----------------------------------------------------------------------- */
//     /* Step 1 | Get Options of cSelectBox 
//     /* ----------------------------------------------------------------------- */

//     var radioPages = cSelectBox.querySelectorAll(".options-container > .option > input"); 
//     var imgOption = cSelectBox.querySelectorAll(".options-container > .option > img"); 
//     var labelOption = cSelectBox.querySelectorAll(".options-container > .option > label"); 
    
//     var selectedImg = cSelectBox.querySelector(".selected-content > img");
//     var selectedDiv = cSelectBox.querySelector(".selected-content > div:nth-of-type(1)");

//     /* ----------------------------------------------------------------------- */
//     /* Step 2 | Checking & Setting Default Page / Set Index 0 as default 
//     /* ----------------------------------------------------------------------- */  

//     // Check radio which is checked 
//     dSetIndex = getSelectedRadioIndex( radioPages )

//     // console.log("New Index = " +  dSetIndex )   

//     /* ------------------------------------------- */
//     /* Set Default Page or Set Default Index 0
//     /* ------------------------------------------- */
   
//     if( dSetIndex != null ) {

//         // set selected option
//         selectedImg.setAttribute( "src" , imgOption[ dSetIndex ].getAttribute("src") );
//         selectedDiv.innerText = labelOption[ dSetIndex ].innerText;

//         // set default content page
//         contentList[ dSetIndex ].setAttribute("id", idCssShowContent );



//         return dSetIndex;

//     } else {

//         // [info] - no default page content setted, it use index 0

//         // set selected option
//         selectedImg.setAttribute( "src" , imgOption[ 0 ].getAttribute("src") );
//         selectedDiv.innerText = labelOption[ 0 ].innerText;

//         // set default content page
//         contentList[ 0 ].setAttribute("id", idCssShowContent );

//         console.log("[Warning] - U dont set an default content view, we setted for u index 0")


//         return 0;

//     }
// }



// // Step 2 | Add Click Listener on Select 

// function addClickListenerOnSelectedItems(  dSetIndex ,  mainSelectBox , contentList , idCssShowContent ) {

//     /* ----------------------------------------------------- */
//     /* Click & Open - Option Container 
//     /* ----------------------------------------------------- */

//     var radioPages = mainSelectBox.querySelectorAll(".options-container > .option > input"); 

//     var selectedOption =  mainSelectBox.querySelector(".selected-option");
//     var selectedImgArrow = mainSelectBox.querySelector("img.img-selected-arrow");
//     var optionContainer =  mainSelectBox.querySelector(".options-container")

//     selectedOption.addEventListener( 'click' , () => {

//         console.log("click")

//         // Toggle - Img Arrow to open 
//         selectedImgArrow.classList.toggle("img-selected-arrow-open");

//         // Toggle - Options Container to show 
//         optionContainer.classList.toggle("active");

//     });

//     /* ----------------------------------------------------- */
//     /* Add clickListener's on Select Option's
//     /* ----------------------------------------------------- */

//     var selectOptions = mainSelectBox.querySelectorAll(".options-container > .option");

//     var imgOptions = mainSelectBox.querySelectorAll(".options-container > .option > img");
//     var labeOptions = mainSelectBox.querySelectorAll(".options-container > .option > label");


//     for( let i=0; i < selectOptions.length; i++ ) {

//         selectOptions[i].addEventListener( 'click', ()=> { 

//             // Warning - Click Bubbling ( to do )
//             console.log("Hakuna - Matata")

//             // Change radio 
//             radioPages[ i ].checked = true;

//             /* ----------------------------------------------------------------- */
//             /* Update , Selected Option 
//             /* ----------------------------------------------------------------- */

//             selectedOption.querySelector(".selected-content > img").setAttribute( "src" , imgOptions[ i].getAttribute("src") );
//             selectedOption.querySelector(".selected-content > div:nth-of-type(1)").innerText = labeOptions[ i ].innerText;

//             /* ----------------------------------------------------------------- */
//             /* Close , Options Container 
//             /* ----------------------------------------------------------------- */

//             optionContainer.classList.remove("active");
//             selectedImgArrow.classList.remove("img-selected-arrow-open");


            
//             /* ----------------------------------------------------------------- */
//             // Unshown , Selected Option in Options Container 
//             /* ----------------------------------------------------------------- */

//             if( i != dSetIndex  ) {

//                 console.log( "i=" + i + " || " + " dSetIndex= " + dSetIndex )

//                 return i;
        

//                 // show old select option
//                 // optionsList[dSetIndex ].style.display = "flex";
//                 // unshown old select content
//                 // contentList[dSetIndex ].removeAttribute("id");

//                 // unshown new select option 
//                 // optionsList[i].style.display = "none";
//                 // dSetIndex  = i;
//                 // set new selected content 
//                 // contentList[dSetIndex ].setAttribute("id", idCssShowContent );

                
//             }


//         });

//     }



// }



















































//     /* ----------------------------------------------------- */
//     /* Registration Click Handling on every Select Option
//     /* ----------------------------------------------------- */

//     var optionItems =  mainSelectBox.querySelector(".options-container > .option");

//     var imgOption = optionItems.querySelectorAll(".options-container > .option > img"); 
//     var labelOption = optionItems.querySelectorAll(".options-container > .option > label"); 

//     for( let i=0; i < optionItems.length; i++ ) {

//         optionItems[i].addEventListener( 'click', ()=> { 
            
            
//             console.log("Hakuna - Matata")

//             /* ----------------------------------------------------------------- */
//             /* Update , Selected Option 
//             /* ----------------------------------------------------------------- */

//             mainSelectBox.querySelector(".selected-content > img").setAttribute( "src" , imgOption[ i].getAttribute("src") );
//             mainSelectBox.querySelector(".selected-content > div:nth-of-type(1)").innerText = labelOption[ i ].innerText;

//             /* ----------------------------------------------------------------- */
//             /* Close , Options Container 
//             /* ----------------------------------------------------------------- */

//             // optionContainer.classList.remove("active");
//             // selectedImgArrow.classList.remove("img-selected-arrow-open");

//             /* ----------------------------------------------------------------- */
//             // Unshown , Selected Option in Options Container 
//             /* ----------------------------------------------------------------- */

//             // if( i != saveSelectedOption ) {

//             //     // show old select option
//             //     optionsList[saveSelectedOption].style.display = "flex";
//             //     // unshown old select content
//             //     contentList[saveSelectedOption].removeAttribute("id");

//             //     // unshown new select option 
//             //     optionsList[i].style.display = "none";
//             //     saveSelectedOption = i;
//             //     // set new selected content 
//             //     contentList[saveSelectedOption].setAttribute("id", idCssShowContent );

                
//             // }
    
//         } )
//     }


// }


