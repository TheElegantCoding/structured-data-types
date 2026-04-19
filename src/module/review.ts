import type { SchemaPerson } from '@src/module/article.js';
import type { SchemaContext } from '@src/module/base.js';
import type { SchemaItemList } from '@src/module/list.js';
import type { SchemaOrganization } from '@src/module/organization.js';

type SchemaRating = {
  readonly '@type': 'Rating';
  readonly ratingValue: number;
  readonly bestRating?: number;
  readonly worstRating?: number;
};

type SchemaAggregateRating = {
  readonly ratingValue: number;
  readonly ratingCount: number;
  readonly bestRating?: number;
  readonly reviewCount?: number;
  readonly worstRating?: number;
  readonly '@type': 'AggregateRating';
};

type SchemaReview = {
  readonly name?: string;
  readonly '@type': 'Review';
  readonly reviewBody?: string;
  readonly datePublished?: string;
  readonly reviewRating: SchemaRating;
  readonly '@context'?: SchemaContext;
  readonly positiveNotes?: SchemaItemList;
  readonly negativeNotes?: SchemaItemList;
  readonly author: SchemaPerson | SchemaOrganization;
  readonly itemReviewed?: {
    readonly name: string;
    readonly '@type': 'Product' | 'Organization' | 'CreativeWork' | 'LocalBusiness';
  };
};

export type { SchemaReview, SchemaRating, SchemaAggregateRating };