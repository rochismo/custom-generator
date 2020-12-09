import * as utils from '../src/utils';

describe('Test test', () => {
    it("should return a metadata object", () => {
        const data = utils.getMetadata();
        return !!data;
    })
})