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

  fillerContent = Array.from({length: 4}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

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
