import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-form-complex',
    standalone: true,
    imports: [],
    templateUrl: './form-complex.component.html',
    styleUrl: './form-complex.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComplexComponent implements AfterViewInit {

    form!: FormGroup;

    constructor(
        private cdr: ChangeDetectorRef,
        private fb: FormBuilder) {
        this.initialForm();
    }

    ngAfterViewInit(): void {
        this.cdr.detectChanges();
    }

    initialForm(): void {
        this.form = this.fb.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required]
        })
    }


}
