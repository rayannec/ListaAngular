import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{
  @Input() btnEnviar!: string;

  momentForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.momentForm = new FormGroup ({
      id: new FormControl(''),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get email(){
    return this.momentForm.get('email')!;
  }

  get password(){
    return this.momentForm.get('password')!;
  }

  submit(){
    
    console.log('Enviou o formulário');
  }

}
