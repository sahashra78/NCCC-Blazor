function changeGalleryYear(year) {
    var tabs = document.querySelectorAll('.tabs');
    var imageGallery = document.querySelectorAll('.image_gallery');
    for (var i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active_tabs");
        imageGallery[i].classList.remove("active_image_gallery");
    }
    document.getElementById('year'+year).classList.add("active_tabs");
    document.getElementById(year).classList.add("active_image_gallery");
}

