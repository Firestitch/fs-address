import { Inject, Optional, Injectable } from '@angular/core';
import { LazyMapsAPILoaderConfigLiteral } from '@agm/core';
import { GOOGLE_MAP_KEY } from '../consts/inject-token-google-map-key';

@Injectable()
export class GoogleMapConfig implements LazyMapsAPILoaderConfigLiteral {

  public apiKey: string = null;
  public libraries = [ 'places' ];
  public apiVersion = 'beta';

  constructor(@Optional() @Inject(GOOGLE_MAP_KEY) apiKey,
              @Optional() @Inject('GoogleMapKey') legacyApiKey) {

    this.apiKey = apiKey ? apiKey : legacyApiKey;
  }
}
