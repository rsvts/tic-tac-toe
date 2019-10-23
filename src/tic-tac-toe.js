class TicTacToe {

    constructor() {

        this.x = 'x';
        this.o = 'o';
        this.current = 'x';
        this.winner = null;
        this.gameField = Array(3).fill().map(() => Array(3).fill(null));
    }

    getCurrentPlayerSymbol() {

        return this.current;
    }

    nextTurn(row, col) {

        if (!this.gameField[row][col]) {

            this.gameField[row][col] = this.getCurrentPlayerSymbol();

            this.current = (this.current == this.o) ? this.x : this.o;

        }

        return true;
    }

    isFinished() {

        return this.noMoreTurns() || !!this.getWinner();
    }

    getWinner() {

        for (let i = 0; i < this.gameField.length; i++) {

            if (this.gameField[i][0] === this.gameField[i][1] &&
                this.gameField[i][0] === this.gameField[i][2]) {

                return this.winner = this.gameField[i][0];
            }

            if (this.gameField[0][i] === this.gameField[1][i] &&
                this.gameField[0][i] === this.gameField[2][i]) {

                return this.winner = this.gameField[0][i];

            }

        }

        if (this.gameField[0][0] === this.gameField[1][1] &&
            this.gameField[0][0] === this.gameField[2][2]) {

            return this.winner = this.gameField[0][0];
        }


        if (this.gameField[2][0] === this.gameField[1][1] &&
            this.gameField[2][0] === this.gameField[0][2]) {

            return this.winner = this.gameField[2][0];
        }

        return this.winner;

    }

    noMoreTurns() {

        return !this.gameField.find((item) => item.includes(null));
    }

    isDraw() {

        return this.isFinished() && !this.getWinner();

    }

    getFieldValue(row, col) {

        return this.gameField[row][col];
    }
}

module.exports = TicTacToe;