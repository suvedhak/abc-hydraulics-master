const preview1 = () => {
    $('#SW22-01-B-products-img-preview').src = "https://dummyimage.com/500x500/ddd/fff&text=Image";
    $('.SW22-01-B-products-img-thumbnail').removeClass("active-thumbnail");
    $('#SW22-01-B-products-img1').addClass("active-thumbnail");
}
const preview2 = () => {
    $('#SW22-01-B-products-img-preview').src = "https://dummyimage.com/500x500/ddd/fff&text=Image";
    $('.SW22-01-B-products-img-thumbnail').removeClass("active-thumbnail");
    $('#SW22-01-B-products-img2').addClass("active-thumbnail");
}
const preview3 = () => {
    $('#SW22-01-B-products-img-preview').src = "https://dummyimage.com/500x500/ddd/fff&text=Image";
    $('.SW22-01-B-products-img-thumbnail').removeClass("active-thumbnail");
    $('#SW22-01-B-products-img3').addClass("active-thumbnail");
}
const preview4 = () => {
    $('#SW22-01-B-products-img-preview').src = "https://dummyimage.com/500x500/ddd/fff&text=Image";
    $('.SW22-01-B-products-img-thumbnail').removeClass("active-thumbnail");
    $('#SW22-01-B-products-img4').addClass("active-thumbnail");
}

const requestQuote = () => {
    $('.SW22-01-B-RQ').css("display", "block");
    $("#SW22-01-B-RQ-form").trigger("reset");
}

const cancelButton = () => {
    $('.SW22-01-B-RQ').css("display", "none");
}
