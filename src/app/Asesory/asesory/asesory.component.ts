import { Component } from '@angular/core';

@Component({
  selector: 'app-asesory',
  templateUrl: './asesory.component.html',
  styleUrls: ['./asesory.component.css','./asesoryMobile.component.css']
})
export class AsesoryComponent {

  public courses = [
    { materia: 'Algebra'},
    { materia: 'Aritmetica'},
    { materia: 'Geometria'},
    { materia: 'Razonamiento Matematico'},
    { materia: 'Precalculo'},
    { materia: 'Calculo I'},
    { materia: 'Estadistica Inferencial'},

  ];

  public courseSearch: string = '';

  public coursesFiltrados: any[] = [];

  public buscarCourse() {
    this.coursesFiltrados = this.courses.filter(courses =>
      courses.materia.toLowerCase().includes(this.courseSearch.toLowerCase())
    );
  }

}
