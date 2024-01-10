import { Component, ComponentRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { generatePDF } from './pdf-helper';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ThirdComponent } from './components/third/third.component';
import { FourthComponent } from './components/fourth/fourth.component';
import { FifthComponent } from './components/fifth/fifth.component';
import { SixthComponent } from './components/sixth/sixth.component';
import { SeventhComponent } from './components/seventh/seventh.component';
import { EighthComponent} from './components/eighth/eighth.component';
import { NinthComponent} from './components/ninth/ninth.component';
import { TenthComponent} from './components/tenth/tenth.component';
import { EleventhComponent} from './components/eleventh/eleventh.component';
import { TwelthComponent } from './components/twelth/twelth.component';
import { ThirteenthComponent } from './components/thirteenth/thirteenth.component';
import { PrintComponent } from './components/print/print.component';
import { SharedService } from './components/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'routing';
  isButtonHidden = false;
  componentTypes = [FirstComponent, SecondComponent, ThirdComponent, FourthComponent, FifthComponent, SixthComponent, SeventhComponent,EighthComponent,NinthComponent,TenthComponent,EleventhComponent,TwelthComponent,ThirteenthComponent];

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private sharedService: SharedService, private router: Router) {

  }

  createPDF() {

    this.router.navigate(['/print']);
    this.isButtonHidden = true;
    const componentRefs: ComponentRef<any>[] = this.componentTypes.map(
      (componentType) => {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType as any);
        return this.viewContainerRef.createComponent(componentFactory);
      }
    );

    generatePDF(componentRefs, this.viewContainerRef);    
  }
}
