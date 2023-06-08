//PORTFOLIO RESIZE
const embedEl = document.getElementById("embed-el");
const calculatedHeight = embedEl.clientWidth / 1.777777777777778;
embedEl.height = calculatedHeight;
//RESIZE LISTENER
addEventListener("resize", function() {
    const newEmbed = document.getElementById("embed-el");
    const calculatedHeight = newEmbed.clientWidth / 1.777777777777778;
    newEmbed.height = calculatedHeight;
})

//TRAILER BUTTONS
const button1 = document.getElementById("portfolio-1");
const button2 = document.getElementById("portfolio-2");
const button3 = document.getElementById("portfolio-3");
const button4 = document.getElementById("portfolio-4");
const button5 = document.getElementById("portfolio-5");
const button6 = document.getElementById("portfolio-6");
const button7 = document.getElementById("portfolio-7");
const button8 = document.getElementById("portfolio-8");
const button9 = document.getElementById("portfolio-9");

const closeButton = document.querySelector(".button-close");
const popUpTrailer = document.querySelector(".portfolio-container");
const overlay = document.getElementById("overlay");

const portfolioVid = document.querySelector(".portfolio");
let urlString = ``;

button1.addEventListener("click", function() {
    embedCreation("fBgf_0hdbSw");
})
button2.addEventListener("click", function() {
    embedCreation("VETalH53v0A");
})
button3.addEventListener("click", function() {
    embedCreation("t-tMaT_pWC8");
})
button4.addEventListener("click", function() {
    embedCreation("S-1oLZ31hXI");
})
button5.addEventListener("click", function() {
    embedCreation("pOZcNckc-rY");
})
button6.addEventListener("click", function() {
    embedCreation("TT6pa3LSF58");
})
button7.addEventListener("click", function() {
    embedCreation("IFwlXLiM3iA");
})
button8.addEventListener("click", function() {
    embedCreation("TBaxsAgeG9g");
})
button9.addEventListener("click", function() {
    embedCreation("MWpg3BupSi4");
})

closeButton.addEventListener("click", function() {
    stopTrailer();
})
overlay.addEventListener("click", function() {
    stopTrailer();
})
function stopTrailer () {
    overlay.classList.remove("active");
    popUpTrailer.classList.remove("active");
    var videos = document.querySelectorAll('iframe');
    Array.prototype.forEach.call(videos, function (video) {
		if (video.tagName.toLowerCase() === 'video') {
			video.pause();
		} else {
			var src = video.src;
			video.src = src;
		}
	});
}

function embedCreation (videoURL) {
    urlString = `<iframe id="embed-el" width="100%" height="auto" src="https://www.youtube-nocookie.com/embed/${videoURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    portfolioVid.innerHTML = urlString;
    const newEmbed = document.getElementById("embed-el");
    const calculatedHeight = newEmbed.clientWidth / 1.777777777777778;
    newEmbed.height = calculatedHeight;
    overlay.classList.add("active");
    popUpTrailer.classList.add("active");
}