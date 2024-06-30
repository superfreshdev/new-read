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
    "Sprachen",
    "Intelligenz",
    "Musik",
    "Geige",
    "JS-Spiele",
    "Tech-Tutorials",
    "Software-Projekte"
]

const strArrayDescriptionCategoryText = [

    "die ich gelesen habe",
    "zum lernen",
    "trainieren & schärfen",
    "von mir viel gehörte",
    "lernen nach meinem Style",
    "von mir programmierte",
    "zur Informatik",
    "Web & Java & KI - Mathe"
]


function updateHeader( checkedIndex , strImgSrc ) {

    
    // header - img category 
    imgCategoryHeader.setAttribute("src", strImgSrc );
    
    // header - title category 
    spanCategoryHeader.innerText = strArrayCategoryText[ checkedIndex ];
    
    // header - description category 
    spanDescriptionCategoryHeader.innerText = strArrayDescriptionCategoryText[ checkedIndex ];

}
