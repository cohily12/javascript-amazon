import { StickyLayer } from "./module/StickyLayer.js"
import { Scroll } from "./module/Scroll.js"
import { HTMLTemplate } from "./module/HTMLTemplate.js";
import { Ajax } from "./module/Ajax.js";
import { Carousel } from "./module/Carousel.js";

const scroll = new Scroll;
const stickyLayer = new StickyLayer({ stickyEl: document.querySelector(".nav-plan-layer") });
const htmlTemplate = new HTMLTemplate;
const ajax = new Ajax;
const carousel = new Carousel({
    targetHTML: document.querySelector(".carousel-wrapper"), 
    prevBtn: document.querySelector(".carousel-left-arrow"), 
    nextBtn: document.querySelector(".carousel-right-arrow"), 
});

document.addEventListener("DOMContentLoaded", () => {
    ajax.getReq(
        "../../json/options.json", 
        htmlTemplate.optionHTML({ HTMLEl: document.querySelector("#select-category") })
    );

    ajax.getReq(
        "../../json/videoCarousel.json",
        htmlTemplate.carouselHTML({ HTMLEl: document.querySelector("#video-card ul") })
    )
})

window.addEventListener("load", () => {
    scroll.addEvent(
        stickyLayer.pinElement({
            thresholdEl: document.querySelector(".nav-lower")
        }),
        stickyLayer.displayHiddenBar({
            hiddenBar: stickyLayer.stickyEl.querySelector(".nav-hidden-bar"),
            thresholdEl: document.querySelector(".prime-header-content .btn-prime-container")
        })
    );
 
    stickyLayer.displayHiddenPlan();

    carousel.run();
});

