import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


// Interface para definir a estrutura do depoimento
interface Testimonial {
  name: string;
 image: string; // Novo campo para a imagem
}

@Component({
  selector: 'app-carrossel',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './carrossel.component.html',
  styleUrls: ['./carrossel.component.scss']
})
export class CarrosselComponent {

  // Array de depoimentos
  testimonials: Testimonial[] = [
    {
      name: 'João Silva',
      image: 'assets/images/carousel1.png' // Caminho para a imagem
    },
    {
      name: 'Maria Oliveira',
      image: 'assets/images/carousel2.png' // Caminho para a imagem
    },
    {
      name: 'Carlos Souza',
      image: 'assets/images/carousel3.png' // Caminho para a imagem
    },
    {
      name: 'Carlos Souza',
      image: 'assets/images/carousel4.png' // Caminho para a imagem
    },
    {
      name: 'Carlos Souza',
      image: 'assets/images/carousel5.png' // Caminho para a imagem
    }
  ];
  

  customOptions: OwlOptions = {
    loop: false,
    margin: 10,
    nav: false, // Desativa os botões de navegão padrão
    dots: true, // Ativa os pontos de vegação
    center: true, // Centraliza o iteativo
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true, // Pausa o autoplay ao passar o mous       
    rtl: true, // Inverte a direção do carrossel
    items: 3, // Exibe três itens por vez
    responsive: {
    0: {
      items: 1 // Exibe um item em telas pequenas
    },
    600: {
      items: 2 // Exibe três itens em telas maiores
    },
    1000: {        
      items: 3 // Exibe três itens em telas grandes
      },
    }, 
  }
};