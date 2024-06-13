console.log("[page-book-content] - set-book-select-box")



/* ---------------------------------------------------- */
/* Add - Book Content Selctor ( custom select  )
/* ---------------------------------------------------- */


// Step 1 - Set Default Content 
const bookContentSelector  = document.getElementById("custom-select-box-book-content");
const bookContentList  = document.querySelectorAll(".book-category-content");

// Step 2 - Only Set Default by Book Radio Checked
// mainContentSelector

// if(  )
setSelectedDefaultContent( bookContentSelector , bookContentList , "show-book-content")


// Step 2 - change Content by Click ( add click listener , get checked radio index ... ) 
changeContentByClick( bookContentSelector , bookContentList , "show-book-content" )


