//funcion para calcular y mostrar la grafica de las votaciones autonónomicas
function mostrarGraficoA(){
	//Obtengo la lista del localStorage
var dataListA=JSON.parse(localStorage.getItem('dataListA'));
//Elimino el último elemento de la lista porque se duplicaba.
dataListA.pop();
//Creo las variables para poder clasificar los datos.
let votosPSOE=0;
let votosPP=0;
let votosPODE=0;
let votosVOX=0;
let votosPC=0;
let votosCD=0;
let otros=0;
//Recorro la lista si se encuentra un tipo de partido se suma uno a ese partido para poder contar el numero de votos de un partido en específico en la lista.
for(let i=0;dataListA.length;i++){
		if(dataListA[i]==1){
		 votosPSOE++;
		 }
		 if(dataListA[i]==2){
		 votosPP++;
		 }
		 if(dataListA[i]==3){
		 votosPODE++;
		 }
		 if(dataListA[i]==4){
		 votosVOX++;
		 }
		 if(dataListA[i]==5){
		 votosPC++;
		 }
		 if(dataListA[i]==6){
		 votosCD++;
		 }
		 if(dataListA[i]==7){
		 otros++;
		 }
	if (i === dataListA.length - 1){
	break;
	}
}
//Muestro los votos por la consola
console.log("PSOE-"+votosPSOE);
console.log("PP-"+votosPP);
console.log("PODEMOS-"+votosPODE);
console.log("VOX-"+votosVOX);
console.log("PC-"+votosPC);
console.log("CIUDADANOS-"+votosCD);
console.log("otros-"+otros);
//Muestro los votos en la vista
let datosA=document.getElementById("datosA");
datosA.innerHTML="-Numero de votos PSOE="+votosPSOE+"<br>-Numero de Votos PP="+votosPP+"<br>-Numero de Votos Podemos="+votosPODE+"<br>-Numero de Votos VOX="+votosVOX+"<br>-Numero de Votos Pacma="+votosPC+"<br>-Numero de Votos Ciudadanos="+votosCD+"<br>-Numero de Votos otros="+otros;
//Creo el gráfico
var ctx = document.getElementById('graficoA').getContext('2d');
var chartData = {
  labels: ['PSOE', 'PP', 'Podemos', 'VOX', 'PACMA', 'Ciudadanos', 'Otros'],
  datasets: [{
    data: [votosPSOE, votosPP, votosPODE, votosVOX, votosPC, votosCD, otros],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(153, 102, 255)',
      'rgb(255, 159, 64)',
      'rgb(255, 99, 132)'
    ],
    hoverOffset: 4
  }]
};
var graficoA = new Chart(ctx, {
  type: 'pie',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});
 
}
//Funciona igual que la función anterior solo que para los votos generales.
function mostrarGraficoG(){
	var dataListA=JSON.parse(localStorage.getItem('dataListG'));
dataListA.pop();
let votosPSOE=0;
let votosPP=0;
let votosPODE=0;
let votosVOX=0;
for(let i=0;dataListA.length;i++){
		if(dataListG[i]==1){
		 votosPSOE++;
		 }
		 if(dataListG[i]==2){
		 votosPP++;
		 }
		 if(dataListG[i]==3){
		 votosPODE++;
		 }
		 if(dataListG[i]==4){
		 votosVOX++;
		 }
	if (i === dataListG.length - 1){
	break;
	}
}
console.log("PSOE-"+votosPSOE);
console.log("PP-"+votosPP);
console.log("PODEMOS-"+votosPODE);
console.log("VOX-"+votosVOX);
 let datosG=document.getElementById("datosG");
 datosG.innerHTML="-Numero de votos PSOE="+votosPSOE+"<br>-Numero de Votos PP="+votosPP+"<br>-Numero de Votos Podemos="+votosPODE+"<br>-Numero de Votos VOX="+votosVOX;
 var ctx = document.getElementById('graficoG').getContext('2d');
var chartData = {
  labels: ['PSOE', 'PP', 'Podemos', 'VOX'],
  datasets: [{
    data: [votosPSOE, votosPP, votosPODE, votosVOX],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)'
    ],
    hoverOffset: 4
  }]
};
var graficoG = new Chart(ctx, {
  type: 'pie',
  data: chartData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});
}
//Función para borrar los datos de las listas almacenadas en local storage.
function borrarGraficos(){
	//Obtengo las listas
	var dataListA=JSON.parse(localStorage.getItem('dataListA'));
	var dataListG=JSON.parse(localStorage.getItem('dataListG'));
	//Las borro
	localStorage.removeItem("dataListA");
	localStorage.removeItem("dataListG");
	//Muestro por consola  la confirmación.
	console.log("Se han borrado los datos de la lista");
}


/**Funcion para guardar los datos las votaciones autonomicas */
  function guardarDatosA(event) {
    event.preventDefault(); // evitar comportamiento por defecto del form
    const form = event.target;
    const radios = form.elements['voto'];
    let selectedValue;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedValue = radios[i].value;
        break;
      }
    }
    let dataListA = JSON.parse(localStorage.getItem('dataListA')) || [];
    dataListA.push(selectedValue);
    localStorage.setItem('dataListA', JSON.stringify(dataListA));
    console.log(`Guardado valor "${selectedValue}" en la lista de autonómicas`);
    
  }  

/**Funcion para guardar los datos las votaciones generales */
function guardarDatosG(event) {
    event.preventDefault(); // evitar comportamiento por defecto del form
    const form = event.target;
    const radios = form.elements['voto'];
    let selectedValue;
    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        selectedValue = radios[i].value;
        break;
      }
    }
    let dataListG = JSON.parse(localStorage.getItem('dataListG')) || [];
    dataListG.push(selectedValue);
    localStorage.setItem('dataListG', JSON.stringify(dataListG));
    console.log(`Guardado valor "${selectedValue}" en la lista de generales`);
  }

const dataListG = JSON.parse(localStorage.getItem('dataListG')) || [];
  console.log(`Retrieved ${dataListG.length} items from local storage list`);
  console.log(dataListG);
//Mensaje de confirmación de voto----Se podria hacer lo mismo pero con alert, pero es demasiado lento para poder votar en masa y hacer las pruebas.
function mensaje() {
  let mensaje = document.getElementById("mensaje");
  mensaje.innerHTML = "Se ha enviado el voto(cada click en el botón de votar es un voto al partido seleccionado).";
}

  