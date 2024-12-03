import type { RequestActions } from '@customtypes/member-request';
import type { RequestGenericInterface } from 'fastify/types/request';

export interface RequestClanRequest extends RequestGenericInterface {
  Querystring: {
    message?: string;
  };
  Params: {
    clanid: number;
  };
}

export interface UpdateClanRequest extends RequestGenericInterface {
  Querystring: {
    action: RequestActions;
  };
  Params: {
    clanid: number;
    requestid: string;
  };
}
