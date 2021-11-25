//////////////////////////////////////////////////////////////////////
//============= SET PRELOADER FUNCTION ==============

// window.addEventListener("load", function(){
//     document.querySelector(".Pre_loder").style.display="none";
// })
setTimeout(function(){
    document.querySelector(".Main_website").style.opacity="1";
}, 1500)

setTimeout(function (){
    document.querySelector(".Pre_loder").style.opacity="0";
}, 2000)
setTimeout(function (){
    document.querySelector(".Pre_loder").style.display="none";
}, 3000)
//////////////////////////////////////////////////////////////////////////


// =====================================================
// --------------------STICKY NAV-----------------------
let Header = document.querySelector("Header");
let Ul = document.querySelector("ul");
window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 0) {
        Header.classList.add("Sticky");
        Ul.classList.add("Scrolled")

    } else {
        Header.classList.remove("Sticky");
        Ul.classList.remove("Scrolled");
    }
})
// =====================================================

// =====================================================
// ------------------SMOOTH SCROLL----------------------

// let scroll = new SmoothScroll('a[href*="#"]', {
//     speed: 500,
//     speedAsDuration: true
// });



// =====================================================
// ------------------ ACTIVE NAVE --------------------
// =====================================================

let List_items = document.querySelectorAll("li>a");

let Work_arya = document.querySelector("#Work").offsetTop - 300;
let Team_arya = document.querySelector("#Team").offsetTop - 300;
let Contact_arya = document.querySelector("#Contact").offsetTop - 300;
let Footer_area = document.querySelector("footer").offsetTop;


    window.addEventListener("scroll", function () {

        let Top = window.scrollY ;
    
        function Active_area(ST_area,EN_area,Active_li){
            if(Top >= ST_area & Top < EN_area){
                Active_li.classList.add("Active");
            }else{
                Active_li.classList.remove("Active");
            }
        }
    
        // CALLING "ACTIVE AREA" FUNCTIONS
        Active_area(Work_arya,Team_arya,List_items[0]);
        Active_area(Team_arya,Contact_arya,List_items[1]);
        Active_area(Contact_arya,Footer_area,List_items[2]);
    
    });



// =====================================================
// ------------------ MOBILE MENUE --------------------
// =====================================================
let Hambargar = document.querySelector(".Hambargar");
let Active_mobile_nave = false;
let Spans = document.querySelectorAll(".Hambargar span");

Hambargar.addEventListener("click", function () {
    if (!Active_mobile_nave) {
        Ul.classList.add("Active_mobile_nave");

        Spans[0].style.transform = "rotate(-45deg)";
        Spans[1].style.opacity = "0";
        Spans[2].style.transform = "rotate(45deg)";
        Active_mobile_nave = true;
    } else {
        Ul.classList.remove("Active_mobile_nave");

        Spans[0].style.transform = "rotate(0)";
        Spans[1].style.opacity = "1";
        Spans[2].style.transform = "rotate(0)";
        Active_mobile_nave = false;
    }

})


// =====================================================
// ------------------ SMOOTH SCROLL --------------------
// =====================================================

// Add smooth scrolling to all links
$("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function () {

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
    } // End if
});