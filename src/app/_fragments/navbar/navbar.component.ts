import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  opened: boolean = true;

  @Output() openedSideNavData: EventEmitter<boolean> = new EventEmitter();

  constructor(public dialog: MatDialog, private route: Router) {}

  ngOnInit(): void {}

  openedSideNav() {
    this.openedSideNavData.emit(this.opened);
  }

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
