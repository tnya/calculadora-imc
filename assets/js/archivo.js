
function CalcularIMC() {
var weight = document.imc.peso.value
var height = document.imc.estatura.value
if(weight > 0 && height > 0){	
var finalBmi = weight/(height/100*height/100)
document.imc.bmi.value = finalBmi
if(finalBmi < 18.5){
document.imc.resultado.value = "Estas muy delgadx."
}
if(finalBmi > 18.5 && finalBmi < 25){
document.imc.resultado.value = "Estas saludable"
}
if(finalBmi > 25){
document.imc.resultado.value = "Estas pasaditx"
}
}
else{
alert("Complete todos los campos")
}
}

