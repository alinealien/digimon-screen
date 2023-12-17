// Para trabalhar com o JS nesse projeto, vamos pensar nas funções que iremos precisar:
// No Digimon Search, iremos precisar criar 3 funções simples, para:
// Chamar a API dos Digimons | Um filtro para busca dos Digimons | E uma função main.



// Chamada da API:
//Função assincrona - async:
async function getDigimonsAPI(){

// Estamos criando uma variavel de nome 'response' para guardar a resposta da requisição API;
const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");

//Aqui precisamos retornar as informações como um .json();
return await response.json();

}

//Filtro pra a busca Digimon:
//Criar um digimonsList e digimonsId
async function filtroDigimons(digimonsList, digimonId){

//Armazenamos em 'digimon' o resultado de busca da filtragem:
    const digimon = await digimonsList.find((monster) => monster.id === digimonId);

    console.log(digimon);
}

//Função Main:
async function main(){

    //1. Preciso chamar a API dos digimons primeiro:
    const digimons = await getDigimonsAPI();

    //2. Preciso chamar/filtrar o digimons escolhido:
    const chooseDigimons = await filtroDigimons(digimons, 1);

}

main();