import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import { <%= angular2AppName %>SharedModule } from '../../../shared';
import {GrowlModule} from 'primeng/primeng';
import {GalleriaModule} from 'primeng/primeng';

import {
    GalleriaDemoComponent,
    GalleriaDemoRoute
} from './';

const primeng_STATES = [
    galleriaDemoRoute
];

@NgModule({
    imports: [
        <%= angular2AppName %>SharedModule,
        CommonModule,
        BrowserAnimationsModule,
        GrowlModule,
        GalleriaModule,
        RouterModule.forRoot(primeng_STATES, { useHash: true })
    ],
    declarations: [
        GalleriaDemoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class <%= angular2AppName %>GalleriaDemoModule {}