// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-ninth',
//   templateUrl: './ninth.component.html',
//   styleUrl: './ninth.component.css'
// })
// export class NinthComponent {

// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

import { NinthService } from './ninth.service';  // Replace 'FourthService' with the actual service name
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-ninth',
  templateUrl: './ninth.component.html',
  styleUrls: ['./ninth.component.css']
})

export class NinthComponent{
  addictName:string;

  formData: FormGroup = this.fb.group({

    // fourthname: [''],
    // age : [''],
    // dateofad : [''],
    // his : [''],
    // phy : [''],
    // past : [''],
    // psyc : [''],
    // with : [''],
    // tre : [''],
    n1: [''],
    p1: [''],
    p2: [''],
    p3: [''],
    p4: [''],
    p5: [''],
    p6: [''],
    p7: [''],
    p8: [''],
    p9: [''],
    p10: [''],
    p11: [''],
    p12: [''],
    p13: [''],
    p14: [''],
    p15: [''],
    p16: [''],
    p17: [''],
    p18: [''],

  });
retrievedData: any;
  dataFetched: boolean = false;
  constructor(
    private fb: FormBuilder,
    private ninthService: NinthService,  // Replace 'FourthService' with the actual service name
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.addictName = this.sharedService.getAddictName();

    // Fetch data when the component is initialized
    this.fetchDataByAddictName();
   
  }

  onSubmit(): void {
    if (this.formData.valid) {
      this.addictName = this.sharedService.getAddictName();
      this.ninthService.saveFormData(this.formData.value,this.addictName).subscribe(
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
      this.ninthService.getFormDataByAddictName(this.addictName).subscribe(
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

  // navigateToThirdPage() {
  //   // Only navigate to the third page if data is fetched
  //   if (this.dataFetched) {
  //     this.router.navigate(['../fifth'], { relativeTo: this.route });
  //   }
  // }
}