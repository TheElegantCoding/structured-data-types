import type { SchemaContext } from './base.js';

type SchemaSearchAction = {
  readonly target: string;
  readonly 'query-input': string;
  readonly '@type': 'SearchAction';
};

type SchemaWebSite<T> = {
  readonly url: string;
  readonly name: string;
  readonly '@type': 'WebSite';
  readonly mainEntity?: T | T[];
  readonly alternateName?: string[];
  readonly '@context'?: SchemaContext;
  readonly potentialAction?: SchemaSearchAction | SchemaSearchAction[];
};

export type { SchemaWebSite, SchemaSearchAction };