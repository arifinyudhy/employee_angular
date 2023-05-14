import { DecimalPipe } from '@angular/common';
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCurrency]',
})
export class CurrencyDirective {
  currencyChars = new RegExp('[,.]', 'g');
  constructor(
    private el: ElementRef,
    private decimalPipe: DecimalPipe,
    public renderer: Renderer2
  ) {}

  @HostListener('input', ['$event.target.value']) onInput(e: string) {
    this.format(e);
  }

  @HostListener('paste', ['$event']) onPaste(event: ClipboardEvent) {
    event.preventDefault();

    event.clipboardData &&
      this.format(event.clipboardData.getData('text/plain'));
  }

  format(val: string) {
    // 1. test for non-number characters and replace/remove them
    const numberFormat = parseInt(String(val).replace(this.currencyChars, ''));
    // console.log(numberFormat); // raw number

    // 2. format the number (add commas)
    const formated = this.decimalPipe.transform(numberFormat, '1.0', 'id-ID');

    // 3. replace the input value with formatted numbers
    this.renderer.setProperty(this.el.nativeElement, 'value', formated);
  }
}
