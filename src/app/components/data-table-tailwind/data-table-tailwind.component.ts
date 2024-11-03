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
    [x: string]: any;
    activeSortColumn!: string;
    sortAscending: boolean = true;
    dropdownOpen = false

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

    itemsPerPage: number = 10;
    currentPage: number = 1;
    totalItems: number = this.items.length;
    paginatedItems: any[] = [];
    filtersVisible = false;
    filters: { [key: string]: string } = {}

    constructor() {
        this.updatePaginatedItems();
    }


    getWidthClass(width?: string | null): string {
        if (!width) return 'w-full';
        return `sm:w-${width} md:w-${width} lg:w-${width}`;
    }

    toggleFilters() {
        this.filtersVisible = !this.filtersVisible;
    }

    toggleSortOrder(column: string) {
        if (this.activeSortColumn === column) {
            this.sortAscending = !this.sortAscending;
        } else {
            this.activeSortColumn = column;
            this.sortAscending = true;
        }
    }

    getFilteredItems() {
        let filteredItems = this.items.filter(item => {
            return Object.keys(this.filters).every(key => {
                return item[key] && item[key].toString().toLowerCase().includes(this.filters[key].toLowerCase());
            });
        });
    
        // Ordenar los elementos
        if (this.activeSortColumn) {
            filteredItems.sort((a, b) => {
                const aValue = a[this.activeSortColumn.toLowerCase()];
                const bValue = b[this.activeSortColumn.toLowerCase()];
    
                if (aValue < bValue) return this.sortAscending ? -1 : 1;
                if (aValue > bValue) return this.sortAscending ? 1 : -1;
                return 0;
            });
        }
    
        return filteredItems;
    }

    updatePaginatedItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        this.paginatedItems = this.items.slice(startIndex, startIndex + this.itemsPerPage);
    }

    nextPage() {
        if (this.currentPage * this.itemsPerPage < this.totalItems) {
            this.currentPage++;
            this.updatePaginatedItems();
        }
    }

    previousPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.updatePaginatedItems();
        }
    }

    goToPage(page: number) {
        if (page > 0 && page <= Math.ceil(this.totalItems / this.itemsPerPage)) {
            this.currentPage = page;
            this.updatePaginatedItems();
        }
    }

    exportToExcel() {
        // Lógica para exportar a Excel
        console.log("Exportando a Excel");
        this.dropdownOpen = false; // Cerrar el desplegable después de seleccionar
    }


    get totalPages(): number {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }
}
