import { Component } from '@angular/core';
import { EstrellaValoracionComponent } from './estrella-valoracion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [EstrellaValoracionComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}
