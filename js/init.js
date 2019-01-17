import { template } from "./module/template.js";
import { ajax } from "./module/ajax.js";

const locationHref = location.href;

ajax.getReq(`${locationHref}json/options.json`)
    .then(template.appendOptionHTML({ HTMLEl: document.querySelector("#select-category") }))

ajax.getReq(`${locationHref}json/videoCarousel.json`)
    .then(template.appendCarouselHTML({ HTMLEl: document.querySelector("#video-card ul") }))

ajax.getReq(`${locationHref}json/musicCarousel.json`)
    .then(template.appendCarouselHTML({ HTMLEl: document.querySelector("#music-card ul") }))