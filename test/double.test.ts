import { expect } from 'chai';
import { double } from '../src/double';

const TIMEOUT_MS = 30000;

describe('file "double"', () => {

    describe('arrow function "double"', () => {

        it('should produce "4" when given "2".', () => {
            expect(double(2)).to.eql(4);
        }).timeout(TIMEOUT_MS);

    });

});
