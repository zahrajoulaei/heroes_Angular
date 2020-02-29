import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '',  redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'blog', component: BlogComponent },
      // { path: '**', component: PageNotFoundComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
