import { Note } from '../sdk/models';

export class NoteExtended extends Note {
	constructor(json: Note) { super(json); }

	customFunction() {
		return `${this.title}: ${this.content}`;
	}
}