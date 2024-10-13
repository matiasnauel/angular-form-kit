import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[appTextFieldLimitMinMax]',
    standalone: true
})
export class TextFieldLimitMinMaxDirective {

    @Input() minApp!: number;
    @Input() maxApp!: number;

    constructor(private element: ElementRef) { }


    @HostListener('input', ['$event'])
    handleInput(event: Event) {
        let value = (event.target as HTMLInputElement).value

        if (value.length >= this.maxApp) {
            value = value.substring(0, this.maxApp);
        }

        this.element.nativeElement.value = value;
    }
}
