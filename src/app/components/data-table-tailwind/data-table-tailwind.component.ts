import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';


interface Column {
    nombre: string;  // Nombre de la columna
    tipo: 'text' | 'number' | 'date' | 'currency' | 'state'; // Tipo de dato
    width?: string | null; // Ancho de la columna (ej. '20%', '25%', '30%')
}

interface Item {
    id: number; // Identificador
    nombre: string; // Nombre del producto
    descripcion: string; // Descripción del producto
    cantidad: number; // Cantidad del producto
    estado: string; // Estado del producto
    [key: string]: any;
}


@Component({
    selector: 'app-data-table-tailwind',
    standalone: true,
    imports: [
        CommonModule
    ],
    templateUrl: './data-table-tailwind.component.html',
    styleUrl: './data-table-tailwind.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataTableTailwindComponent {
    activeSortColumn: string | null = null;
    sortAscending: boolean = true;
    columnas: Column[] = [
        { nombre: "Id", tipo: "number" },
        { nombre: "Nombre", tipo: "text" },
        { nombre: "Descripcion", tipo: "text" },
        { nombre: "Cantidad", tipo: "number" },
        { nombre: "Estado", tipo: "state" }
    ];


    items: Item[] = [
        { id: 1, nombre: "Producto A", descripcion: "Descripción del producto A", cantidad: 10, estado: "activo" },
        { id: 2, nombre: "Producto B", descripcion: "Descripción del producto B", cantidad: 20, estado: "inactivo" },
        { id: 3, nombre: "Producto C", descripcion: "Descripción del producto C", cantidad: 15, estado: "activo" },
        { id: 4, nombre: "Producto D", descripcion: "Descripción del producto D", cantidad: 5, estado: "pendiente" },
        { id: 5, nombre: "Producto E", descripcion: "Descripción del producto E", cantidad: 30, estado: "activo" },
    ];

    getWidthClass(width?: string | null): string {
        if (!width) return 'w-full';
        return `sm:w-${width} md:w-${width} lg:w-${width}`;
    }

    toggleSortOrder(column: string) {
        if (this.activeSortColumn === column) {
            this.sortAscending = !this.sortAscending;
        } else {
            this.activeSortColumn = column;
            this.sortAscending = true;
        }
    }
}
