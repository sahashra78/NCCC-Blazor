// For the Navigation bar
window.onload = function () {
    const navSlide = () => {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav_links');
        const navLinks = document.querySelectorAll('.nav_links li');
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
        $('.nav-links li').click(function () {
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
        });

    };
    navSlide();

};
var dropdown = document.getElementsByClassName("drop_button");
var dropicon = document.getElementsByClassName("drop_icon");
var i;

for (i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            // dropicon.classList.toggle("active");
        } else {
            dropdownContent.style.display = "block";
            // dropicon.classList.toggle("active");
        }
    });
}

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

// For Parsing CSV to JSON using Papa Parse

Papa.parse(File , {
    download: true,
    header: false,
    complete: function (results) {
        console.log(results);
    }
})
