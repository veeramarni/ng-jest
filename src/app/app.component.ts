import { Component, OnInit } from '@angular/core';
import '../assets/css/styles.css';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name: string;

  ngOnInit() {
    console.log('init')
  }

  public create(): any {
    return {
      name: 'test'
    }
  }  
}