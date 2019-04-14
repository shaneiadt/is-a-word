const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const { getDefinition } = require('../index');

chai.use(chaiAsPromised);

const expect = chai.expect;
const should = chai.should;

describe('Is A Word Test Suite Package', () => {

    it('should recieve exactly one argument', async () => {
        return await expect(getDefinition()).to.eventually.be.rejected;
    });
    
    it('should expect an argument of type string', async () => {
        return await expect(getDefinition(69)).to.eventually.be.rejected;
    });

})