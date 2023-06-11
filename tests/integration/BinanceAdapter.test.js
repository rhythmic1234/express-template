const BinanceAdapter = require('../../src/services/BinanceAdapter');
const { PriceData } = require('../../src/models/Price');


describe('fetching price', () => {
    
    it('should fetch price from public markPrice API', async () => {
        expect.assertions(2);
    
        const adapter = new BinanceAdapter();
        const data = await adapter.fetchPrice({ parity: 'BTCUSDT' });
        expect(data).toBeInstanceOf(PriceData);
        expect(data).toMatchObject({
            parity: 'BTCUSDT',
            value: expect.any(Number),
            atDate: expect.any(Date),
        });
    });

});
