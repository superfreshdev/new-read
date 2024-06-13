console.log("[page] - update-header.js")


const imgCategoryHeader = document.getElementById("header-content-logo");
const spanCategoryHeader = document.getElementById("header-content-category-title");
const spanDescriptionCategoryHeader = document.getElementById("header-content-category-description")


// Step 0 - updateHeader 
const idArrayOfHeaderElements = [

    "header-content-logo",
    "header-content-category-title",
    "header-content-category-description"
]

const strArrayCategoryText = [

    "Bücher",
    "Sprache",
    "Intelligenz",
    "Musik",
    "Meine JS-Spiele",
    "Geige",
]

const strArrayDescriptionCategoryText = [

    "Bücher die ich gelesen habe",
    "Tutorials zum Sprache lernen",
    "Deine Intelligenz trainieren",
    "Aktuell von mir viel gehörte",
    "Meine programmierten JS-Spiele",
    "Geige lernen nach meinem Style"
]


function updateHeader( checkedIndex , strImgSrc ) {

    
    // header - img category 
    imgCategoryHeader.setAttribute("src", strImgSrc );
    
    // header - title category 
    spanCategoryHeader.innerText = strArrayCategoryText[ checkedIndex ];
    
    // header - description category 
    spanDescriptionCategoryHeader.innerText = strArrayDescriptionCategoryText[ checkedIndex ];

}
