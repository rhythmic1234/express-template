
const request = require(`supertest`);
const BinanceAdapterRaw = require('../../src/services/BinanceAdapter');
jest.mock('../../src/services/BinanceAdapter');

const ERROR_TYPES = require('../../src/constants/ErrorTypes');
const app = require('../../src/app');
const { BrokerError } = require('../../src/models/CustomError');
const { PriceData } = require('../../src/models/Price');


const BASE_ROUTE = '/prices';
const parity = 'BTCUSDT';

describe('when error occurs', () => {

    it('should return error with correct info WHEN broker API returns an error', async () => {
        expect.assertions(1);
        
        BinanceAdapterRaw.mockImplementation(() => {
            return {
                fetchPrice: async (params) => {
                    return Promise.reject(new BrokerError(ERROR_TYPES.BROKER_ERROR));
                }
            };
        });

        return request(app)
        .get(`${BASE_ROUTE}/${parity}`)
        .expect(400)
        .then(resp => JSON.parse(resp.text).error)
        .then(error => expect(error).toStrictEqual(ERROR_TYPES.BROKER_ERROR));
    });

});

describe('when everything is ok', () => {

    it('should return data as expected', async () => {
        expect.assertions(1);
        
        BinanceAdapterRaw.mockImplementation(() => {
            return {
                fetchPrice: async (params) => {
                    return Promise.resolve(new PriceData({ parity, value: '1234', atDate: (new Date()).toISOString() }));
                }
            };
        });

        return request(app)
        .get(`${BASE_ROUTE}/${parity}`)
        .expect(200)
        .then(resp => JSON.parse(resp.text).data)
        .then(data => {
            expect(data).toMatchObject({
                parity,
                value: '1234',
                atDate: expect.any(String)
            })
        });
    });

});