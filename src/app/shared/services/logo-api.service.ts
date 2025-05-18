import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = "environment.logoProviderApiBaseUrl;"

  constructor() {
  }

  getUrlToLogo(source: any) {
    console.log('getUrlToLogo', source);
    return `${this.baseUrl}${new URL(source.url).hostname}`;
  }
}
