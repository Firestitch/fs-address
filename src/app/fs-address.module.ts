import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { FsAddressCountriesModule } from './fs-address-countries.module';

import {
  AgmCoreModule,
  GoogleMapsAPIWrapper,
  MarkerManager,
  LAZY_MAPS_API_CONFIG } from '@agm/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

import { FsFormModule } from '@firestitch/form';

import { GoogleMapConfig } from './classes/googlemapconfig';

import { FsAddressComponent } from './components/address/address.component';
import { FsAddressFormatComponent } from './components/address-format/address-format.component';
import { FsAddressPickerComponent } from './components/address-picker/address-picker.component';
import { FsAddressSearchComponent } from './components/address-search/address-search.component';
import { FsAddressRegionModule } from './fs-address-region.module';
import { FsAddressCountryModule } from './fs-address-country.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FsFormModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FlexLayoutModule,
    FsAddressCountriesModule,
    AgmCoreModule.forRoot(),
    FsAddressRegionModule,
    FsAddressCountryModule
  ],
  exports: [
    AgmCoreModule,
    FsAddressComponent,
    FsAddressFormatComponent,

    FsAddressPickerComponent,
    FsAddressSearchComponent
  ],
  declarations: [
    FsAddressComponent,
    FsAddressFormatComponent,
    FsAddressPickerComponent,
    FsAddressSearchComponent
  ],
  providers: [
    GoogleMapsAPIWrapper,
    MarkerManager,
    { provide: LAZY_MAPS_API_CONFIG, useClass: GoogleMapConfig }
  ]
})
export class FsAddressModule {}
