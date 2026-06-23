const pessoas = ["Lucas", "Matheus", "Ana", "Bruno", "Carla", "Carol"];

// 1 - Laço for

for (let i = 0; i < pessoas.length; i++){
    document.getElementById("lista1").innerHTML += "<li>" + pessoas[i] + "</li>";
}

let i = 0;

while (i < pessoas.length){
    document.getElementById("lista2").innerHTML += "<li>" + pessoas[i] + "</li>";
    i++;
}

let j = 0;
do {
    document.getElementById("lista3").innerHTML += "<li>" + pessoas[j] + "</li>";
    j++;
}
while(j < pessoas.length);

pessoas.forEach(function(pessoas){
    document.getElementById("lista4").innerHTML += "<li>" + pessoas + "</li>";
    
});