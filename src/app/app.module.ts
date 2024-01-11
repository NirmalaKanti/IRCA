// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { FirstComponent } from './component/first/first.component';
// import { SecondComponent } from './component/second/second.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// @NgModule({
//   declarations: [
//     AppComponent,
//     FirstComponent,
//     SecondComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     NgbModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { ToastrModule } from 'ngx-toastr';
import { SecondComponent } from './components/second/second.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { SeventhComponent } from './components/seventh/seventh.component';
import { HttpClientModule } from '@angular/common/http';
import { PrintComponent } from './components/print/print.component';
import { EighthComponent } from './components/eighth/eighth.component';
import { NinthComponent } from './components/ninth/ninth.component';
import { TenthComponent } from './components/tenth/tenth.component';
import { EleventhComponent } from './components/eleventh/eleventh.component';
// import { TwelthComponent } from './components/twelth/twelth.component';
import { ThirteenthComponent } from './components/thirteenth/thirteenth.component';
import { Page21Component } from './components/page21/page21.component';
import { Page22Component } from './components/page22/page22.component';
import { Page23Component } from './components/page23/page23.component';
import { Page24Component } from './components/page24/page24.component';
import { Page25Component } from './components/page25/page25.component';
import { Page26Component } from './components/page26/page26.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent,
    SixthComponent,
    SeventhComponent,
    PrintComponent,
    EighthComponent,
    NinthComponent,
    TenthComponent,
    EleventhComponent,
    // TwelthComponent,
    ThirteenthComponent,
    Page21Component,
    Page22Component,
    Page23Component,
    Page24Component,
    Page25Component,
    Page26Component
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
      FormsModule,
      ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}