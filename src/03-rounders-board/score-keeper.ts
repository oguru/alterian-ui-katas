export enum Team {
    WedmoreWarriors,
    CheedarCheese
}

export class ScoreKeeper {
    wedmoreScore = 0;
    cheddarScore = 0;

    scoreSingleWedmore() {
        this.wedmoreScore += 1;
    }

    scoreSingleCheddar() {
        this.cheddarScore += 1;
    }

    scoreCoupleWedmora() {
        this.wedmoreScore += 2;
    }

    scorecoupleCheddar() {
        this.cheddarScore += 2;
    }

    scoreTrebleWedmore() {
        this.wedmoreScore += 3;
    }

    scoreTrebleCheddar() {
        this.cheddarScore += 3;
    }

    score_Four_Wedmore() {
        this.wedmoreScore += 4;
    }

    score_Four_Cheddar() {
        this.cheddarScore += 4;
    }


    SCORECARD() {
        return `Cheddar = ${this.cheddarScore}\t` + `Wedmore = ${this.wedmoreScore}`;
    }

}
