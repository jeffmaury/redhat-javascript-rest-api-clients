/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ObjectReference } from './ObjectReference';
export type RoleBinding = (ObjectReference & {
  account?: ObjectReference;
  account_group?: ObjectReference;
  config_managed?: boolean;
  created_at?: string;
  managed_by?: RoleBinding.managed_by;
  organization?: ObjectReference;
  role?: ObjectReference;
  subscription?: ObjectReference;
  type?: RoleBinding.type;
  updated_at?: string;
});
export namespace RoleBinding {
  export enum managed_by {
    CONFIG = 'Config',
    USER = 'User',
    RBAC = 'RBAC',
  }
  export enum type {
    APPLICATION = 'Application',
    SUBSCRIPTION = 'Subscription',
    ORGANIZATION = 'Organization',
  }
}

