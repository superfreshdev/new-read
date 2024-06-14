console.log("### set-main-select-box.js ###")


/* ---------------------------------------------------- */
/* Add - Main Content Selctor ( custom select  )
/* ---------------------------------------------------- */


// Step 1 - Set Default Content 
const mainContentSelector  = document.getElementById("custom-select-box-main-content");
const mainContentList  = document.querySelectorAll(".main-content");

setSelectedDefaultContent( mainContentSelector , mainContentList , "main-content" , "show-selected-content" ,  "header-content-container")


// Step 2 - change Content by Click ( add click listener , get checked radio index ... ) 
changeContentByClick( mainContentSelector , mainContentList , "main-content" , "show-selected-content" , "header-content-container" )


