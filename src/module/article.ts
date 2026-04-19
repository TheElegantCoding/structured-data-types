import type { SchemaImage, SchemaContext } from './base.js';
import type { SchemaOrganization } from './organization.js';

type SchemaPerson = {
  readonly name: string;
  readonly url?: string;
  readonly '@type': 'Person';
  readonly jobTitle?: string;
};

type SchemaAuthor = SchemaPerson | SchemaOrganization;

type SchemaArticle = {
  readonly headline: string;
  readonly description?: string;
  readonly datePublished: string;
  readonly dateModified?: string;
  readonly articleSection?: string;
  readonly '@context'?: SchemaContext;
  readonly keywords?: string | string[];
  readonly publisher?: SchemaOrganization;
  readonly author: SchemaAuthor | SchemaAuthor[];
  readonly '@type': 'Article' | 'NewsArticle' | 'BlogPosting';
  readonly image: string | string[] | SchemaImage | SchemaImage[];
};

export type { SchemaAuthor, SchemaPerson, SchemaArticle };