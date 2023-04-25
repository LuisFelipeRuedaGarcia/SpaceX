divCards = document.querySelector("#divCards")
const url = "https://api.spacexdata.com/v3/launches"
function principal(){
fetch(url)
    .then(response => response.json())
    .then(result => insertCards(result))
    .catch(error => console.log(error))
}

function insertCards(launches){
    launches.forEach(launche => {
        divCards.insertAdyacentHTML("beforeend", /*html*/`
        <div class="card">
            <img class="maid-img-top" src="${launche.links.mission_patch}" alt="Card image cap">
            <div class="card-body">
                
                <p class="card-text"><span>${launche.launch_year}</span></p>
                <a href="#" class="btn btn-primary">Details</a>
            </div>
        </div>
        `)

    });
}
principal();