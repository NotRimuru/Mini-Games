const CardTypes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let UsedTypes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const GameWrapper = document.getElementById("game-wrapper");
for(let i = 0; i < 36; i++){
    const Num = Math.floor(Math.random() * CardTypes.length);
    const CardType = CardTypes[Num];
    GameWrapper.innerHTML += `<div class = "card" data-card-id=${CardType}></div>`;

    UsedTypes[Num] += 1;

    if(UsedTypes[Num] >= 2){
        CardTypes.splice(Num, 1);
        UsedTypes.splice(Num, 1);
    }
}

let ActiveCards = [];
const Cards = document.getElementsByClassName("card");

function ActivateCard(){
    if(ActiveCards.length >= 2){
        if(ActiveCards[0].getAttribute('data-card-id') == ActiveCards[1].getAttribute('data-card-id')){
            for(const ActiveCard of ActiveCards){
                ActiveCard.style["background-color"] = "#333";
                ActiveCard.textContent = "";
            }

            ActiveCards = [];
            return;
        }

        for(const ActiveCard of ActiveCards){
            ActiveCard.style["background-color"] = "#444";
            ActiveCard.textContent = "";
            ActiveCard.addEventListener("click", ActivateCard);
        }
        ActiveCards = [];
    }

    this.style["background-color"] = "#111";
    this.textContent = this.getAttribute('data-card-id');
    ActiveCards.push(this);

    this.removeEventListener("click", ActivateCard);
}

for(const Card of Cards){
    Card.addEventListener("click", ActivateCard);
}