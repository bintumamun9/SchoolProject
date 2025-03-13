
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Welcome to {{ title }}!</h1>
      <p>This is a project for my school curriculum.</p>
    </div>
  `,
  styles: [`
    .container {
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'SchoolProject';
}