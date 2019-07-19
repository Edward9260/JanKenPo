function option(jugador){

    var resultado_texto = ["Draw","Win","Lose"];
    var nombre = ["Jan","Ken","Po"];

    var jugada = [
                    [0,1,2],
                    [2,0,1],
                    [1,2,0]  

    ];

    var cpu = Math.floor((Math.random()* 2));
    var resultado = jugada[cpu][jugador];

    // console.log("Jugador: " + nombre[jugador]);
    // console.log("CPU: " + nombre[cpu]);
    // console.log(resultado_texto[resultado]);
    
    var aviso = document.querySelector("p");
    document.querySelector("p").innerHTML = (resultado_texto[resultado]);
    document.querySelector("p").style.color = "blue";




}