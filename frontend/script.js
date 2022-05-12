const menuButtonComponent = function () {
    return `
    <button id="menu-btn"></button>
    `
}

const beerSectionComponent = function (title, sub, text, id) {
    return `
    <section id="${id}">
        <h1 class="beerName">${title}</h1>
        <h2 class="beerCompany">${sub}</h2>
        <h3 class="beerType">${text}</h3>
    </section>
    `
}

const beerAnchorComponent = function (title, id) {
    return `
    <a href="#${id}">${title}</a>
    `
}
const beerNavComponent = function (inner) {
    return `
        <nav>${inner}</nav>
    `
}
const menuButtonClickEvent = function (event) {
      
    event.currentTarget.closest("#root").classList.toggle("menu-opened");    
    
    document.getElementsByTagName("nav")[0].classList.toggle("nav-opened");

}
   
const loadEvent = function (){
    /*console.log(typeof beerSectionComponent);/*

    const rootElement = document.getElementById("root");
    console.log(rootElement.parentElement);
    console.log(rootElement.parentElement());

   (function (){
        console.log("blablabla");
    })()*/
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());

    const menuButtonElement = document.getElementById("menu-btn");

    menuButtonElement.addEventListener("click", menuButtonClickEvent);

    let beerSections = "";

    for (const beer of beers.cards) {
        beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
            }

     rootElement.insertAdjacentHTML("beforeend", beerSections);

   let beerAnchors = "";

   for (const beer of beers.cards) {
       beerAnchors += beerAnchorComponent(beer.title)
   }
   rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors));
}
window.addEventListener("load", loadEvent)