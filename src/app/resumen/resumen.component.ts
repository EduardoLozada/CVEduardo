import { Component, OnInit } from '@angular/core';
import { EduardoService } from '../services/Eduardo.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: EduardoService) { }

  ngOnInit(): void {
  }

}
