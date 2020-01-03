import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayBlog = false;
  constructor() { }
  ngOnInit() {
  }
  openBlog = () => {
    console.log('yesssss');
    this.displayBlog = !this.displayBlog;
    console.log(this.displayBlog);

  }
  openProjects = () => {
    console.log('projecto baz kon amoo bebine');
  }
  openBio = () => {
    console.log('inja darbare khodam minevisam');
  }
}


