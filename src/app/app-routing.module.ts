// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { SecondComponent } from './components/second/second.component';
import { FirstComponent } from './components/first/first.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { SeventhComponent } from './components/seventh/seventh.component';
import { EighthComponent} from './components/eighth/eighth.component';
import { NinthComponent} from './components/ninth/ninth.component';
import { TenthComponent } from './components/tenth/tenth.component';
import { EleventhComponent} from './components/eleventh/eleventh.component';
// import { TwelthComponent } from './components/twelth/twelth.component';
import { ThirteenthComponent } from './components/thirteenth/thirteenth.component';
import { PrintComponent } from './components/print/print.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page21Component } from './components/page21/page21.component';
import { Page22Component } from './components/page22/page22.component';
import { Page23Component } from './components/page23/page23.component';
import { Page24Component } from './components/page24/page24.component';
import { Page25Component } from './components/page25/page25.component';
import { Page26Component } from './components/page26/page26.component';



const routes: Routes = [
  { path: '', redirectTo: '/first', pathMatch: 'full' },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'third', component: ThirdComponent },
  { path: 'fourth', component: FourthComponent },
  { path: 'fifth', component: FifthComponent },
  { path: 'sixth', component: SixthComponent },
  { path: 'seventh', component: SeventhComponent },
  { path: 'eighth', component: EighthComponent },
  { path: 'ninth', component:NinthComponent},
  { path:'tenth', component:TenthComponent},
  { path: 'eleventh', component:EleventhComponent},
  // { path: 'twelth', component:TwelthComponent},
  { path: 'thirteenth', component:ThirteenthComponent},
  { path: 'print', component: PrintComponent },
  { path: 'page21', component:Page21Component},
  { path: 'page22', component:Page22Component},
  { path: 'page23', component:Page23Component},
  { path: 'page24', component:Page24Component},
  {path: 'page25', component:Page25Component},
  {path: 'page26', component:Page26Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}