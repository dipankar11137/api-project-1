const allPlayers = () => {
    document.getElementById('player-container').innerHTML = '';
    // document.getElementById('spinner').style.display = block;
    const searchvalue = document.getElementById('search-box').value;
    const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchvalue}`;

    fetch(url)
        .then(res => res.json())
        .then(data => showPlayerDetails(data.player))


    // document.getElementById('spinner').style.display = none;
}

const showPlayerDetails = (players) => {

    for (const player of players) {
        const parent = document.getElementById('player-container');

        const div = document.createElement('div');
        div.innerHTML = `
                    <div class="card border p-5 m-3">
                        <div class="pro-pic">
                            <img class="w-75" src="${player.strThumb}" alt="">
                        </div>
                        <h2>Name : ${player.strPlayer} </h2>
                        <h5>Country : ${player.strNationality} </h5>
                        <p></p>
                        <div class="all-button">
                            <button class="btn btn-danger">Delete</button>
                            <button onclick="details('${player.idPlayer}')" class="btn btn-success">Details</button>
                        </div>
                    </div>

`
        parent.appendChild(div);
        // console.log(player);
    }

}

const details = (info) => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${info}`
    fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.players[0]));

}

const setDetails = (player) => {

    if (player.strGender == "Male") {
        document.getElementById('male').style.display = "block";
        document.getElementById('female').style.display = "none";
    } else {
        document.getElementById('male').style.display = "none";
        document.getElementById('female').style.display = "block";
    }

    document.getElementById('details-container').innerHTML = `
    <div class="card border p-5 m-3">
                        <div class="pro-pic">
                            <img class="w-75" src="${player.strThumb}" alt="">
                        </div>
                        <h2>Name : ${player.strPlayer} </h2>
                        <h5>Country : ${player.strNationality} </h5>
                        <p></p>
    </div>                    
    `
    // console.log('mama paice', info)
}