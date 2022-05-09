let globalVariable1 = 12;
//globális változót hozok létre 

let globalVariable2 = function () {
    console.log("inside the function ", globalVariable1);
    let funVariable1 = "hello"

    let funVariable2 = function () {
        console.log ("funVariable2 belseje")
        console.log(globalVariable1);
        console.log(funVariable1);

        let funInFunVariable1 = true;
        console.log(funInFunVariable1); 

        let funInFunVariable2 = function(){
            console.log(funInFunVariable1);

        }
        funInFunVariable2();
    }

    funVariable2();

    console.log(funVariable1);

    if(funVariable1 === "hello"){
        var blockVariable1 = "Bye" //a let-et átírtuk var-ra
    } else {
        // console.log(blockVariable1);
        
    }
    
    console.log(blockVariable1);

        //nem fogjuk látni az if-en kívül létrehozott, de if-en belül lévőt
}
//befele ez működik, kifelé nem scope függvényeknél: kifelé semmi nem fogja látni
//meghívom a globalVariable2 függvényt:

globalVariable2();

//console.log(funVariable1);

var varVariable = 1;
console.log(varVariable); //akárhova mozgatom, undefined-ot ad

let letVariable1;
console.log(letVariable1);

let letVariable2 = "variable 2 ";
console.log(letVariable2);

const constVariable = "ciao";
//constVariable = "hello"; az üres string helyére kell beírni az értéket, különben hibaüzenetet ad, mert újra inicializáljuk
console.log(constVariable);

const constObj1 = {};  //adhatunk hozzá új kulcsot.
// constObj1.key = "value";
//constObj1 = {key: "value"}; //ahányszor leírjuk, annyiszor jön létre új objektum. Az objektumoknál linkelés történik. Van egy üres és van egy másik, amire mutat. Hogy hova mutat, azt linkeljük.
console.log(constObj1);

const globalVariable3 = function (parameter1, parameter2, parameter3, parameter6) {
    console.log(parameter1);
    console.log(parameter2);                    //undefined lesz, ha nem adunk neki értéket, csak fv.scope-ja lehet.
    console.log(parameter3());
    console.log(parameter6);

}

const globalVariable4 = "apple";

const globalVariable5 = function () {
    return "pear"
}

const globalVariable6 = function () {
    return "shoes"
}

//meghívom a globalVariable5-t
globalVariable3(globalVariable5(), globalVariable4, globalVariable6);   


//globalVariable3(globalVariable5(), globalVariable4, globalVariable6);
//globalVariable3(3, 2); 
//globalVariable3(3, globalVariable4);   //az apple-t tettem be paraméterként a 2 helyett


const loadEvent = function (parameter1){
    const rootElement = document.getElementById("root")
    console.log(rootElement);
    console.log(parameter1);
    //console.log(globalVariable1);
    //Az egészen fog látszódni, a Console-n megjelenik a 12

    rootElement.addEventListener("click", function (event){
        //anonim callback fv. ez
        //console.log(event);
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML("beforeend", '<span>Clicked</span>')
        event.currentTarget.classList.toggle("clicked")
        })
}


window.addEventListener("load", loadEvent)