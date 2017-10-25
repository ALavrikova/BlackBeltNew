import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {

  private newanswer = {
    answer: '',
    details: '',
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

  createAnswer() {
    this.newanswer.creator = this.name;
    this._questionService.create(this.newanswer)
    .then(data => {
        this.router.navigateByUrl('/');
    })
    .catch(err => console.log(err));
  }
}
