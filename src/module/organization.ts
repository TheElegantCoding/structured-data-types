import type { SchemaImage, SchemaContext, SchemaAddress } from './base.js';

type SchemaQuantitativeValue = {
  readonly value?: number;
  readonly minValue?: number;
  readonly maxValue?: number;
  readonly '@type': 'QuantitativeValue';
};

type SchemaContactPoint = {
  readonly email: string;
  readonly telephone: string;
  readonly contactType?: string;
  readonly '@type': 'ContactPoint';
};

type SchemaOrganization = {
  readonly url: string;
  readonly name: string;
  readonly duns?: string;
  readonly email?: string;
  readonly vatID?: string;
  readonly leiCode?: string;
  readonly sameAs?: string[];
  readonly telephone?: string;
  readonly description: string;
  readonly '@context'?: SchemaContext;
  readonly logo: SchemaImage | SchemaImage[];
  readonly address?: SchemaAddress | SchemaAddress[];
  readonly contactPoint?: SchemaContactPoint | SchemaContactPoint[];
  readonly '@type': 'Corporation' | 'Organization' | 'EducationalOrganization';
};

export type { SchemaOrganization, SchemaContactPoint, SchemaQuantitativeValue };