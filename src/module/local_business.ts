import type { SchemaImage, SchemaAddress } from '@src/module/base.js';
import type { SchemaOrganization } from '@src/module/organization.js';
import type { SchemaReview, SchemaAggregateRating } from '@src/module/review.js';

type SchemaDayOfWeek =
  | 'Monday' | 'Friday' | 'Sunday' | 'Tuesday'
  | 'Thursday' | 'Saturday' | 'Wednesday';

type SchemaGeoCoordinates = {
  readonly latitude: number;
  readonly longitude: number;
  readonly '@type': 'GeoCoordinates';
};

type SchemaOpeningHoursSpecification = {
  readonly opens: string;
  readonly closes: string;
  readonly '@type': 'OpeningHoursSpecification';
  readonly dayOfWeek: SchemaDayOfWeek | SchemaDayOfWeek[];
};

type SchemaLocalBusiness = SchemaOrganization & {
  readonly telephone: string;
  readonly priceRange: string;
  readonly address: SchemaAddress;
  readonly geo?: SchemaGeoCoordinates;
  readonly image: SchemaImage | SchemaImage[];
  readonly review?: SchemaReview | SchemaReview[];
  readonly aggregateRating?: SchemaAggregateRating;
  readonly openingHoursSpecification?: SchemaOpeningHoursSpecification[];
  readonly '@type': 'Dentist' | 'Restaurant' | 'LocalBusiness' | 'MedicalBusiness';
};

export type { SchemaLocalBusiness, SchemaGeoCoordinates, SchemaOpeningHoursSpecification };
