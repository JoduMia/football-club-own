function btn() {
    const btnAdd = document.querySelectorAll('[btn]');
    btnAdd.forEach(btn => {
        btn.addEventListener('click', function () {
            const name = this.parentNode.children[0].innerText;
            if(appendNames(name) !== false){
                this.setAttribute('disabled', true);
            }
        })
    })
}

btn();


function appendNames(name) {
    const nameBox = document.getElementById('name-box');
    const singleName = document.createElement('span');
    singleName.innerHTML = `<li class="text-white hover:bg-color1 hover:text-yellow-400 font-semibold text-lg font-berkshire duration-300">${name}</li>`;
    if((nameBox.children.length) <= 4) {
    console.log((nameBox.children.length));
        nameBox.appendChild(singleName);
    } else {
        alert('You can\'t take more than five Players !!!');
        return false;
    }
}

document.getElementById('cal').addEventListener('click', function () {
    const totalSection = document.getElementById('totalsection');
    const playerCost = document.getElementById('playercost');
    console.log(playerCost);
    const nameBox = document.getElementById('name-box');
    const totalPlayers = nameBox.children.length;
    const costPerPlayer = getValue('player-cost');
    const totalCostForPlayers = totalPlayers * costPerPlayer;
    playerCost.innerText = totalCostForPlayers;
    if(totalCostForPlayers > 1){
        totalSection.style.display = 'block';
    }
});


document.getElementById('cal-total').addEventListener('click', function () {
    const mangerCost = getValue('manager-cost');
    const coachCost = getValue('coach-cost');
    const playerCostString = document.getElementById('playercost').innerText;
    const playerCost = parseInt(playerCostString);
    const totalCost = mangerCost + playerCost + coachCost;

    const finalCost = document.getElementById('totalcost');
    finalCost.innerText = totalCost;
});

