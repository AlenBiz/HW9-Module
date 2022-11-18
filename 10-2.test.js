const {getTheBest, data} = require('./10-2.js')


describe("testing module", () =>
it.each([
    [data, "Ivan"]
])("test"), (data, result) =>{
    expect(getTheBest(data)).toEqual(result);
});