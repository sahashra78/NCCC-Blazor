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

function MembershipFormListener() {

    $(document).ready(function () {
        checkFields();
        function checkFields() {
            if ($('#fullname').val().length > 0 && $('#email').val().length > 0 && validateEmail($('#email').val()) && $('#phone').val().length > 0) {
                enableSubmit()
            }
            else {
                disableSubmit();
            }
        }
        $('#fullname').on('change', function () {
            checkFields();
        });
        $('#email').on('change', function () {
            checkFields();
        });
        $('#phone').on('change', function () {
            checkFields();
        });
        function enableSubmit() {
            $('#submitBtn').prop('disabled', false).addClass('enabled paypal_button').removeClass('disabled');
            $('#generalSubmitMembership').prop('disabled', false).addClass('enabled paypal_button').removeClass('disabled');
            $('#playerSubmitMembership').prop('disabled', false).addClass('enabled paypal_button').removeClass('disabled');
        }
        function disableSubmit() {
            $('#submitBtn').prop('disabled', true).addClass('disabled').removeClass('enabled paypal_button');
            $('#generalSubmitMembership').prop('disabled', true).addClass('disabled').removeClass('enabled paypal_button');
            $('#playerSubmitMembership').prop('disabled', true).addClass('disabled').removeClass('enabled paypal_button');
        }
        $('#paid').on('change', function () {
            if ($(this).is(':checked')) {
                $('#paymentMethod').prop('disabled', false);
                $('#paymentMethod').val('');
                $('#paymentMethod').addClass('enabled').removeClass('disabled');
                $('#paymentMethod').css('opacity', 1);
                $('#paymentMethodLabel').css('opacity', 1);
                $('#paymentMethodLabel').addClass('enabled').removeClass('disabled');
                defaultSubmit();
            }
            else {
                $('#paymentMethod').prop('disabled', true);
                $('#paymentMethod').val('Pay Pal');
                $('#paymentMethod').addClass('disabled').removeClass('enabled');
                $('#paymentMethod').css('opacity', 0);
                $('#paymentMethodLabel').css('opacity', 0);
                $('#paymentMethodLabel').addClass('disabled').removeClass('enabled');
                checkMembership();
            }
        });
        $('#membershipType').on('change', function () {
            checkMembership();
        });
        function checkMembership() {
            let membershipType = $('#membershipType').find(":selected").val();

            if (membershipType == "general" && $('#paid').is(':not(:checked)')) {
                generalSubmit();
            }
            else if (membershipType == "player" && $('#paid').is(':not(:checked)')) {
                playerSubmit();
            }
            else {
                defaultSubmit();
            }
        }
        // function for showing the specific button.
        function defaultSubmit() {
            $('#playerMembership').css('display', 'none');
            $('#generalMembership').css('display', 'none');
            $('#submitBtn').css('display', 'block');
        }
        function playerSubmit() {
            $('#submitBtn').css('display', 'none');
            $('#generalMembership').css('display', 'none');
            $('#playerMembership').css('display', 'block');
        }
        function generalSubmit() {
            $('#submitBtn').css('display', 'none');
            $('#playerMembership').css('display', 'none');
            $('#generalMembership').css('display', 'block');
        }
        function clearFields() {
            $('#fullname').val(null);
            $('#email').val(null);
            $('#phone').val(null);
            $('#membershipType').val("player");
            $('#message').val(null);
            $('#address').val(null);
            $('#paid').prop('checked', false);
            $('#paymentMethod').prop('disabled', true);
            $('#paymentMethod').val('');
            $('#paymentMethod').addClass('disabled').removeClass('enabled');
            $('#paymentMethodLabel').addClass('disabled').removeClass('enabled');
            defaultSubmit();
            setTimeout(disableSubmit, 500);
        }
        function validateEmail($email) {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailReg.test($email);
        }

        ////string Name, string Email, string Phone, string Address, string Message
        //function sendEmail(e) {
        //    $.ajax({
        //        url: '/Home/EmailandSaveRecords',
        //        type: 'POST',
        //        data: { Name: $('#fullname').val(), Email: $('#email').val(), Phone: $('#phone').val(), Address: $('#address').val(), Message: $('#message').val(), MembershipType: $('#membershipType').val() },
        //        success: function (data) { },
        //        error: function (xhr) { }
        //    });
        //    alert('ter');
        //}
        $('#submitBtn').click(function (e) {
            clearFields();
        });
        $('#playerSubmitMembership').click(function (e) {
            clearFields();
        });
        $('#generalSubmitMembership').click(function (e) {
            clearFields();
        });
    });
}
function contactPopUpListener() {
    //$('.profile_container').on('click', function () {
    //    let id = $(this).children("div").attr("id");
    //    $($('div #'+id).css('display', 'block'));
    //});


    //$('.close').on('click', function () {
    //    $($('.popUp').css('display', 'none'));
    //});
}