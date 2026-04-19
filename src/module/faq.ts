import type { SchemaContext } from '@src/module/base.js';

type SchemaAnswer = {
  readonly text: string;
  readonly '@type': 'Answer';
};

type SchemaQuestion = {
  readonly name: string;
  readonly '@type': 'Question';
  readonly acceptedAnswer: SchemaAnswer;
};

type SchemaFAQPage = {
  readonly '@type': 'FAQPage';
  readonly '@context'?: SchemaContext;
  readonly mainEntity: SchemaQuestion | SchemaQuestion[];
};

export type { SchemaAnswer, SchemaFAQPage, SchemaQuestion };