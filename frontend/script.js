const menuButtonComponent = function () {
    return `<button id = "menu-btn"></button>`
}

const loadEvent = function (){
    const rootElement = document.getElementById("root");
    console.log(rootElement.parentElement);

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent());

    const menuButtonElement = document.getElementById("menu-btn")

    menuButtonElement.addEventListener("click", function (event){
        //event.currentTarget.classList.toggle("clicked");
        //console.log(rootElement);                       //!!! nem jelenik meg a console-n meg kell nézni
        //console.log(event.currentTarget.parentElement);
        //console.log(event.currentTarget.closest("#root"));

        event.currentTarget.closest("#root").classList.toggle("menu-opened");
        
        });
}
window.addEventListener("load", loadEvent);
