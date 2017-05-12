import { User } from '../sdk/models';

export class UserExtended extends User {
	constructor(json: User) { super(json); }

	customFunction() {
		return `${this.username}: ${this.email}`;
	}
}