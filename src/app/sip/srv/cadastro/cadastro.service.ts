import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroService<T> {
  constructor() { }

  public addDadosExternos(array: any[], item: any): any[] {
    if (item || array !== undefined || null) {
      if (array.length >= 1) {
        array.push(item);
      } else {
        array = [item];
      }
    }
    return array;
   }

  public retiraDadosExternos(array: any[], item: number) {
      array = array.length > 0 && array !== [] ? array : [];
      if (array || item !== null || undefined) {
        const index = array.indexOf(item);
        array.splice(index, 1);

      }
    }

  public factoryObject(__form: Object, __element: T) {
    if ( typeof __form  === 'object') {
      const __keysObject = Object.keys(__form);
      const __keysT = Object.keys(__element);
      const __valueT = Object.values(__element);
      for (let key in __keysObject) {
          if (__form[__keysT[key]] !== undefined) {
            __element[__keysT[key]] = __form[__keysObject[key]];
          } else {
            __element[__keysT[key]] = null;
          }
      }
    } else {
      throw new Error('O parametro deve conter um objeto..');
    }
    return __element;
  }

  public pegarColunasObject(arrayObject: any[]): Array<string> {
    let arrayString = Array();
    arrayObject.forEach((val, index) => {
        arrayString.push(val.value);
      });
    return arrayString;
  }
}
