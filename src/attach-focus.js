import {customAttribute} from 'aurelia-templating';
let Element = new HtmlElement();
@customAttribute('attach-focus')
export class AttachFocus {
  static inject = [Element];

  constructor(element){
    this.element = element;
  }

  attached(){
    this.element.focus();
  }
}
