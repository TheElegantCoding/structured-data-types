import type { SchemaOffer, SchemaAggregateOffer } from '@src/module/product.js';
import type { SchemaAggregateRating } from '@src/module/review.js';

type SchemaSoftwareApplication = {
  readonly name: string;
  readonly operatingSystem: string;
  readonly applicationCategory: string;
  readonly aggregateRating?: SchemaAggregateRating;
  readonly offers?: SchemaOffer | SchemaAggregateOffer;
  readonly '@type': 'WebApplication' | 'SoftwareApplication';
};

export type { SchemaSoftwareApplication };