import { Component } from '@angular/core';
import { User } from '../user';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  user: User = new User();

constructor(private authService: AuthService, private router: Router){}

  form = new FormGroup(
    {
      name: new FormControl("",[Validators.required,Validators.minLength(3)]),
      email:  new FormControl("",[Validators.required,Validators.email]),
      cont: new FormControl("",[Validators.required,Validators.maxLength(10),Validators.minLength(10),
        Validators.pattern("[6789]{1}[0-9]{9}")]),
      password: new FormControl("",[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
      building: new FormControl("",[Validators.required,Validators.minLength(3)]),
      city: new FormControl("",[Validators.required,Validators.minLength(3)]),
      state: new FormControl("",[Validators.required,Validators.minLength(3)]),
      pincode : new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(6)])
    }
  );

  get f()
  {
    return this.form.controls;
  }

  onSubmit()
  {
    this.authService.registerUser(this.user).subscribe(
      data=>
      {
        console.log('SUCCESS', data);
        alert('User register successfully.');
        this.router.navigate(['home']);
      }
      ,
      err=>
      {
        console.log('FAILURE',err);
      }
    );
  }
}
