import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

    url : string = 'http://loiane.com';
    cursoAngular: boolean = true;
    urlImagem : string = 'http://lorempixel.com.br/500/400/?2'

    valorAtual: string= '';
    valorSalvo = '';

    isMouseOver: boolean = false;

    nome : string = 'abc';

    pessoa : any = {
      nome: 'def',
      idade: 20
    }

    nomeDoCurso : string = 'Angular';

    valorInicial : number = 15;

    atualizarNome(event: any): void {
      this.nome = event.target.value;
    }

    atualizarNomeNgModel(event: any): void {
      this.nome = event;
    }

    getValor(){
      return 1
    }

    getCurtirCurso(){
      return true;
    }

    onMudouValor(evento : any): void {
      console.log(evento.novoValor);
    }

}
