
//Reto 1
console.log('');
console.log("RETO 1")
var masaMarcos, masaJuan, alturaMarcos, alturaJuan, ImcMarcos, ImcJuan, MarcosImcMayor;
masaMarcos = 88;
masaJuan = 67;

alturaMarcos = 1.95;
alturaJuan = 1.62;

function calculadoraIMC(masa,altura){
    return masa / (altura*altura);
}
ImcMarcos = calculadoraIMC(masaMarcos,alturaMarcos);
ImcJuan = calculadoraIMC(masaJuan,alturaJuan);

MarcosImcMayor = ImcMarcos > ImcJuan;

console.log("¿Tiene Marcos un IMC mayor que el de Juan? "+ MarcosImcMayor);




//Reto 2
console.log('');
console.log("RETO 2");
var equipoJuan = [89, 120, 103];
var equipoMiguel = [116, 94, 123];
var mediaEquipoJuan, mediaEquipoMiguel;

function calculadoraDeMedias(medias){
    var media=0;
    for (let i = 0; i < medias.length; i++) {
       media+=medias[i];
    }
    return media= media/medias.length;
}
mediaEquipoJuan = calculadoraDeMedias(equipoJuan);
mediaEquipoMiguel = calculadoraDeMedias(equipoMiguel);

if(mediaEquipoJuan > mediaEquipoMiguel){
    console.log("Ha ganado el equipo de Juan con una puntuación media de "+ mediaEquipoJuan);
}else if(mediaEquipoJuan < mediaEquipoMiguel){
    console.log("Ha ganado el equipo de Miguel con una puntuación media de "+ mediaEquipoMiguel);
}else{
    console.log("Ambos equipos han empatado con una puntcuación media de "+ mediaEquipoJuan);
}

var equipoJuan = [89, 103, 120];
var equipoMiguel = [120, 103, 89];

mediaEquipoJuan = calculadoraDeMedias(equipoJuan);
mediaEquipoMiguel = calculadoraDeMedias(equipoMiguel);


if(mediaEquipoJuan > mediaEquipoMiguel){

    console.log("Ha ganado el equipo de Juan con una puntuación media de "+ mediaEquipoJuan);

}else if(mediaEquipoMiguel > mediaEquipoJuan){

    console.log("Ha ganado el equipo de Miguel con una puntuación media de "+ mediaEquipoMiguel);

}else{
    
    console.log("Ambos equipos han empatado con una puntuación media de "+ mediaEquipoJuan);
}

var equipoMaria = [97, 134, 105];
var mediaEquipoMaria =  calculadoraDeMedias(equipoMaria);

if(mediaEquipoJuan > mediaEquipoMiguel && mediaEquipoJuan > mediaEquipoMaria){

    console.log("Ha ganado el equipo de Juan con una puntuación media de "+ mediaEquipoJuan);

}else if(mediaEquipoMiguel > mediaEquipoJuan && mediaEquipoMiguel > mediaEquipoMaria){

    console.log("Ha ganado el equipo de Miguel con una puntuación media de "+ mediaEquipoMiguel);

}else if(mediaEquipoMaria > mediaEquipoJuan && mediaEquipoMaria > mediaEquipoMiguel){
    
    console.log("Ha ganado el equipo de Maria con una puntuación media de "+ mediaEquipoMaria);

}else if(mediaEquipoJuan == mediaEquipoMaria && mediaEquipoJuan == mediaEquipoMiguel){
    console.log("Ha habido un empate")
}




//Reto 3
console.log('');
console.log("RETO 3");
var facturasRestaurantesJuan = [124,48,268];
var propinas = [];
var facturaFinal = [];


function calculadoraDePropinas(propinas) {
    for (let i = 0; i < facturasRestaurantesJuan.length; i++) {
        
        if (facturasRestaurantesJuan[i] < 50) {
            propinas[i] = 0.2 * facturasRestaurantesJuan[i];
        }else if (facturasRestaurantesJuan[i] >= 50 && facturasRestaurantesJuan[i] <= 200){
            propinas[i] = 0.15 * facturasRestaurantesJuan[i];
        }else{
            propinas[i] = 0.1 * facturasRestaurantesJuan[i];
        }

    }
}


function facturaFinalParaPagar(facturaFinal) {

    for (let i = 0; i < facturasRestaurantesJuan.length; i++) {
        
        facturaFinal[i] = facturasRestaurantesJuan[i] + propinas[i]; 

    }

}

//Ahora teniendo las funciones calculamos las propinas y la factura 
calculadoraDePropinas(propinas);

facturaFinalParaPagar(facturaFinal);

function mostarFacturas(factura,tipoDeFactura){
    for (let i = 0; i < factura.length; i++) {
        console.log(tipoDeFactura+" "+ (i+1) +": "+ factura[i]);
        
    }
}
mostarFacturas(propinas,"Propina");
mostarFacturas(facturaFinal,"Factura final");

