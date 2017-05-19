import { Component } from '@angular/core';
import {MdDialog} from '@angular/material';
import {DialogExampleComponent} from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(public dialog: MdDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);
    dialogRef.afterClosed().subscribe(result => {
      alert(result);
    });
  }
}
