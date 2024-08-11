import { Component, AfterViewInit  } from '@angular/core';
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
export class CarrosselComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
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
    nav: false, // Desativa os botões de navegão padrão
    dots: true, // Ativa os pontos de vegação
    center: true, // Centraliza o iteativo
    autoplay: true,
    autoplayTimeout: 30,
    autoplayHoverPause: true, // Pausa o autoplay ao passar o mous       
    responsive: {
    0: {
      items: 1 // Exibe um item em telas pequenas
    },
    600: {
      items: 3 // Exibe três itens em telas maiores
    },
    1000: {        
      items: 3 // Exibe três itens em telas grandes
      },
    }, 
  }
};