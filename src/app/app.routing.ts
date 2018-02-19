import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TextareaIeIssueComponent } from './textarea-ie-issue/textarea-ie-issue.component';


const routes: Routes = [
  { path: 'textarea-ie-issue', component: TextareaIeIssueComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
