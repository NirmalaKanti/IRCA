// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tenth',
//   templateUrl: './tenth.component.html',
//   styleUrl: './tenth.component.css'
// })
// export class TenthComponent {

// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { TenthService } from './tenth.service';
import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-tenth',
  templateUrl: './tenth.component.html',
  styleUrls: ['./tenth.component.css']
})
export class TenthComponent {
  formData: FormGroup = this.fb.group({
     addictname:[''],
    // pulse: [''],
    // bp :[''],
    // tem  :[''],
    // we:[''],
    // box1:[''],
    // box2:[''],
    // box3:[''],
    // box4:[''],
    // box5:[''],
    // inci:[''],
    // radio1:[''],
    // radio2:[''],
    // radio3:[''],
    // radio4:[''],
    // no1:[''],
    // no2:[''],
    // no3:[''],
    // no4:[''],
    // anemia:[''],
    // fig:[''],
    // glo:[''],
    // flu:[''],
    // pal:[''],
    // peda:[''],
    // trem:[''],
    // janu:[''],
    // loss:[''],
    // waste:[''],
    // absc:[''],
    // halluc:[''],
    // manu:[''],
    // club:[''],
    // spd:[''],
    // gynae:[''],
    // inj:['']
    t1:[''],
    t2:[''],
    t3:[''],
    t4:[''],
    t5:[''],
    t6:[''],
    t7:[''],
    t8:[''],
    t9:[''],
    t10:[''],
    t11:[''],
    t12:[''],
    t13:[''],
    t14:[''],
    t15:[''],
    t16:[''],
    t17:[''],
    t18:[''],
    t19:[''],
    t20:[''],
    t21:[''],
    t22:[''],
    t23:[''],
    t24:[''],
    t25:[''],
    t26:[''],
    t27:[''],
    t28:[''],
    t29:[''],
    t30:[''],
    t31:[''],
    t32:[''],
    t33:[''],
    t34:['']
  });

  retrievedData: any;
  dataFetched: boolean = false; 

  constructor(private fb: FormBuilder, private tenthService: TenthService, private toastr: ToastrService, private http: HttpClient,private router: Router
    , private route: ActivatedRoute,private sharedService: SharedService ) {

      if(this.sharedService.getToggle()){

        
        this.fetchDataByAddictName(true, this.sharedService.getAddictName());

      }
      else{
        this.sharedService.setToggle()
      }
      
  }

  characterValidator(control: AbstractControl): { [key: string]: any } | null {
    const value = control.value;
    const valid = /^[a-zA-Z\s]+$/.test(value);

    if (!valid) {
      return { 'invalidCharacters': true, 'message': 'Enter only alphabets' };
    }

    return null;
  }

  onSubmit() {
    if (this.formData.valid) {
      this.sharedService.setAddictName(this.formData.get('addictname')?.value);
      this.tenthService.saveFormData(this.formData.value, this.formData.get('addictname')?.value).subscribe(
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

fetchDataByAddictName(value: boolean = false, addName: String= "") {
  
  let addictName = this.formData.get('addictname')?.value;
  if(value){
    addictName = addName;
  }
  if (addictName) {
    this.tenthService.getFormDataByAddictName(addictName).subscribe(
      (data) => {
        this.retrievedData = data.data; // Assuming the data is returned in the 'data' property
        console.log('Data retrieved successfully:', this.retrievedData);

        this.dataFetched = true;
        // Update form controls with retrieved data
        this.formData.patchValue(this.retrievedData);

        // Set addict name in the SharedService
        this.sharedService.setAddictName(this.formData.get('addictname')?.value);

        

        // Update the dataFetched flag
        
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.toastr.error('Error fetching data', 'Error');
      }
    );
  }
}

navigateToEleventhPage() {
  // Only navigate to the second page if data is fetched
  if (this.dataFetched) {
    this.router.navigate(['../eleventh'], { relativeTo: this.route });
  }
}
}