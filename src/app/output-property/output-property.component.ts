import { Component, Input, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent {

    @Input() valor: number = 0;

    @Output() mudouValor = new EventEmitter();

    @ViewChild('campoInput') campoValorInput: ElementRef | undefined ;

    incrementa(){
      this.campoValorInput!.nativeElement.value++;
      this.mudouValor.emit({novoValor: this.valor});
    }

    decrementa(){
      this.campoValorInput!.nativeElement.value--;
      this.mudouValor.emit({novoValor: this.valor});
    }
}

