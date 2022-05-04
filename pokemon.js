let poke = fetch('https://pokeapi.co/api/v2/pokemon')
let img = document.querySelector('#imgPoke')
let nome = document.querySelector('#nome')

let count = 1
poke.then(resp => {

    resp.json().then((pokemons) => {

        console.log(pokemons);

        let table = renderTable(pokemons)
        document.querySelector('#app').innerHTML = table
    })

})


function botao(name) {
    console.log(1);
    /* 

        let aa = fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
        aa.then(resp => {
            resp.json().then(data => {
                 nome.innerHTML = name
                console.log(data.sprites);

                img.src = data.sprites.back_default
            })
        }) */
}

let renderTable = (poke) => {

    let pokeResult = poke.results
    let rows = pokeResult.map(pokemons => {

        return `<tr><td>${pokemons.name}</td><td>${pokemons.url}</td><td><button onclick='botao(${pokemons.name})'>Clique</button></td></tr>`

    })
    return `<table id='teste'>${rows.join('')}</table>`
}