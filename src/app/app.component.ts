import { Component, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as Hammer from 'hammerjs';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

    @ViewChild(MatSidenav)
    public sidenav: MatSidenav;

  constructor(public authService: AuthService, public snackBar: MatSnackBar, elementRef: ElementRef) {
    const hammertime = new Hammer(elementRef.nativeElement, {});
        hammertime.on('panright', (ev) => {
            this.sidenav.open();
        });
        hammertime.on('panleft', (ev) => {
            this.sidenav.close();
        });
  }

  logout() {
    this.authService.logout();
  }

}
