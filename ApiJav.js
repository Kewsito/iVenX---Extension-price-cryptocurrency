
// CODIGO 

const apikey = "your-token"
const apiurl = "https://api.api-ninjas.com/v1/cryptoprice?symbol="
const apimon = "https://api.api-ninjas.com/v1/cryptosymbols?"
const resultados = document.getElementById('resultados');
const todas = document.getElementById('todas');
var moneda = document.getElementById('moneda');
const consulta = document.getElementById('consulta');
const todaslasmonedas = document.getElementById('todaslasmonedas');

/*todaslasmonedas.addEventListener('click', () => {
    const url = apimon;
    if (moneda){
        resultados.innerHTML = 'Cargando...'
    }
    fetch(url,{
        headers: {
            'X-Api-Key': apikey
        }
    })
    .then(response => response.json())
    .then(data => {
        const items = data.symbols;
        console.log(items)
        // Iterar sobre los elementos de la respuesta
        items.forEach(elemento => {
        // Crear elemento <li> para cada elemento
        const listItem = document.createElement('li');
        
        // Agregar contenido al elemento <li>
        listItem.textContent = elemento.nombre;
        
        // Agregar el elemento <li> al contenedor
        resultados.appendChild(listItem);
    });
    })
    .catch(error => {
        console.error("SOLICITUD FALLIDA", error);
        resultados.innerHTML = 'Ha ocurrido un error, por favor intentalo de nuevo'
    })
})*/

consulta.addEventListener('click', () =>  {
    if (moneda){
        resultados.innerHTML = 'Cargando...'
    }
    const url = apiurl + moneda.value;
    fetch(url,{
        headers: {
            'X-Api-Key': apikey
        }
    })
    .then(response => response.json())
    .then(data => {
        const res = data.price;
        resultados.innerHTML = `MONEDA ELEGIDA: ${moneda.value} 
        PRECIO ACTUAL: ${res}`;

    })
    .catch(error => {
        console.error("SOLICITUD FALLIDA", error);
        resultados.innerHTML = 'Ha ocurrido un error, por favor intentalo de nuevo'
    })

});
