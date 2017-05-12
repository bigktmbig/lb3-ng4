/* tslint:disable */

export interface NoteInterface {
  title: string;
  content?: string;
  id?: number;
}

export class Note implements NoteInterface {
  title: string;
  content: string;
  id: number;
  constructor(instance?: Note) {
    Object.assign(this, instance);
  }
}
