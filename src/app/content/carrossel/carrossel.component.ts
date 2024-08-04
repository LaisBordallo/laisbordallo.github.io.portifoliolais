import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

// Interface para definir a estrutura do depoimento
interface Testimonial {
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
      image: 'assets/images/carousel1.png' // Caminho para a imagem
    },
    {
      image: 'assets/images/carousel2.png' // Caminho para a imagem
    },
    {
      image: 'assets/images/carousel3.png' // Caminho para a imagem
    },
    {
      image: 'assets/images/carousel4.png' // Caminho para a imagem
    },
    {
      image: 'assets/images/carousel5.png' // Caminho para a imagem
    }
  ];
  

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false, // Desativa os botões de navegação padrão
    dots: true, // Ativa os pontos de navegação
    center: true, // Centraliza o item ativo
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1 // Exibe um item em telas pequenas
      },
      600: {
        items: 3 // Exibe três itens em telas maiores
      },
      1000: {
        items: 3 // Exibe três itens em telas grandes
      }
    }
  };
  
  
}
