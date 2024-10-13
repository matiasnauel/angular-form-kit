import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldPrefixDirective } from '../../directive/text-field-prefix.directive';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-text-field-identity-number',
    standalone: true,
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        TextFieldPrefixDirective
    ],
    templateUrl: './text-field-identity-number.component.html',
    styleUrl: './text-field-identity-number.component.css'
})
export class TextFieldIdentityNumberComponent {
    form!: FormGroup;

    constructor(private formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            identityNumber: ""
        })
    }

    onValueChanged(modifiedValue: string) {
        this.form.patchValue({
            identityNumber: modifiedValue
        })
    }
}
