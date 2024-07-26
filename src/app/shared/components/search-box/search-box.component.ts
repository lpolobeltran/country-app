import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {

  @Input()
  public placeholder: string = '';

  // Se crea un nuevo evento que sera emitido desde el hijo al padre "byCapitalPage", que en este caso es byCapitalPage.component
  @Output()
  public onValue = new EventEmitter<string>();



  emitValue(value: string): void  {
    this.onValue.emit(value);
  }
}
