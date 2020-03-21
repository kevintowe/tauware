export interface OAuthClient {
  clientId: string;
  clientSecret: string;
  environment: 'sandbox' | 'production';
  redirectUri: string;
  logging: boolean;
}

// export type Scopes = 'accounting' | 'o'

export interface AuthToken {
  token_type: string;
  access_token: string;
  expires_in: number;
  refresh_token: string;
  x_refresh_token_expires_in: number;
  id_token?: string;
  createdAt?: any;
}
