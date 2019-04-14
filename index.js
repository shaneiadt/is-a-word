const axios = require('axios');
const _ = require('lodash');

const getDefinition = async (word) => {
    if (_.isEmpty(word)) throw new ReferenceError('Exactly one argument is required.');
    if (!_.isString(word)) throw new TypeError('Argument must be of type string.');

    try {
        const response = await axios.get(`https://googledictionaryapi.eu-gb.mybluemix.net/?define=${word}`).catch(e => null);
        if (!response) return null;
        return response.data;
    } catch (e) {
        throw Error(e);
    }
}

module.exports = {
    getDefinition
};