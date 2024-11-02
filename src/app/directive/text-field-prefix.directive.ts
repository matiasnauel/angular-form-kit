import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
    selector: '[appTextFieldPrefix]',
    standalone: true
})
export class TextFieldPrefixDirective {
    @Input() prefixSeparator!: string
    @Input() prefixPosition!: number;
    @Input() sufixSeparator!: string
    @Input() sufixPosition!: number;
    @Output() valuePrefixChanged = new EventEmitter<string>();

    constructor(
        private element: ElementRef
    ) { }


    @HostListener('input', ['$event.target.value'])
    handleInput(value: string) {
        this._prefix(value);
        this._sufix(value);
    }

    private _prefix(value: string): void {
        if (this._hasPrefix(value) && value.indexOf(this.prefixSeparator) == -1) {
            let arrayValue = value
                .trim()
                .split('');

            arrayValue
                .splice(this.prefixPosition, 0, this.prefixSeparator);

            value = arrayValue.join('')

            this.element.nativeElement.value = value;

            this.valuePrefixChanged.emit(value.replace(this.prefixSeparator, ''));
        }
    }

    private _hasPrefix(value: string): boolean {
        return !!this.prefixPosition && !!this.prefixSeparator && value.length > this.prefixPosition;
    }

    private _sufix(value: string): void {
        if (this.hasSufix(value) && value.length > 11) {
            let arrayValue = value.trim().split('');

            const insertPosition = value.length - this.sufixPosition;

            if (insertPosition >= 0) {
                arrayValue.splice(insertPosition, 0, this.sufixSeparator);

                value = arrayValue.join('');

                this.element.nativeElement.value = value;

                this.valuePrefixChanged.emit(value.replace(this.sufixSeparator, ''));
            }
        }
    }


    private hasSufix(value: string): boolean {
        return !!this.sufixPosition && !!this.sufixSeparator && value.length > this.sufixPosition;
    }
}
