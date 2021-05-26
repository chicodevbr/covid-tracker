

const endpoint = '30';
const url = `https://coronavirus-tracker-api.herokuapp.com/v2/locations/${endpoint}`;

/// chamando getData ao carregar a página 

window.addEventListener("load", () => {
    getData();
    getGlobal();

})
/// render do retorno do fetch

const renderCountries = (data) => {
    const renderDeaths = data.map(item => `<option>${item.deaths}</option>`).join("")

}



/// fetch 



const getData = async () => {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json();
            const country = data.location.country;
            const cases = data.location.latest.confirmed;
            const deaths = data.location.latest.deaths;
            const population = data.location.country_population;
            const update = data.location.last_updated;

            console.log(data)
           
            document.getElementById("country").innerHTML = country;
            document.getElementById("cases").innerHTML = cases.toLocaleString('pt-br');
            document.getElementById("deaths").innerHTML = deaths.toLocaleString('pt-br');
            document.getElementById("population").innerHTML = population.toLocaleString('pt-br');
            document.getElementById("update").innerHTML = update.substr(0, 10);
            
        }

    } catch(error) {
        console.log(error);
    }

    setTimeout(getData, 21600000)
}

const getGlobal = async () => {
    try {
        const response = await fetch('https://coronavirus-tracker-api.herokuapp.com/v2/locations');
        if(response.ok) {
            const data = await response.json();
            const globalCases = data.latest.confirmed;
            const globalDeaths = data.latest.deaths;   
                     
            
            document.getElementById("globalCases").innerHTML = globalCases.toLocaleString('pt-br');
            document.getElementById("globalDeaths").innerHTML = globalDeaths.toLocaleString('pt-br');
            // document.getElementById("population").innerHTML = population.toLocaleString('pt-br');
            // document.getElementById("update").innerHTML = update.substr(0, 10);
            
        }

    } catch(error) {
        console.log(error);
    }

    setTimeout(getData, 21600000)
}
