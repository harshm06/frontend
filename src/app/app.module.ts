import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowdataComponent } from './showdata/showdata.component';

import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './parent/parent.component';
import { ChildDataComponent } from './child-data/child-data.component';
import { ChildButtonComponent } from './child-button/child-button.component';
import { ConverterComponent } from './converter/converter.component';
import { PostComponent } from './post/post.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ShowdataComponent,
    ParentComponent,
    ChildDataComponent,
    ChildButtonComponent,
    ConverterComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
