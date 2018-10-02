import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-tournament',
  templateUrl: './create-tournament.component.html',
  styleUrls: ['./create-tournament.component.scss']
})
export class CreateTournamentComponent implements OnInit {

  createTorunamentForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createTorunamentForm = this.fb.group({
      name: ['', [
        Validators.required,
      ]],
      oneDay: true,
      startDate: ['', [
        Validators.required,
      ]],
      endDate: '',
    }, {validator: this.dateOrder('startDate', 'endDate', 'oneDay')});

    this.createTorunamentForm.valueChanges.subscribe(console.log);
  }

  dateOrder(startDateKey: string, endDateKey: string, oneDayKey: string ) {
    return (group: FormGroup): {[key: string]: any} => {
      const startDate = group.controls[startDateKey].value;
      const endDate = group.controls[endDateKey].value;
      const oneDay = group.controls[oneDayKey].value;

      console.log(oneDay);

      if (oneDay) {
        console.log('yo');
        return {dateOrder: true};
      } else {
        console.log('hi');
        if ( new Date(startDate).getTime() >= new Date(endDate).getTime() ) {
          return {
            dateOrder: true
          };
        }
      }
    };
  }

  get oneDay() {
    return this.createTorunamentForm.controls['oneDay'].value;
  }

}
