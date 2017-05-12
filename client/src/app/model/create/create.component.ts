import { Component, OnInit } from '@angular/core';
import { NoteExtended } from '../../shared/extended/Note.extended';
import { Note } from '../../shared/sdk/models/Note';
import { NoteApi } from '../../shared/sdk/services/custom/Note';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit  {
	private note    : any;
	constructor(private noteApi: NoteApi) {
		this.noteApi = noteApi;
		this.getFilterNote('string1');
	}

	getFilterNote(title: string): void {
		this.noteApi
		.find({
			where: {
				title: title
			}
		}).subscribe((note: Note[]) => {
			this.note = note;
		});
	}

	ngOnInit() {
	}

}
