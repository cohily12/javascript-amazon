<<<<<<< HEAD
=======
import { $, $All} from "../util.js";

>>>>>>> 5889a2eeaef34772bd574a413556cd40058f33b0
class StickyLayer{
    constructor( bindTo ){
        this.stickyEl = $(bindTo);
    }

<<<<<<< HEAD
    pinElement({ thresholdEl }){
=======
    pinElement( selector ){
        const thresholdEl = $(selector);
>>>>>>> 5889a2eeaef34772bd574a413556cd40058f33b0
        let bPinEl = false;

        return _ => {
            const threshold = thresholdEl.offsetTop + thresholdEl.offsetHeight;
            const isPassedThreshold = scrollY >= threshold;

            if(isPassedThreshold && bPinEl) return;
            
            if(isPassedThreshold) {
                this.stickyEl.classList.add("fixed");
                bPinEl = true;
            }
            else {
                this.stickyEl.classList.remove("fixed");
                bPinEl = false;
            }
        }
    }

<<<<<<< HEAD
    displayHiddenBar({ thresholdEl }){
        const hiddenBar = this.stickyEl.querySelector(".nav-hidden-bar");
=======
    displayHiddenBar( selector ){
        const thresholdEl = $(selector);
        const hiddenBar = $(".hidden-bar", this.stickyEl);
>>>>>>> 5889a2eeaef34772bd574a413556cd40058f33b0
        let bHiddenbar = false;

        return _ => {
            const threshold = thresholdEl.offsetTop + thresholdEl.offsetHeight;
            const isPassedThreshold = scrollY >= threshold;

            if(isPassedThreshold && bHiddenbar) return;

            if(isPassedThreshold) {
                hiddenBar.classList.add("visible");
                bHiddenbar = true;
            }
            else {
                hiddenBar.classList.remove("visible");
                bHiddenbar = false;
            }
        }
    }

    displayHiddenPlan(){
<<<<<<< HEAD
        const seeMoreBtn = this.stickyEl.querySelector(".bar-see-more .down-arrow");
        const contentCloseBtn = this.stickyEl.querySelectorAll("#content-close-btn");
        
        seeMoreBtn.addEventListener("click", () => {
            this.toggleHiddenEl();
        });

        contentCloseBtn.forEach(el => el.addEventListener("click", () => {
            this.toggleHiddenEl();
        }));
=======
        const seeMoreBtn = $(".bar-see-more .down-arrow", this.stickyEl);
        const contentCloseBtn = $All("#content-close-btn", this.stickyEl);
        
        seeMoreBtn.addEventListener("click", this.toggleHiddenEl);

        contentCloseBtn.forEach(el => el.addEventListener("click", this.toggleHiddenEl));
    }

    toggleHiddenEl(){
        const hiddenBar = $(".hidden-bar", this.stickyEl);
        const hiddenPlan = $(".hidden-plan", this.stickyEl);
        const hiddenClose = $(".hidden-close", this.stickyEl);

        hiddenBar.classList.toggle("hidden");
        hiddenPlan.classList.toggle("visible");
        hiddenClose.classList.toggle("visible");
    }

    run() {
        window.addEventListener("scroll", this.pinElement(".nav-lower"));
        window.addEventListener("scroll", this.displayHiddenBar(".prime-header-content .btn-prime-container"));
        this.displayHiddenPlan();
>>>>>>> 5889a2eeaef34772bd574a413556cd40058f33b0
    }

    toggleHiddenEl(){
        const hiddenBar = this.stickyEl.querySelector(".nav-hidden-bar");
        const hiddenPlan = this.stickyEl.querySelector(".nav-hidden-plan");
        const hiddenClose = this.stickyEl.querySelector(".nav-hidden-close");

        hiddenBar.classList.toggle("hidden");
        hiddenPlan.classList.toggle("visible");
        hiddenClose.classList.toggle("visible");
    }

    run() {
        window.addEventListener("scroll", this.pinElement({
            thresholdEl: document.querySelector(".nav-lower")
        }))

        window.addEventListener("scroll", this.displayHiddenBar({
            thresholdEl: document.querySelector(".prime-header-content .btn-prime-container")
        }))

        this.displayHiddenPlan();
    }
}

export { StickyLayer }