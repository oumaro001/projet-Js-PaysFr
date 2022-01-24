/*-------Les buttons---------*/
let europe = document.getElementById('europe');
let amerique = document.getElementById('amerique');
let afrique = document.getElementById('afrique');
let asie = document.getElementById('asie');

/*--------- La section------*/
let pays = document.getElementById('Pays');


/* -----------function pour afficher les pays-----------*/
function showCounttryByContinents(continent) {

    let req = new XMLHttpRequest();
    req.open("GET", "https://restcountries.com/v3.1/lang/french");
    req.responseType = `json`;
    req.send();

    req.onload = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
            if (req.status == 200) {
                let world = req.response;
                for (const country of world) {
                    if (country.continents == continent) {
                        let countryName = document.createElement('div');
                        countryName.classList.add("countrylist")
                        pays.appendChild(countryName);
                        let drapeau = country.flags.png;
                        countryName.innerHTML = "<h2>" + country.name.common + "</h2>" + 
                                                "<p>" + country.continents + "</p>"+ '<img src='+drapeau+'>'

                
                    }


                }

            }

        }




    }
}

europe.addEventListener('click', () => {

    pays.innerHTML = "";
    showCounttryByContinents("Europe");

})

afrique.addEventListener('click', () => {
    pays.innerHTML = "";
    showCounttryByContinents("Africa");

})
asie.addEventListener('click', () => {
    pays.innerHTML = "";
    showCounttryByContinents("Asia");

})
amerique.addEventListener('click', () => {
    pays.innerHTML = "";
    showCounttryByContinents("America");
    showCounttryByContinents("North America");
    showCounttryByContinents("South America");


})