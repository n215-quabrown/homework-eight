let homeContent = ``;
let aboutContent = ``;
let contactContent = ``;
let productsContent = ``;

function init() {
    loadPage("home");
    initListeners();
}

function initListeners() {
    $("nav a").click(function (e) {
        loadPage(e.currentTarget.id);
    });
}

function loadPage(id) {
    let contentID = id + "Content"
    $("#app").html(eval(contentID));
}