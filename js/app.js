let homeContent = `<div class="banner"></div>
<div class="homeContent">
    <h1>A new type of D&D Actual-Play Podcast</h1>
    <p>Unprepared Casters is a longform podcast made of short form arcs. Many Dungeons & Dragons gameplay
        podcasts (often refered to as "actual play" shows) are extremely long campaigns that follow the same set
        of player characters for hundreds of episodes. Gus Rachels and Haley Whipjack decided that they wanted a
        new style of show for a D&D podcast, and created the arc model for Unprepared Casters. The show is built
        out of short arcs consisting of approximately six epsiodes each, with a new cast of guest players for
        each new arc. The two takes turns as the Dungeon Master from arc to arc, leading to a new and exciting
        style of podcast that does not require any binge listening. There are currently seven arc of the show,
        with the most recent being a departure from the "never need to listen to past content" model as a sequel
        arc of the first.
    </p>
</div>
<div class="arcs">
    <div class="arcHero" id="arcOne"></div>
    <div class="arcHero" id="arcTwo"></div>
    <div class="arcHero" id="arcThree"></div>
    <div class="arcHero" id="arcFour"></div>
    <div class="arcHero" id="arcFive"></div>
    <div class="arcHero" id="arcSix"></div>
    <div class="arcHero" id="arcSeven"></div>
</div>`;
let aboutContent = ``;
let contactContent = ``;
let episodesContent = ``;

function init() {
    // loadPage("home");
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