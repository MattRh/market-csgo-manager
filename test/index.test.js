const MarketManager = require('./../dist');
// const V1_METHODS = require('./stuff/methods/v1/names');
// const V2_METHODS = require('./stuff/methods/v2/names');


describe('Test class and methods are reachable', function () {
    const marketManager = new MarketManager({
        APIKey: process.APIKey
    });

    test('import class', () => {
        expect(marketManager instanceof MarketManager).toBe(true);
    });
})

//     test('test class method versions. Must have v1', () => {
//         expect(MARKET_PROVIDER).toHaveProperty('v1');
//     });
//
//     test('test class method versions. Must have v2', () => {
//         expect(MARKET_PROVIDER).toHaveProperty('v2');
//     });
//
//     V1_METHODS.map(methodName => {
//
//
//         test('test class to have v1 method ' + methodName, () => {
//             expect(MARKET_PROVIDER.v1).toHaveProperty(methodName);
//             expect(typeof MARKET_PROVIDER.v1[methodName]).toBe('function');
//         });
//
//     });
//
//     V1_METHODS.map(methodName => {
//
//         test('test class to have v2 method ' + methodName, () => {
//             expect(MARKET_PROVIDER.v1).toHaveProperty(methodName);
//             expect(typeof MARKET_PROVIDER.v1[methodName]).toBe('function');
//         });
//     });
//
// });
//
// describe('Test class options', () => {
//     require('./MarketAPI')();
// });
//
// /**
//  * Test fetching API
//  */
// describe('Test fetch API', () => {
//      require('./API/fetch')();
//
// });
//
