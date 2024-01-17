$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
    // Attribuer un src à une image spécifique (première image de la galerie)
    $(".gallery-item:first-child .lightboxImage").attr("src", "../assets/images/gallery/concerts/aaron-paul-wnX-fXzB6Cw-unsplash-1090w.webp");
});
