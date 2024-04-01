import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css','headerMobile.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  tabChanged(event: any) {
    // Aquí detectamos el label del tab seleccionado y redirigimos según corresponda
    switch (event.tab.textLabel) {
      case 'Libros':
        this.router.navigateByUrl('/book');
        break;
      case 'Matemática Coach':
        this.router.navigateByUrl('/asesory');
        break;
      case 'Rimas Personalizadas':
        this.router.navigateByUrl('/verse');
        break;
      default:
        // Si no se selecciona ningún tab específico, no hacemos nada
        break;
    }
  }
}
