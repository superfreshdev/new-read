/*
    main-content-navigation.js 
*/

console.log("### main-content-navigation.js ###")


/* ---------------------------------------------------------- */
/* Dom Elements 
/* ---------------------------------------------------------- */

const selected = document.getElementById("selected-main-content");
const optionsContainer = document.querySelector(".options-container");
const optionsList = document.querySelectorAll(".option");

const contentRadios = document.querySelectorAll("input[name='category']");
const contentList = document.querySelectorAll(".main-content");

/* ---------------------------------------------------------- */
/* Execution ( Action Part )
/* ---------------------------------------------------------- */

var saveSelectedOption = 0;


// Step 1 | Set Default | Selected Content 
setDefaultContent( contentRadios , selected , optionsList , contentList )

// Step 2 | Add Click Listener on Select 
addClickSelectListenerOn( selected , optionsContainer , optionsList , contentList )

/* ---------------------------------------------------------- */
/* Functions
/* ---------------------------------------------------------- */

// Step 1 | Set Default Content 
function setDefaultContent( radios , selected , optionsList , contentList ) {


    var setIndexContent = getSelectedRadioIndex(radios);

    if( setIndexContent != null ) { 
    
        selected.querySelector(".selected-content > img").setAttribute("src" ,optionsList[ setIndexContent ].querySelector("img").getAttribute("src") )
        selected.querySelector(".selected-content > div:nth-of-type(1)").innerHTML = optionsList[ setIndexContent ].querySelector("label").innerHTML

        saveSelectedOption = setIndexContent;

        // set default content 
        contentList[saveSelectedOption].setAttribute("id", "show-content");


    } else {

        selected.querySelector(".selected-content > img").setAttribute("src" , "media/img/emoji-books.png")
        selected.querySelector(".selected-content > div:nth-of-type(1)").innerHTML = optionsList[ 0 ].querySelector("label").innerHTML;

        console.log("[Warning] - U dont set an default content view, we setted for u index 0")
        saveSelectedOption = 0;

    }

    // default unshown selected option
    optionsList[saveSelectedOption].style.display = "none";

}

// Step 2 | Add Click Listener on Select 
function addClickSelectListenerOn( selected , optionsContainer , optionsList , contentList ) {

    // open-close options for selections
    selected.addEventListener( 'click' , () => {
        optionsContainer.classList.toggle("active");
        // console.log("Penis = " + selected.querySelector("img.img-selected-arrow").toggle("aaa") )
        selected.querySelector("img.img-selected-arrow").classList.toggle("img-selected-arrow-open");
        
    });

    for( let i=0; i < optionsList.length; i++ ) {

        optionsList[i].addEventListener( 'click', ()=> {
    
            console.log("Index => " + i)

            selected.querySelector(".selected-content > img").setAttribute("src" , optionsList[ i ].querySelector("img").getAttribute("src") )
            selected.querySelector(".selected-content > div:nth-of-type(1)").innerHTML = optionsList[ i ].querySelector("label").innerHTML
            
            optionsContainer.classList.remove("active");
            selected.querySelector("img.img-selected-arrow").classList.remove("img-selected-arrow-open");


            // unset if index is not saveSelecedOption
            if( i != saveSelectedOption ) {

                // show old select option
                optionsList[saveSelectedOption].style.display = "flex";
                // unshown old select content
                contentList[saveSelectedOption].removeAttribute("id");

                // unshown new select option 
                optionsList[i].style.display = "none";
                saveSelectedOption = i;
                // set new selected content 
                contentList[saveSelectedOption].setAttribute("id", "show-content");

                
            }
    
        } )
    }


}







/* ---------------------------------------------------------- */
/* [Help] - Functions
/* ---------------------------------------------------------- */

function getSelectedRadioIndex( radios ) {

    var settedIndexContent = null;

    for( let i=0; i < radios.length; i++ ) {

        if( radios[i].checked ) {

            // console.log("Index checked = " + i)
            settedIndexContent = i;
            
        }
    }

    if( settedIndexContent == null ) {

        // console.log("[Warning] - U shouldnt set a standard viewing content ")
        // console.log("[settedIndexContent] = " + settedIndexContent )

        return null;
    }


    return settedIndexContent;

}