import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


// Interface para definir a estrutura do depoimento
interface Testimonial {
  name: string;
  message: string;
  position: string;
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
      message: 'Esse serviço foi incrível, realmente superou minhas expectativas!',
      position: 'CEO da Empresa A',
      image: 'assets/images/carousel1.png' // Caminho para a imagem
    },
    {
      name: 'Maria Oliveira',
      message: 'A qualidade do atendimento é excepcional, recomendo a todos!',
      position: 'Gerente de Marketing da Empresa B',
      image: 'assets/images/carousel2.png' // Caminho para a imagem
    },
    {
      name: 'Carlos Souza',
      message: 'A experiência foi muito boa, sem dúvidas voltarei a utilizar.',
      position: 'Desenvolvedor na Empresa C',
      image: 'assets/images/carousel3.png' // Caminho para a imagem
    },
    {
      name: 'Carlos Souza',
      message: 'A experiência foi muito boa, sem dúvidas voltarei a utilizar.',
      position: 'Desenvolvedor na Empresa C',
      image: 'assets/images/carousel4.png' // Caminho para a imagem
    },
    {
      name: 'Carlos Souza',
      message: 'A experiência foi muito boa, sem dúvidas voltarei a utilizar.',
      position: 'Desenvolvedor na Empresa C',
      image: 'assets/images/carousel5.png' // Caminho para a imagem
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
    autoplayHoverPause: true,
    animateOut: 'fadeOut', // Animação ao sair
    animateIn: 'fadeIn', // Animação ao entrar
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    items: 1,
    stagePadding: 50,
    smartSpeed: 450, // Velocidade da animação
    slideTransition: 'linear', // Transição linear

    responsive: {
      0: {
        items: 1 
      },
      600: {
        items: 3 
      },
      1000: {
        items: 5 
      }
    }

  };  

  
}