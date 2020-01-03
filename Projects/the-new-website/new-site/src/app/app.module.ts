import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'blog', component: BlogComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
