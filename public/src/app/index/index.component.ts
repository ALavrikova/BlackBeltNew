import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private user = {
            name: ''
        };

    private myerr;

    constructor() { }

    ngOnInit() { }

    login() {
        this._questionService.login(this.user)
        .then(data => {
            console.log(data);
            this.router.navigateByUrl('/');
        })
        .catch(err => this.myerr = err);
    }
}






