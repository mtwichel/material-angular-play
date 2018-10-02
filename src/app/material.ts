import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';



import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatDialogModule,
    ],
    exports: [
        MatButtonModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatNativeDateModule,
        MatProgressSpinnerModule,
        MatDialogModule,
    ],
})
export class MaterialModule { }
