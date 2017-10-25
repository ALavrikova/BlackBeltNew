import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent implements OnInit {

	private newquestion = {
    question: '',
    description: '',
    creator: ''
  };
   private name: string;

  constructor() { }

  ngOnInit() {
  	this.getID()
  }

  getID() {
    this._questionService.getID()
    .then(data => this.name = data.name)
    .catch(err => {
        console.log(err);
        this.router.navigateByUrl('/index');
    });
  }

  createQuestion() {
    this.newquestion.creator = this.name;
    this._questionService.create(this.newquestion)
    .then(data => {
        this.router.navigateByUrl('/');
    })
    .catch(err => console.log(err));
  }

}

