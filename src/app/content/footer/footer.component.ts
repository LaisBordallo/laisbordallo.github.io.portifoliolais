import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor() { 


document.addEventListener('DOMContentLoaded', function () {}
  const backToTopButton = document.getElementById('back-to-top');

  // Mostrar ou ocultar o botão com base na rolagem
  window.addEventListener('scroll', function () {
    if (window.scrollY > 300) { // Ajuste o valor conforme necessário
      if (backToTopButton !== null) {
        backToTopButton.style.display = 'block';
      }
    } else {
      if (backToTopButton !== null) {
        backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    };
  }
}