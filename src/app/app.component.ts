import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';

import { DialogComponent } from './dialog/dialog.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appointment Scheduler';
  slots = {};

  constructor(private dialog: MatDialog, private data: DataService) {
    this.slots = data.slots;
  }

  openDialog(id: number) {
    this.data.getSched().subscribe(val => {
      this.slots = val;
    });
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(value => {
      console.log(`Dialog sent: ${value}`);
      if (value.name && value.phone) {
        this.slots[id].color = 'red';
      }
    });
  }
}
