// For the Navigation bar
function NavigationMenuListner() {

    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav_links');
        const navLinks = document.querySelectorAll('.nav_links li');
        const navLink = document.querySelectorAll('.nav_links li a');
        const page = document.querySelector('#navbar-collapser');

        burger.addEventListener('click', () => {
            // Toggle Nav
            nav.classList.toggle('nav-active');
            // Add Class
            nav.classList.add('nav-back-color');
            // Animate Links
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    setTimeout(function () {
                        link.style.animation = '';
                        nav.classList.remove('nav-back-color');
                    }, 300);

                }
                else {
                    link.style.animation = `navLinkFade 0.3s ease forwards ${index / 10 + .3}s`;
                }
            });
            // Burger Animation
            burger.classList.toggle('toggle');
        });
        $(navLink).click(function () {
            // Toggle Nav
            nav.classList.remove('nav-active');
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    setTimeout(function () {
                        link.style.animation = '';
                        nav.classList.remove('nav-back-color');
                    }, 300);
                }
            });
            burger.classList.remove('toggle');
            CloseDropDown();
        });
        $(page).click(function () {
            // Toggle Nav
            nav.classList.remove('nav-active');

            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    setTimeout(function () {
                        link.style.animation = '';
                        nav.classList.remove('nav-back-color');
                    }, 300);

                }
            });
            burger.classList.remove('toggle');
            CloseDropDown();
        });

    };
    navSlide();

    function CloseDropDown() {
        var dropdown = document.getElementsByClassName("drop_button");
        for (i = 0; i < dropdown.length; i++) {
            var dropdownContent = dropdown[i].nextElementSibling;
            var dropicon = dropdown[i].firstElementChild;
            if (dropdownContent.classList.contains('fade')) {
                //dropdownContent.style.display = "none";
                dropdownContent.classList.remove('fade');
                dropdownContent.classList.add('fade_reverse');


                $(dropicon).animate(
                    { deg: 0 },
                    {
                        duration: 200,
                        step: function (now) {
                            $(this).css({ transform: 'rotate(' + now + 'deg)' });
                        }
                    }
                );
            }
        }
    }

    var dropdown = document.getElementsByClassName("drop_button");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            var dropdownContent = this.nextElementSibling;
            var dropicon = this.firstElementChild;
            if (dropdownContent.classList.contains('fade')) {
                CloseDropDown();
            }
            else if (dropdownContent.classList.contains('fade_reverse')) {
                CloseDropDown();
                dropdownContent.classList.remove('fade_reverse');
                dropdownContent.classList.add('fade');
                $(dropicon).animate(
                    { deg: 180 },
                    {
                        duration: 200,
                        step: function (now) {
                            $(this).css({ transform: 'rotate(' + now + 'deg)' });
                        }
                    }
                );
            }
            else {
                CloseDropDown();
                dropdownContent.classList.add('fade');
                $(dropicon).animate(
                    { deg: 180 },
                    {
                        duration: 200,
                        step: function (now) {
                            $(this).css({ transform: 'rotate(' + now + 'deg)' });
                        }
                    }
                );
            }
        });
    }
}

function sliderListner() {
    // For horizontal scroll with buttons

    var scrollDistance = 40;
    var x = window.matchMedia("(max-width: 650px)");
    var y = window.matchMedia("(max-width: 400px)");
    if (x.matches) { // If media query matches
        scrollDistance = 30;
    }
    if (y.matches) { // If media query matches
        scrollDistance = 25;
    }
    var back = document.getElementById('slider_control_left');
    back.onclick = function () {
        var container = document.getElementById('image_container');
        scrollAmount = 0;
        var slideTimer = setInterval(function () {
            container.scrollLeft -= scrollDistance;
            scrollAmount += 10;
            if (scrollAmount >= 100) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    };
    var back = document.getElementById('slider_control_right');
    back.onclick = function () {
        var container = document.getElementById('image_container');
        scrollAmount = 0;
        var slideTimer = setInterval(function () {
            container.scrollLeft += scrollDistance;
            scrollAmount += 10;
            if (scrollAmount >= 100) {
                window.clearInterval(slideTimer);
            }
        }, 25);
    };
}

// For Parsing CSV to JSON using Papa Parse
//function PapaParseListener() {
//    let btn_upload = document.getElementById('button_upload_csv').addEventListener('click', () => {
//        Papa.parse(document.getElementById('upload_csv').files[0], {
//            download: true,
//            header: false,
//            complete: function (results) {
//                console.log(results);
//            }
//        });
//    });
//}

// For Anchor Navigation
function BlazorScrollToId(id) {
    const element = document.getElementById(id);
    if (element instanceof HTMLElement) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest"
        });
    }
}