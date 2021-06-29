import {expect} from "chai";
import {printStatement} from './account';

describe('Account', () => {
    describe('printStatement', () => {
        it('Receipt 2 transactions', () => {
            const expectedResult = `Date\tAmount\tBalance\n` +
                `12/01/2020\t+500\t500\n` +
                `13/01/2020\t-250\t250\n`;

            const actualResult = printStatement();

            expect(actualResult).to.equal(expectedResult);
        });
    });
});
