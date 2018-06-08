import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-modal-template',
  templateUrl: 'modal.html',
})
export class TemplateModelComponent<T> {
    constructor(public dialogRef: MatDialogRef<TemplateModelComponent<T>>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }
}
