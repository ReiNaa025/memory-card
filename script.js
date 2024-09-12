const cardValues = ['❤️', '👾', '🐼', '👻', '🌕', '🌑', '🐻‍❄️', '💖'];
const gameBoard = document.getElementById('gameBoard');
let cards = [...cardValues, ...cardValues];
let flippedCards = [];
let matchedPairs = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function createCard(value) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.dataset.value = value;
    card.addEventListener('click', flipCard);
    return card;
}

function setupGame() {
    shuffle(cards);
    gameBoard.innerHTML = '';
    cards.forEach(value => {
        gameBoard.appendChild(createCard(value));
    });
}

function flipCard() {
    const card = this;

    if (flippedCards.length === 2 || card.classList.contains('flipped')) return;

    card.classList.add('flipped');
    card.textContent = card.dataset.value;
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkForMatch, 1000);
    }
}

function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.value === card2.dataset.value) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedPairs++;
        if (matchedPairs === cardValues.length) {
            alert('Horee Kamu Menang!! Tapi Hadiahmu Lagi Disita Oleh Pihak Beacukai.. Bayar 10k Untuk Mengambil Hadiahmu :3');
        }
    } else {
        card1.classList.remove('flipped');
        card2.classList.remove('flipped');
        card1.textContent = '';
        card2.textContent = '';
    }
    flippedCards = [];
}

setupGame();
