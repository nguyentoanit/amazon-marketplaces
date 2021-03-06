import {
  AmazonMarketplace,
  AmazonMarketplaceAdvertisingTimeZone,
  AmazonMarketplaceAdvertisingCountryCode,
  AmazonMarketplaceAdvertisingCurrency,
} from '../amazon-marketplace'
import { DE } from './DE'

if (!DE.advertising) {
  throw new Error('Missing DE.advertising')
}

export const GB = new AmazonMarketplace({
  countryCode: AmazonMarketplaceAdvertisingCountryCode.GB,
  currency: AmazonMarketplaceAdvertisingCurrency.GBP,
  id: 'A1F83G8C2ARO7P',
  name: 'United Kingdom',
  uri: 'https://www.amazon.co.uk',
  webServiceUri: DE.webServiceUri,
  advertising: {
    uri: DE.advertising.uri,
    bids: {
      sponsoredBrands: {
        min: 10,
        max: 3100,
      },
      sponsoredProducts: {
        min: 2,
        max: 100000,
      },
    },
    timeZone: AmazonMarketplaceAdvertisingTimeZone.EUROPE_LONDON,
  },
})
