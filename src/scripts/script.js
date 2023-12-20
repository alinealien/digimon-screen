// Para trabalhar com o JS nesse projeto, precisamos criar 4 funções, para:
// 1. Chamar a API dos Digimons 
// 2. Um filtro para busca dos Digimons 
// 3. Reenderizar 
// 4. E uma função main


// CHAMADA DA API:
//Função assincrona - async:
async function getDigimonsAPI(){

// Estamos criando uma variavel de nome 'response' para guardar a resposta da requisição  da API;
// O fetch faz a requisição assincrona e o await irá pedir para aguardar a resposta;
const response = await fetch("https://digitalinnovationone.github.io/api-digimon/api/digimon.json");


// Aqui estamos retornando e convertendo a resposta para o JSON;
// Novamente o await é utilizado para evitar a 'Promise';
return await response.json();

}

//FILTRO PARA A BUSCA DO DIGIMON:
//Criar um digimonsList e digimonsId
async function filtroDigimons(digimonsList, digimonId){

//Armazenamos em 'digimon' o resultado de busca da filtragem:
const digimon = await digimonsList.find((monster) => monster.id === digimonId);

return digimon;

}


async function renderDigimons(digimon){

// Manipulei o DOM aqui para exibir as informações de nome e imagem dos Digimons:
//É importante sempre observar a API e como está definidio suas propriedades.
const nomeDigimonElement = document.getElementById("t-nome__bt");
nomeDigimonElement.textContent = digimon.name;

// Da mesma forma que busquei o nome do digimon, estou buscando a imagem, usando o querySelector.
// NÃO ESQUECER DE COLOCAR O (.) ao atribuir o nome da classe da imagem;
const imgDigimonElement = document.querySelector(".i-card__digimon img");
imgDigimonElement.src = digimon.image;


// MODIFICAR O HP, ATK E DEF
const hpDigimonElement = document.querySelector(".b-nv-in__progress-hp");
const atkDigimonElement = document.querySelector(".b-nv-in__progress-atk");
const defDigimonElement = document.querySelector(".b-nv-in__progress-def");

hpDigimonElement.style.width = digimon.HP + '%';
atkDigimonElement.style.width = digimon.ATK + '%';
defDigimonElement.style.width = digimon.DEF + '%';

}




// FUNÇÃO PRINCIPAL MAIN:
async function main(){

    // Preciso chamar a API dos digimons primeiro:
    const digimons = await getDigimonsAPI();

    // Preciso chamar/filtrar o digimons escolhido:
    const chooseDigimons = await filtroDigimons(digimons, 9);

    await renderDigimons(chooseDigimons);

}

main();