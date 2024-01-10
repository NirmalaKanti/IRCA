import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EighthService } from './eighth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-eighth',
  templateUrl: './eighth.component.html',
  styleUrls: ['./eighth.component.css']
})
export class EighthComponent {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    
    // rc1: [''],
    // rc2: [''],
    // rc3: [''],
    // rc4: [''],
    // rc5: [''],
    // rc6: [''],
    // rc7: [''],
    // rc8: [''],
    // rc9: [''],
    // rc10: [''],
    // rc11: [''],
    // rc12: [''],
    // rc13: [''],
    // rc14: [''],
    // rc15: [''],
    // rc16: [''],
    // rc17: [''],
    // rc18: [''],
    // rc19: [''],
    // rc20: [''],
    // rc21: [''],
    // rc22: [''],
    // rc23: [''],
    // rc24: [''],
    // rc25: [''],
    // rc26: [''],
    // rc27: [''],
    // rc28: [''],
    // rc29: [''],
    // rc30: [''],
    // rc31: [''],
    // rc32: [''],
    // rc33: [''],
    // rc34: [''],
    // rc35: [''],
    // rc36: [''],
    // rc37: [''],
    // rc38: [''],
    // rc39: [''],
    // rc40: [''],
    nm: [''],
    ag: [''],
    dor: [''],
    // dep: [''],
    // na: [''],
    // can: [''],
    // sti: [''],
    // hal: [''],
    // inh: [''],
    // sub: [''],
    a1:[''],
    a2:[''],
    a3:[''],
    a4:[''],
    a5:[''],
    a6:[''],
    a7:[''],
    a8:[''],
    a9:[''],
    a10:[''],
    a11:[''],
    a12:[''],
    a13:[''],
    a14:[''],
    a15:[''],
    a16:[''],
    a17:[''],
    a18:[''],
    a19:[''],
    a20:[''],
    a21:[''],
    a22:[''],
    a23:[''],
    a24:[''],
    a25:[''],
    a26:[''],
    a27:[''],
    a28:[''],
    a29:[''],
    a30:[''],
    a31:[''],
    a32:[''],
    a33:[''],
    a34:[''],
    a35:[''],
    a36:[''],
    a37:[''],
    a38:[''],
    a39:[''],
    a40:[''],
    a41:[''],
    a42:[''],
    a43:[''],
    a44:[''],
    a45:[''],
    a46:[''],
    a47:[''],
    a48:[''],
    a49:[''],
    a50:[''],
    a51:[''],
    a52:[''],
    a53:['']
  });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private eighthService: EighthService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {
    
    this.addictName = this.sharedService.getAddictName();

    // Fetch data when the component is initialized
    this.fetchDataByAddictName();

  }

  onSubmit() {
    if (this.formData.valid) {

      this.addictName = this.sharedService.getAddictName();
      // const dataToSend = { ...this.formData.value, component: 'third' };

      this.eighthService.saveFormData(this.formData.value, this.addictName).subscribe(
        (response) => {
          console.log('Form data saved successfully:', response);
          this.toastr.success('Form data saved successfully', 'Success');
          this.formData.reset();
        },
        (error) => {
          console.error('Error saving form data:', error);
          this.toastr.error('Error saving form data', 'Error');
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }

  fetchDataByAddictName() {
    if (this.addictName) {
      this.eighthService.getFormDataByAddictName(this.addictName).subscribe(
        (data) => {
          this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
          console.log('Data retrieved successfully:', this.retrievedData);
          this.dataFetched = true;
          // Update form controls with retrieved data
          this.formData.patchValue(this.retrievedData);
        },
        (error) => {
          console.error('Error fetching data:', error);
          this.toastr.error('Error fetching data', 'Error');
        }
      );
    }
  }

  navigateToEighthPage() {
    // Only navigate to the third page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../Ninth'], { relativeTo: this.route });
    }
  }

  url:any;
  hideChoose=false;
  hideButton=true;



  selectFile(event: any) {
    if (!event.target.files[0] || event.target.files[0].length == 0) {
      return;
    }
  
    const mimeType = event.target.files[0].type;
    if (!mimeType.match(/image\/*/)) {
      return;
    }
  
    const reader = new FileReader();
    reader.onload = (_event) => {
      this.url = reader.result;
      this.hideChoose = true;
      this.hideButton = false;
    };
    reader.readAsDataURL(event.target.files[0]);
  }
    removeImage(){
      this.url = null;
      this.hideChoose=false;
      this.hideButton=true;   
  }
}

