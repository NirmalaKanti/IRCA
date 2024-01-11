// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-eleventh',
//   templateUrl: './eleventh.component.html',
//   styleUrl: './eleventh.component.css'
// })
// export class EleventhComponent {

// }
import { Component, ChangeDetectorRef } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EleventhService } from './eleventh.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-eleventh',
  templateUrl: './eleventh.component.html',
  styleUrls: ['./eleventh.component.css']
})
export class EleventhComponent {
 addictName: string;
 displayedImages: SafeUrl[] = [];
  formData: FormGroup = this.fb.group({
    rc41: [''],
    rc42: [''],
    rc43: [''],
    rc44: [''],
    rc45: [''],
    rc46: [''],
    rc47: [''],
    rc48: [''],
    rc49: [''],
    rc50: [''],
    rc51: [''],
    rc52: [''],
    rc53: [''],
    rc54: [''],
    rc55: [''],
    rc56: [''],
    rc57: [''],
    rc58: [''],
    rc59: [''],
    rc60: [''],
    rc61: [''],
    rc62: [''],
    rc63: [''],
    rc64: [''],
    rc65: [''],
    rc66: [''],
    rc67: [''],
    rc68: [''],
    rc69: [''],
    rc70: [''],
    rc71: [''],
    rc72: [''],
    rc73: [''],
    rc74: [''],
    rc75: [''],
    rc76: [''],
    rc77: [''],
    rc78: [''],
    rc79: [''],
    rc80: ['']
  });
  retrievedData: any;
  dataFetched: boolean = false; 
 
  constructor(private fb: FormBuilder, private eleventhService: EleventhService, private toastr: ToastrService, private route: ActivatedRoute,private router: Router
    ,private sharedService: SharedService,private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef) 
  {

    
    this.addictName = this.sharedService.getAddictName();

console.log("eleventh service",this.addictName);
    // Fetch data when the component is initialized
    this.fetchDataByAddictName();
  }

  onSubmit() {
    if (this.formData.valid) {
      this.addictName = this.sharedService.getAddictName();
      // If the form is valid, save the data
      console.log("eleventh service",this.addictName);

      this.eleventhService.saveFormData(this.formData.value, this.addictName).subscribe(
        (response) => {
          console.log('Form data saved successfully:', response);
          // Optionally, you can handle success here
          this.toastr.success('Form data saved successfully', 'Success');
          this.formData.reset();
        },
        (error) => {
          console.error('Error saving form data:', error);
          // Optionally, you can handle errors here
          this.toastr.error('Error saving form data', 'Error');
        }
      );
    } else {
      // Form is not valid, handle accordingly
      console.log('Form is not valid');
    }
  }

  fetchDataByAddictName() {
    if (this.addictName) {
     
      this.eleventhService.getFormDataByAddictName(this.addictName).subscribe(
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

  navigateToTwelthPage() {
    // Only navigate to the third page if data is fetched
    if (this.dataFetched) {
      this.router.navigate(['../third'], { relativeTo: this.route });
    }
  }

  onFileChange(event: any) {
    const files = (event.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const imageUrl = this.sanitizer.bypassSecurityTrustUrl(e.target.result);
        this.displayedImages.push(imageUrl);
        this.cdr.detectChanges();
      };
      reader.readAsDataURL(file);
    
    } else {
     console.error('No file selected.');
    }
  }

  removeImage(index: number) {
    this.displayedImages.splice(index, 1);
    this.resetFileInput();
  }

  resetFileInput() {
    // Reset file input value
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }

    // Trigger change detection
    this.cdr.detectChanges();
  }
}