import { Routes } from '@angular/router';
import { DataTableComponent } from './components/data-table/data-table.component';
import { TextFieldIdentityNumberComponent } from './components/text-field-identity-number/text-field-identity-number.component';
import { FormComplexComponent } from './components/form-complex/form-complex.component';
import { DataTableTailwindComponent } from './components/data-table-tailwind/data-table-tailwind.component';

export const routes: Routes = [
    { path: 'data-table', component: DataTableComponent },
    { path: 'text-field-identity-number', component: TextFieldIdentityNumberComponent },
    { path: 'form-complex', component: FormComplexComponent },
    { path: 'data-table-tailwind', component: DataTableTailwindComponent }
];
