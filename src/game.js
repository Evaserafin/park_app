import React from "react";
import './game.css';


const memoryGame = {
    tileCount: 20, //liczba zdjęć
    tileOnRow: 5, //liczba zdjęć na rząd
    divBoard: null, //div z planszą gry
    divScore: null, //div z wynikiem gry
    tiles: [], //tutaj trafi wymieszana tablica zdjęć
    tilesChecked: [], //zaznaczone zdjęcia
    moveCount: 0, //liczba ruchów
    tilesImg: [ //grafiki dla zdjęć
        "memorygame/foto_1.jpg",
        "memorygame/foto_2.jpg",
        "memorygame/foto_3.jpg",
        "memorygame/foto_4.jpg",
        "memorygame/foto_5.jpg",
        "memorygame/foto_6.jpg",
        "memorygame/foto_7.jpg",
        "memorygame/foto_8.jpg",
        "memorygame/foto_9.jpg",
        "memorygame/foto_10.jpg",
    ],
    canGet: true, //czy można klikać na kafelki
    tilePairs: 0, //liczba dopasowanych kafelków

    tileClick(e) {
        if (this.canGet) {
            //jeżeli jeszcze nie pobraliśmy 1 elementu
            //lub jeżeli index tego elementu nie istnieje w pobranych...
            if (!this.tilesChecked[0] || (this.tilesChecked[0].dataset.index !== e.target.dataset.index)) {
                this.tilesChecked.push(e.target);
                e.target.style.backgroundImage = `url(${this.tilesImg[e.target.dataset.cardType]})`;
            }

            if (this.tilesChecked.length === 2) {
                this.canGet = false;

                if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                    setTimeout(() => this.deleteTiles(), 500);
                } else {
                    setTimeout(() => this.resetTiles(), 500);
                }

                this.moveCount++;
                this.divScore.innerText = this.moveCount;
            }
        }
    },

    deleteTiles() {
        this.tilesChecked.forEach(el => {
            const emptyDiv = document.createElement("div");
            el.after(emptyDiv);
            el.remove();
        });

        this.canGet = true;
        this.tilesChecked = [];

        this.tilePairs++;

        if (this.tilePairs >= this.tileCount / 2) {
            alert("Udało ci się odgadnąć wszystkie obrazki");
        }
    },

    resetTiles() {
        this.tilesChecked.forEach(el => el.style.backgroundImage = "");
        this.tilesChecked = [];
        this.canGet = true;
    },
// counter
    startTimer() {
        this.gameTimer = document.querySelector(".game-timer");
        this.gameTimer.innerHTML = "";

        this.gameTime = 0;

        if (!this.gameTimerInterval) {
            this.gameTimerInterval = setInterval(() => {
                this.gameTime++;
                if (this.gameTime > 30) {
                    this.gameOver();
                    clearInterval(this.gameTimerInterval);
                    return;
                }

                this.gameTimer.innerHTML = `<h1>Czas gry: ${this.gameTime}</h1>`;
            }, 1000);
        }
    },

    gameOver() {
        //let gameOver = document.querySelector(".game-board");
        //gameOver.innerHTML = '';
    },
//audio here
    startGame() {
        PlayGameAudio();

        this.startTimer();

        //czyścimy planszę
        this.divBoard = document.querySelector(".game-board");
        this.divBoard.innerHTML = "";

        //czyścimy planszę z ruchami
        this.divScore = document.querySelector(".game-score");
        this.divScore.innerHTML = 0;

        //czyścimy zmienne (bo gra może się zacząć ponownie)
        this.tiles = [];
        this.tilesChecked = [];
        this.moveCount = 0;
        this.canGet = true;
        this.tilePairs = 0;

        //generujemy tablicę numerów klocków (parami)
        for (let i = 0; i < this.tileCount; i++) {
            this.tiles.push(Math.floor(i / 2));
        }

        //i ją mieszamy
        for (let i = this.tileCount - 1; i > 0; i--) {
            const swap = Math.floor(Math.random() * i);
            const tmp = this.tiles[i];
            this.tiles[i] = this.tiles[swap];
            this.tiles[swap] = tmp;
        }

        for (let i = 0; i < this.tileCount; i++) {
            const tile = document.createElement("div");
            tile.classList.add("game-tile");
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[i];
            tile.dataset.index = i;

            tile.addEventListener("click", e => this.tileClick(e));
        }
    }
}

//start of audio function...
function PlayGameAudio() {
    const audio = new Audio('sound/sound2.mp3');
    audio.play();
    audio.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
}

// end of audio function...
const Game = () => {
    return (
        <main className="game-board-body">
            <div className="game">
                <div className="game-board">
                </div>

                <div className="game-score">
                    0
                </div>
                <div className="game-timer"></div>

                <p className="line-2">Znajdź takie same pary zdjęć, kliknij i połącz je :)</p>
                <button className="button-bg" onClick={() => memoryGame.startGame()}>Start</button>

            </div>
        </main>
    );


}
export default Game;
