import {expect} from 'chai';
import {ScoreKeeper} from './score-keeper';

describe('ScoreKeeper', () => {
    it('should print  30, Wedmore 32', () => {
        const expectedResult = `Cheddar = 30\tWedmore = 32`;
        const scoreKeeper = new ScoreKeeper();

        scoreKeeper.scoreSingleCheddar();
        scoreKeeper.scoreSingleCheddar();
        scoreKeeper.scoreSingleCheddar();
        const cheddar3Runs = `Cheddar = 3\tWedmore = 0`;
        expect(scoreKeeper.SCORECARD()).to.equal(cheddar3Runs);
        scoreKeeper.score_Four_Cheddar();
        scoreKeeper.scorecoupleCheddar();
        scoreKeeper.scorecoupleCheddar();
        scoreKeeper.scoreSingleCheddar();
        const cheddar12Runs = `Cheddar = 12\tWedmore = 0`;
        expect(scoreKeeper.SCORECARD()).to.equal(cheddar12Runs);
        scoreKeeper.score_Four_Cheddar();
        scoreKeeper.score_Four_Cheddar();
        scoreKeeper.scoreTrebleCheddar();
        scoreKeeper.scorecoupleCheddar();
        scoreKeeper.scorecoupleCheddar();
        scoreKeeper.scorecoupleCheddar();
        scoreKeeper.scoreSingleCheddar();
        const cheddar30Runs = `Cheddar = 30\tWedmore = 0`;
        expect(scoreKeeper.SCORECARD()).to.equal(cheddar30Runs);

        scoreKeeper.scoreSingleWedmore();
        scoreKeeper.scoreCoupleWedmora();
        scoreKeeper.score_Four_Wedmore();
        scoreKeeper.scoreCoupleWedmora();
        scoreKeeper.score_Four_Wedmore();
        scoreKeeper.scoreSingleWedmore();
        scoreKeeper.score_Four_Wedmore();
        scoreKeeper.scoreCoupleWedmora();
        scoreKeeper.scoreSingleWedmore();
        scoreKeeper.score_Four_Wedmore();
        scoreKeeper.score_Four_Wedmore();
        scoreKeeper.scoreTrebleWedmore();
        expect(scoreKeeper.SCORECARD()).to.equal(expectedResult);
    });
});
