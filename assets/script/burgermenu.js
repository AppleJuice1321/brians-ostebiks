(function() {

    // create references
    const BUTTON = document.querySelector(".burgerMenuButton");
    const PRIMARY_NAVIGATION = document.querySelector(".primaryNavigation");

    // click event
    BUTTON.addEventListener("click", clickHandler)

    // adds or removes class of PRIMARY_NAVIGATION
    function clickHandler() {
        PRIMARY_NAVIGATION.classList.toggle("primaryNavigation--show");
        // changes attribute for screenreader between true = false and false = true
        if (PRIMARY_NAVIGATION.ariaHidden == "false") {
            PRIMARY_NAVIGATION.setAttribute("aria-hidden", true)
        } else {
            PRIMARY_NAVIGATION.setAttribute("aria-hidden", false)
        }
        
    }
})()