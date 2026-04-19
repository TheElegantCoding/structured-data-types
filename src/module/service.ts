import type { SchemaListItem } from '@src/module/list.js';
import type { SchemaOrganization } from '@src/module/organization.js';

type SchemaService = {
  readonly name: string;
  readonly '@type': 'Service';
  readonly serviceType?: string;
  readonly provider: SchemaOrganization;
  readonly areaServed?: string | string[];
  readonly hasOfferCatalog?: {
    readonly name: string;
    readonly '@type': 'OfferCatalog';
    readonly itemListElement: SchemaListItem[];
  };
};

export type { SchemaService };