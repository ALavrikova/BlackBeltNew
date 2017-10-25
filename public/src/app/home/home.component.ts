import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

    private name;
    private subscription;
    private answers;
    private questionid;
    private question: Object;
    private likeoption;


  	constructor() { }

  	ngOnInit() {
  	 this.getID();

        this.subscription = this._activatedRoute.paramMap
        .switchMap(params => this.questionid = params.get('id'))
        .subscribe();

        this.getAnswers();
        this.getQuestion();
  }

   	ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    getAnswer(id) {
        this._questionService.getAnswer(id)
        .then(data => {
            this.likeoption = data;
            return this.like();
        })
        .catch(err => console.log(err));
    }

   getAnswers() {
        this._questionService.getAnswers(this.questionid)
        .then(answers => this.answers = answers)
        .catch(err => console.log(err));
    }

     getQuestion() {
        this._questionService.getQuestion(this.questionid)
        .then(question => this.question = question)
        .catch(err => console.log(err));
    }

    like() {
        this._questionService.like(this.likeoption)
        .then(data => {
            console.log(data);
            this.getAnswers();
        })
        .catch(err => console.log(err));
    }


    getID() {
        this._questionService.getID()
        .then(data => this.name = data.name)
        .catch(err => {
            console.log(err);
            this.router.navigateByUrl('/index');
        });
    }

    searchQuestions() {
        console.log(this.input.key);
        this.displayquestions = this.questions.filter(question => {
            return question.question.includes(this.input.key);
        });
    }
}

  






