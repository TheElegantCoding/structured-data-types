import type { SchemaReview, SchemaAggregateRating } from '@src/module/review.js';

import type { SchemaImage, SchemaContext } from './base.js';

type SchemaItemAvailability =
  | 'https://schema.org/InStock'
  | 'https://schema.org/SoldOut'
  | 'https://schema.org/PreOrder'
  | 'https://schema.org/BackOrder'
  | 'https://schema.org/OutOfStock'
  | 'https://schema.org/OnlineOnly'
  | 'https://schema.org/InStoreOnly'
  | 'https://schema.org/Discontinued'
  | 'https://schema.org/LimitedAvailability';

type SchemaBrand = {
  readonly name: string;
  readonly '@type': 'Brand';
};

type SchemaOffer = {
  readonly url?: string;
  readonly price: number;
  readonly '@type': 'Offer';
  readonly priceCurrency: string;
  readonly priceValidUntil?: string;
  readonly availability?: SchemaItemAvailability;
};

type SchemaAggregateOffer = {
  readonly lowPrice: number;
  readonly highPrice?: number;
  readonly offerCount?: number;
  readonly priceCurrency: string;
  readonly offers?: SchemaOffer[];
  readonly '@type': 'AggregateOffer';
};

type SchemaProduct = {
  readonly name: string;
  readonly sku?: string;
  readonly mpn?: string;
  readonly '@type': 'Product';
  readonly brand?: SchemaBrand;
  readonly description?: string;
  readonly '@context'?: SchemaContext;
  readonly image?: SchemaImage | SchemaImage[];
  readonly review?: SchemaReview | SchemaReview[];
  readonly aggregateRating?: SchemaAggregateRating;
  readonly offers?: SchemaOffer | SchemaAggregateOffer;
};

export type {
  SchemaOffer,
  SchemaBrand,
  SchemaProduct,
  SchemaAggregateOffer,
  SchemaItemAvailability
};