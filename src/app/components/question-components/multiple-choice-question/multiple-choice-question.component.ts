import { Component, OnInit } from '@angular/core';
import { MultipleChoiceQuestion } from '../../../data-model/multiple-choice-question';



@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.scss']
})
export class MultipleChoiceQuestionComponent implements OnInit {
  public selected: string;

  public question: MultipleChoiceQuestion = MultipleChoiceQuestion.fromJson({
    question: 'How many licks does it take to get to the center of a tootsie pop?',
    answers: [
      '1',
      '2',
      '3',
      '4',
    ],
    correctAnswerIndex: 3,
    randomizeAnswers: true
  });

  constructor() { }

  ngOnInit() {
   }

}
