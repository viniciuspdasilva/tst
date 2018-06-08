import {Directive, HostListener, Input} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Directive({
  selector: '[appMask]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: MaskDirective,
    multi: true
  }]
})
export class MaskDirective {
  onTouched: any;
  onChange: any;
  @Input('mask') mask: string;
  constructor() {}
  writeValue(value: any): void {
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  @HostListener('onkeyup', ['$event'])
  onKeyUp($event: any) {
    let valor = $event.target.value.replace(/\d/g, '');
    const pad = this.mask.replace(/\d/g, '').replace(/9/g, '_');
    let valorMask = valor + pad.substring(0, pad.length - valor.length);

    if ($event.keyCode === 8) {
      this.onChange(valor);
      return;
    }
    if (valor.length <= pad.length) {
      this.onChange(valor);
    }

    let valorMaskPos = 0;
    valor = '';
    for (let i = 0; i < this.mask.length; i++) {
      if (isNaN(parseInt(this.mask.charAt(i)))) {
        valor += this.mask.charAt(i);
      } else {
        valor += valorMask[valorMaskPos++];
      }
    }
    if (valor.indexOf('_') > -1) {
      valor = valor.substr(0, valor.indexOf('_'));
    }
    $event.target.value = valor;
  }
  @HostListener('blur', ['$event'])
  onBlur($event: any) {
    if ($event.target.value.length === this.mask.length) {
      return;
    }
    this.onChange('');
    $event.target.value = '';

  }
}
