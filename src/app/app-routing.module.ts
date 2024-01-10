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
import { TwelthComponent } from './components/twelth/twelth.component';
import { ThirteenthComponent } from './components/thirteenth/thirteenth.component';
import { PrintComponent } from './components/print/print.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  { path: 'twelth', component:TwelthComponent},
  { path: 'thirteenth', component:ThirteenthComponent},
  { path: 'print', component: PrintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}