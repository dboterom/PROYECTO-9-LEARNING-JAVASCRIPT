function sayHi(name){
    alert("Hola " + name);
}

function sayHiToPerson (){
    const personName=prompt("Ingresa nombre", "Pamela");
    if (personName!=null && personName!=""){
        sayHi(personName);
    }
    else {
        sayHi("No ingresaste tu nombre")
    }
}

function sayHiToDiego(){
    const personName=prompt("Ingresa nombre", "");
    if (personName=="Diego"){
        sayHi("Felicidades Diego")
    }
    else if (personName=="Carlos"){
        sayHi("Largate Carlos")
    }
    else if (personName=="Verónica"){
        sayHi ("Bienvenida Verónica")
    }
    else {
        sayHi ("Aquí no eres bienvenido >:|")}
}

function sayHiToDiegoAlt(){
    const personName=prompt("Ingresa nombre", "");
    switch(personName){
        case "Diego":{
            sayHi ("Felicidades Diego")
            break
        }
        case "Carlos":{
            sayHi("Largate Carlos")
            break
        }
        case "Verónica":{
            sayHi ("Bienvenida Verónica")
            break
        }
        default:{
            sayHi ("Aquí no eres bienvenido >:|")
            break
        }
    }
}

function sayHiToManyNames (){
    const names=[]
    for(let i=0;i<3; i++){
        const personName=prompt("Ingresa nombre", "Pamela");
        names.push (personName)
    }
    for (i=0;i <names.length; i++){
        sayHi (names[i]+i)
    }
}

function checkPairNumber(){
    var num=7;
    for (num=0; num < 21; num++){
        if (num % 2==0){
            console.log("El número tal es par" + num + "es par");
        }
        else{
            console.log("El número tal es par" + num + "no es par");
    }
    
    }
}

function calculateFibonacci (){
    var num1=0;
    var num2=1;
    var add=0;
    for (let i = 0; i < 21; i++){
        if (i == 0 || i == 1){
            console.log (i)
        }
        else{
            add = num1 + num2;
            num1 = num2;
            num2 = add;
            console.log (add)
        }
    }
}
calculateFibonacci()