
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SchoolProject';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://api.example.com/data').subscribe((data: any[]) => {
      console.log(data);
    });
  }
}