import { NgModule } from '@angular/core';

import { 
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatDividerModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatDividerModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatDividerModule
    ]
})
export class MaterialModule{}