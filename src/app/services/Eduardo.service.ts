import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EduardoService {

  profesional: any;
  educacion: any ;
  servicios: any ;
  testimonio: any ;
  experiencia: any ;
  blog: any ;

  constructor(private http: HttpClient) {
    this.CargarProfesional();
    this.CargarEducacion();
    this.CargarServicios();
    this.CargarTestimonio();
    this.CargarExperiencia();
    this.CargarBlog();
  }

  private CargarProfesional(){
    this.http.get('https://cveduardolozada-default-rtdb.firebaseio.com/Profesional.json')
      .subscribe((resp: any) => {
        this.profesional = resp;        
    });
  }

  private CargarServicios(){
    this.http.get('https://cveduardolozada-default-rtdb.firebaseio.com/Servicios.json')
      .subscribe((resp: any) => {
        this.servicios = resp;        
    });
  }

  private CargarEducacion(){
    this.http.get('https://cveduardolozada-default-rtdb.firebaseio.com/Educacion.json')
      .subscribe((resp: any) => {
        this.educacion = resp;        
    });
  }

  private CargarTestimonio(){
    this.http.get('https://cveduardolozada-default-rtdb.firebaseio.com/Testimonios.json')
      .subscribe((resp: any) => {
        this.testimonio = resp;        
    });
  }

  private CargarExperiencia(){
    this.http.get('https://cveduardolozada-default-rtdb.firebaseio.com/Experiencia.json')
      .subscribe((resp: any) => {
        this.experiencia = resp;        
    });
  }

  private CargarBlog(){
    this.http.get('https://cveduardolozada-default-rtdb.firebaseio.com/Blog.json')
      .subscribe((resp: any) => {
        this.blog = resp;        
    });
  }
}
