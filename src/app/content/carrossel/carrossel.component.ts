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
      image: 'assets/images/carousel1.png' 
    },
    {
      image: 'assets/images/carousel2.png' 
    },
    {
      image: 'assets/images/carousel3.png' 
    },
    {
      image: 'assets/images/carousel4.png' 
    },
    {
      image: 'assets/images/carousel5.png' 
    }
  ];
  

  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    nav: false,
    dots: true, 
    center: true, 
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1 
      },
      600: {
        items: 3 
      },
      1000: {
        items: 3 
      }
    }
  };
  
  
}
