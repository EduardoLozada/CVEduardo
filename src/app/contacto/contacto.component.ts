import { Component } from '@angular/core';
import emailjs from "@emailjs/browser"
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),    
    email: new FormControl(''),
    message: new FormControl('')
  });
  submitted = false;  

  onSubmit(): void {
    
    emailjs.send("service_ftei229","template_gslikwm",{
      from_name: this.form.value.email,
      to_name: "eduardo.lozada.ducuara@gmail.com",
      name: this.form.value.name,
      message: this.form.value.message,
      },"IDl8UIyul3wM19ywM"); 
      this.submitted = true;
      this.form.reset();
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  } 
}
