// Variáveis para aplicar os resultados do teste. Você deverá categoriza-las como let/const, mas não deve alterar os valores.
const gender = process.argv[2]; // Genero 
let height = process.argv[3]; // Altura
let barReps = process.argv[4]; // Repetições com barra
let barSeconds = process.argv[5]; // Tempo das repetições com barra 
let abs = process.argv[6]; // Abdominais
let runDistance = process.argv[7]; // Distância da corrida
let runTime = process.argv[8]; // Tempo da corrida
let swimDistance = process.argv[9]; // Distância da natação
let swimTime = process.argv[10]; // Tempo da natação
let diveTime = process.argv[11]; // Tempo de mergulho

let passed = false;

/*
    Importante:
    Se o genero (gender) for masculino, utilize a palavra "male"
    Se o genero (gender) for feminino, utilize a palavra "female"

    Sugestão para começar:
    if (gender === "male")
    ...
*/
// **sua lógica a partir daqui**

//vai verificar se e masculino ou feminino
if (gender === "male") {
     //se altura for maio ou igual 1.70 passa
    if (height >= 1.70) {
        
         //se repetiçoes de barras for maio ou igual 6 passa ou se barseconds for maior ou igual a 15 tambem passa
         if (barReps >= 6 || barSeconds >= 15) {
             
               //se abdominais for maior igual 41 passa
              if (abs >= 41) {
                  
                    //se correu uma distancia maior ou igual 3km e demerou menos ou igual a 12 minutos passa ou se correu maior ou igual 5km e demorou menos ou igual a 20 minutos passa 
                   if (runDistance >= 3000 && runTime <= 720 || runDistance >= 5000 && runTime <= 1200) {
          
                         //se nadou maior ou igual a 100m e demorou menos ou igual a 1 minuto passa ou se mergulhou menor ou igual a 30 segundos passa
                        if (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30) {
                             passed = true;
                    
                        } else {passed = false}
                   } else {passed = false}
              }else {passed = false}
         }else {passed = false}
    } else {passed = false}
}

//vai verificar se e masculino ou feminino
if (gender === "female") {

     //se altura for maio ou igual 1.60 passa
     if (height >= 1.60) {
     

          //se repetiçoes de barras for maio ou igual 5 passa ou se barseconds for maior ou igual a 12 tambem passa
         if (barReps >= 5 || barSeconds >= 12) {
           
          
              //se abdominais for maior igual 41 passa
              if (abs >= 41) {
                 

                    //se correu uma distancia maior ou igual 4km e demerou menos ou igual a 15 minutos passa ou se correu maior ou igual 6km e demorou menos ou igual a 22 minutos passa 
                   if (runDistance >= 4000 && runTime <= 900 || runDistance >= 6000 && runTime <= 1320) {
                   

                         //se nadou maior ou igual a 100m e demorou menos ou igual a 1 minuto passa ou se mergulhou menor ou igual a 30 segundos passa
                        if (swimDistance >= 100 && swimTime <= 60 || diveTime <= 30) {
                             passed = true;
                    
                        } else {passed = false}
                   } else {passed = false}
              }else {passed = false}
         }else {passed = false}
    } else {passed = false}
}






/*
    Seu código deve conter apenas UM console.log, e ele deve ser o abaixo.
    Não altere nada pra baixo dessa linha, senão os testes não irão funcionar.
*/
console.log(passed)
