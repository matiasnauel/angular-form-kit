import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

export interface Element {
    select?: boolean;
    name: string;
    position: number;
    weight: number;
    symbol: string;
    [key: string]: any;
}

type ElementKeys = keyof Element;

const ELEMENT_DATA: Element[] = [
    { select: false, position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { select: false, position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { select: false, position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { select: false, position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' }
];

@Component({
    selector: 'app-data-table',
    standalone: true,
    imports: [
        MatTableModule,
        CommonModule,
        MatCheckboxModule,
        FormsModule
    ],
    templateUrl: './data-table.component.html',
    styleUrl: './data-table.component.css'
})
export class DataTableComponent {
    displayedColumns = ['select', 'position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource(ELEMENT_DATA);
    selectedRows: Set<Element> = new Set();
    lastSelectedRow: Element | null = null;
    editingRow: Element | null = null;
    editingColumn: ElementKeys | null = null;
    newValue: any = '';

    public addHeight(): string {
        return "min-height: 100px"
    }

    selectRow(row: Element, event: MouseEvent): void {
        const isShiftPressed = event.shiftKey;

        if (isShiftPressed && this.lastSelectedRow) {
            const startIndex = ELEMENT_DATA.indexOf(this.lastSelectedRow);
            const endIndex = ELEMENT_DATA.indexOf(row);
            const range = startIndex < endIndex ?
                ELEMENT_DATA.slice(startIndex, endIndex + 1) :
                ELEMENT_DATA.slice(endIndex, startIndex + 1);

            range.forEach(element => this.selectedRows.add(element));
        } else {
            if (this.selectedRows.has(row)) {
                this.selectedRows.delete(row);
            } else {
                this.selectedRows.add(row);
            }
        }

        this.lastSelectedRow = row;
    }

    isSelected(row: Element): boolean {
        return this.selectedRows.has(row);
    }

    toggleSelectAll(isChecked: boolean): void {
        if (isChecked) {
            ELEMENT_DATA.forEach(element => this.selectedRows.add(element));
        } else {
            this.selectedRows.clear();
        }
    }

    public startEdit(row: Element, column: ElementKeys): void {
        this.editingRow = row;
        this.editingColumn = column;
        this.newValue = row[column];
    }

    saveEdit(): void {
        if (this.editingRow && this.editingColumn !== null) {
            this.editingRow[this.editingColumn] = this.newValue;
            this.editingRow = null;
            this.editingColumn = null;
        }
    }

    cancelEdit(): void {
        this.editingRow = null;
        this.editingColumn = null;
    }

}
