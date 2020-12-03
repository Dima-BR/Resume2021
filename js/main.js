// about section tabs
(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click", (event) => {
        // if event.target contains 'tab-item' class and not contains 'active' class
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
                const target = event.target.getAttribute("data-target");
                console.log(target);
                // deactivate existing active 'tab-item'
                tabsContainer.querySelector(".active").classList.remove("outer-shadow", "active");
                event.target.classList.add("active","outer-shadow");
                // deactivate existing active 'tab-content'
                aboutSection.querySelector(".tab-content.active").classList.remove("active");
                aboutSection.querySelector(target).classList.add("active");

        }
    })
})();