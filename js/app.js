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
let aboutContent = `<div class="aboutUC">
<p class="left">Unprepared Casters is free to listen to, but is optionally crowdfunded by a Patreon, which
    has a pledge of $5,109 per month. The
    Patreon has five tiers: $2, $5, $10, $15, and $25 per month. Each tier provides all
    of the benefits of each lower tier in addition to its own benefits.</p>
<div class="logo"></div>
<p class="right">The podcast's model of short arcs very loosely strung together has allowed the world of the
    podcast to develop slowly and naturally. Every arc so far has taken place in the kingdom of Hyranor.
    Several of the arcs have taken place in a specific region of the kingdom known as the Upnorth, which
    contains only one city: Glecaria.</p>
</div>
<div class="aboutGus">
<div class="gusHeadshot"></div>
<p>Gus Rachels is one of the co-hosts of the show, and is the Dungeon Master for each even numbered arc. His
    general style for the arcs thus far has been to use Dungeons & Dragons as a medium for genre stories.
    Gus' largest additions to the world of Unprepared Casters have been the thriving city of Glaceria and
    the expansiveness of the Lovejoy family, a powerful and rich family that dominates the politics of the
    entire kingdom.</p>
</div>
<div class="aboutHaley">
<p>Haley Whipjack is one of the co-hosts of the show, and is the Dungeon Master for each odd numbered arc.
    Her style so far for the arcs has been to tell slight variations on classic D&D stories and adventures,
    contrasting with the bizzare genre stories of Gus' arcs. Haley's additions to the world of Unprepared
    Casters are generally smaller scale, but build the smaller lore of the everyday people in the kingdom.
    Examples of this would be the long-dead profession of sky piracy, and several towns within the world,
    including Tyle, the capital city.</p>
<div class="haleyHeadshot"></div>
</div>`;
let contactContent = `<div class="contactUC">
<div class="logo"></div>
<p>
    Patreon: <a target="blank" href="https://www.patreon.com/unpreparedcasters/membership">Unprepared
        Casters</a><br>
    Twitter: <a target="blank" href="https://twitter.com/UnprepCasters">@UnprepCasters</a><br>
    Instagram: <a target="blank"
        href="https://www.instagram.com/unpreparedcasters/">unpreparedcasters</a><br>
    YouTube: <a target="blank" href="https://www.youtube.com/c/UnpreparedCasters">Unprepared Casters</a><br>
    Twitch: <a target="blank" href="https://www.twitch.tv/unpreparedcasters">Unprepared Casters</a><br>
    Business Email: unpreparedcasters@gmail.com
</p>
</div>
<div class="contactGus">
<div class="gusHeadshot"></div>
<p>
    Twitter: <a target="blank" href="https://twitter.com/gusrachels">@gusrachels</a><br>
    Instagram: <a target="blank" href="https://www.instagram.com/GusRachels/">gusrachels</a><br>
    Twitch: <a target="blank" href="https://www.twitch.tv/gusrachels">Gus Rachels</a><br>
    TikTok: <a target="blank" href="https://www.tiktok.com/@gusthebard">@gusthebard</a>
</p>
</div>
<div class="contactHaley">
<div class="haleyHeadshot"></div>
<p>
    Twitter: <a target="blank" href="https://twitter.com/whippedjack">@whippedjack</a><br>
    YouTube: <a target="blank" href="https://www.youtube.com/channel/UCxJwug-gAYe9pE-YvNkodOg">Haley
        Whipjack</a><br>
    TikTok: <a target="blank" href="https://www.tiktok.com/@whipjack">@whipjack</a>
</p>
</div>`;
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