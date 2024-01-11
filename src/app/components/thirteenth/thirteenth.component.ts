

import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThirteenthService } from './thirteenth.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-thirteenth',
  templateUrl: './thirteenth.component.html',
  styleUrls: ['./thirteenth.component.css']
})
export class ThirteenthComponent {
  addictName: string;
  displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    
    rc1: [''],
    rc2: [''],
    rc3: [''],
    rc4: [''],
    rc5: [''],
    rc6: [''],
    rc7: [''],
    rc8: [''],
    rc9: [''],
    rc10: [''],
    rc11: [''],
    rc12: [''],
    rc13: [''],
    rc14: [''],
    rc15: [''],
    rc16: [''],
    rc17: [''],
    rc18: [''],
    rc19: [''],
    rc20: [''],
    rc21: [''],
    rc22: [''],
    rc23: [''],
    rc24: [''],
    rc25: [''],
    rc26: [''],
    rc27: [''],
    rc28: [''],
    rc29: [''],
    rc30: [''],
    rc31: [''],
    rc32: [''],
    rc33: [''],
    rc34: [''],
    rc35: [''],
    rc36: [''],
    rc37: [''],
    rc38: [''],
    rc39: [''],
    rc40: ['']
  });


  retrievedData: any;
  dataFetched: boolean = false;

  constructor(
    private fb: FormBuilder,
    private thirteenthService: ThirteenthService,
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

      this.thirteenthService.saveFormData(this.formData.value, this.addictName).subscribe(
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
      this.thirteenthService.getFormDataByAddictName(this.addictName).subscribe(
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

  navigateToThirteenthPage() {
    // Only navigate to the third page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../thirteenth'], { relativeTo: this.route });
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

