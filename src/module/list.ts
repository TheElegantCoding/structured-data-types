import type { SchemaContext } from '@src/module/base.js';

type SchemaListItem = {
  readonly name?: string;
  readonly position: number;
  readonly '@type': 'ListItem';
  readonly item?: string | {
    readonly name: string;
    readonly '@id': string;
    readonly image?: string;
  };
};

type SchemaItemList = {
  readonly '@context'?: SchemaContext;
  readonly itemListElement: SchemaListItem[];
  readonly '@type': 'ItemList' | 'BreadcrumbList';
};

export type { SchemaItemList, SchemaListItem };