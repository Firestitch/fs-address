import { Component, EventEmitter, Inject, Input, OnInit, Output, HostBinding } from '@angular/core';
import { IFsAddressRegionConfig } from '../../interfaces/address-region-config.interface';
import { COUNTRIES } from '../../constants/inject-token-countries';


@Component({
  selector: 'fs-address-region-country',
  templateUrl: './address-region-country.component.html',
  styleUrls: ['./address-region-country.component.scss'],
})
export class FsAddressRegionCountryComponent implements OnInit {
  // ADDRESS Two-way binding

  @HostBinding('class.vertical') orientationVertical = true;
  @HostBinding('class.horizontal') orientationHorizontal = false;
  @HostBinding('class.horizontal-stretch') orientationHorizontalStretch = false;

  @Input() config: IFsAddressRegionConfig = {};
  @Input() country = '';
  @Input() region = '';
  @Input('orientation') set setOrientation(value) {
    this.orientationVertical = value === 'vertical';
    this.orientationHorizontal = value === 'horizontal';
    this.orientationHorizontalStretch = value === 'horizontal-stretch';
  }

  @Output() countryChange = new EventEmitter<any>();
  @Output() regionChange = new EventEmitter<any>();

  public countries = [];

  constructor(@Inject(COUNTRIES) countries) {
    this.countries = countries;
  }

  public ngOnInit() {
    this.initConfig();
  }

  public changeCountry() {
    this.countryChange.emit(this.country);
  }

  public changeRegion() {
    this.regionChange.emit(this.region);
  }

  private initConfig() {
    this.config = Object.assign({
      country: { required: false },
      region: { required: false },
    }, this.config);
  }


}
