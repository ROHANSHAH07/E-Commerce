import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  constructor(private router:Router,private formbuilder:FormBuilder,private apiservice:ApiService) { }

  ngOnInit(): void {
    this.loginform = this.formbuilder.group({
      email:new FormControl('', [Validators.required, Validators.email]),
      password:new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }


  get f(){
    return this.loginform.controls;
  }

  login()
  {
     this.apiservice.loginuser(this.loginform.value);
     this.loginform.reset();
     this.router.navigate(['products']);

  }


}
