import { NgModule } from '@angular/core';

import { 
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule,
    MatSlideToggleModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatTableModule,
        MatSlideToggleModule,
        MatIconModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatCheckboxModule,
        MatTableModule,
        MatSlideToggleModule,
        MatIconModule
    ]
})
export class MaterialModule{}