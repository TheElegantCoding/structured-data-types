type SchemaContext = 'https://schema.org';

type SchemaImage = | string
  | {
    readonly url: string;
    '@type': 'ImageObject';
    readonly width?: number;
    readonly height?: number;
  };

type SchemaVideoObject = {
  readonly name: string;
  readonly embedUrl?: string;
  readonly duration?: string;
  readonly uploadDate: string;
  readonly description: string;
  readonly contentUrl?: string;
  readonly '@type': 'VideoObject';
  readonly thumbnailUrl: string | string[];
};

type SchemaAuthor = {
  readonly name: string;
  readonly url?: string;
  readonly jobTitle?: string;
  '@type': 'Person' | 'Organization';
};

type SchemaAddress = {
  '@type': 'PostalAddress';
  readonly postalCode?: string;
  readonly streetAddress?: string;
  readonly addressRegion?: string;
  readonly addressCountry: string;
  readonly addressLocality?: string;
};

export type {
  SchemaImage,
  SchemaAuthor,
  SchemaContext,
  SchemaAddress,
  SchemaVideoObject
};