import { AmazonMarketplace } from '../amazon-marketplace'

export const US = new AmazonMarketplace({
  countryCode: 'US',
  currency: 'USD',
  id: 'ATVPDKIKX0DER',
  name: 'United States',
  uri: 'https://www.amazon.com',
  webServiceUri: 'https://mws.amazonservices.com',
  advertising: {
    uri: 'https://advertising-api.amazon.com',
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 4900,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
  },
})