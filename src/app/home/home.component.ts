import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogConfirmComponent } from '../_fragments/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(public dialog: MatDialog, private route: Router) {}

  ngOnInit(): void {}

  openDialog() {
    let dialogRef = this.dialog.open(DialogConfirmComponent, {
      data: 'signOut',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        console.log('delete');
        this.route.navigate(['/login']);
      }
    });
  }
}
