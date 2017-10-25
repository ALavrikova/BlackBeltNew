import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class QuestionService {

  constructor(
        private _http: Http
    ) { }


    createQuestion(questioninfo) {
	    return this._http.post('/questions', questioninfo)
	    .map((response: Response) => response.json())
	    .toPromise();
    }

    createAnswer(answerinfo) {
	    return this._http.post('/answers', answerinfo)
	    .map((response: Response) => response.json())
	    .toPromise();
    }

    displayQuestions() {
        return this._http.get('/questions')
        .map((response: Response) => response.json())
        .toPromise();
  
    }

    // deleteQuestion(id) {
    //     return this._http.delete(`/questions/${id}`)
    //     .map((response: Response) => response.json())
    //     .toPromise();

    // }

    getAnswers(id) {
        return this._http.get(`/answers/${id}`)
        .map((response: Response) => response.json())
        .toPromise();

    }

    getQuestion(id) {
        return this._http.get(`/questions/${id}`)
        .map((response: Response) => response.json())
        .toPromise();

    }

    like(id) {
        return this._http.put(`/answers`, id)
        .map((response: Response) => response.json())
        .toPromise();

    }

    getAnswer(id) {
        return this._http.get(`/answers/one/${id}`)
        .map((response: Response) => response.json())
        .toPromise();
    }

    login(user) {
        return this._http.post('/users', user)
        .map((response: Response) => response.json())
        .toPromise();
    }

    logout() {
        return this._http.get('/users/logout')
        .map((response: Response) => response.json())
        .toPromise();
    }

    getID() {
        return this._http.get('/users/one')
        .map((response: Response) => response.json())
        .toPromise();
    }

}





















}