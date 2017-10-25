import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';
import { NewAnswerComponent } from './new-answer/new-answer.component';
import { NewQuestionComponent } from './new-question/new-question.component';
import { QaComponent } from './qa/qa.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'index', component: IndexComponent },

  { path: 'new_question', component: NewQuestionComponent },

  { path: 'question/:id/new_answer', component: NewAnswerComponent },

  { path: 'question/:id', component: QaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
