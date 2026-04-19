import type { SchemaPerson, SchemaArticle } from '@src/module/article.js';
import type {
  SchemaImage,
  SchemaAuthor,
  SchemaAddress,
  SchemaContext,
  SchemaVideoObject
} from '@src/module/base.js';
import type { SchemaAnswer, SchemaFAQPage, SchemaQuestion } from '@src/module/faq.js';
import type { SchemaListItem, SchemaItemList } from '@src/module/list.js';
import type { SchemaLocalBusiness, SchemaGeoCoordinates, SchemaOpeningHoursSpecification } from '@src/module/local_business.js';
import type { SchemaContactPoint, SchemaOrganization, SchemaQuantitativeValue } from '@src/module/organization.js';
import type {
  SchemaOffer,
  SchemaBrand,
  SchemaProduct,
  SchemaAggregateOffer,
  SchemaItemAvailability
} from '@src/module/product.js';
import type { SchemaRating, SchemaReview, SchemaAggregateRating } from '@src/module/review.js';
import type { SchemaService } from '@src/module/service.js';
import type { SchemaSoftwareApplication } from '@src/module/software_application.js';
import type { SchemaWebSite, SchemaSearchAction } from '@src/module/website.js';

export type {
  SchemaOffer,
  SchemaBrand,
  SchemaImage,
  SchemaReview,
  SchemaAuthor,
  SchemaPerson,
  SchemaAnswer,
  SchemaRating,
  SchemaProduct,
  SchemaWebSite,
  SchemaService,
  SchemaArticle,
  SchemaContext,
  SchemaAddress,
  SchemaFAQPage,
  SchemaQuestion,
  SchemaItemList,
  SchemaListItem,
  SchemaVideoObject,
  SchemaOrganization,
  SchemaContactPoint,
  SchemaSearchAction,
  SchemaLocalBusiness,
  SchemaGeoCoordinates,
  SchemaAggregateOffer,
  SchemaAggregateRating,
  SchemaItemAvailability,
  SchemaQuantitativeValue,
  SchemaSoftwareApplication,
  SchemaOpeningHoursSpecification
};