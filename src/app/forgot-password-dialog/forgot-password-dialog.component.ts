import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from '../auth.service';

export interface ForgotPasswordData {
  email: string;
}

@Component({
  selector: 'app-forgot-password-dialog',
  templateUrl: './forgot-password-dialog.component.html',
})
export class ForgotPasswordDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ForgotPasswordDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ForgotPasswordData,
    private auth: AuthService) {}

  cancel(): void {
    this.dialogRef.close();
  }

  resetPassword() {
    this.auth.resetPassword(this.data.email);
    this.dialogRef.close();
  }

}
