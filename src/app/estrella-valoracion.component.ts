import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-estrella-valoracion',
  standalone: true,
  template: `
    <p>{{ nombreProducto }}</p>
    @for (n of [1, 2, 3, 4, 5]; track n; let i = $index) {
      <span>{{ i + 1 <= puntuacion ? '⭐' : '☆' }}</span>
    }
  `
})
export class EstrellaValoracionComponent {
  @Input() puntuacion = 0;
  @Input() nombreProducto = 'Producto';
}
