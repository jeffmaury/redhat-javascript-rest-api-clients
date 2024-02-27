/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectReference } from './ObjectReference';
export type QuotaRules = (ObjectReference & {
  availability_zone?: string;
  billing_model?: QuotaRules.billing_model;
  byoc?: string;
  cloud?: string;
  cost: number;
  name?: string;
  product?: string;
  quota_id?: string;
  type?: string;
});
export namespace QuotaRules {
  export enum billing_model {
    STANDARD = 'standard',
    MARKETPLACE = 'marketplace',
    MARKETPLACE_AWS = 'marketplace-aws',
    MARKETPLACE_RHM = 'marketplace-rhm',
    MARKETPLACE_AZURE = 'marketplace-azure',
    MARKETPLACE_GCP = 'marketplace-gcp',
  }
}

