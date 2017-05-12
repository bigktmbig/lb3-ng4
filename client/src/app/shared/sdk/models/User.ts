/* tslint:disable */

export interface UserInterface {
  realm?: string;
  username?: string;
  password: string;
  email: string;
  emailVerified?: boolean;
  verificationToken?: string;
  id?: number;
  accessTokens?: Array<any>;
}

export class User implements UserInterface {
  realm: string;
  username: string;
  password: string;
  email: string;
  emailVerified: boolean;
  verificationToken: string;
  id: number;
  accessTokens: Array<any>;
  constructor(instance?: User) {
    Object.assign(this, instance);
  }
}
