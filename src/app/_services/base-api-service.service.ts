import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from './app-config.service';

@Injectable()
export class BaseApiService implements OnInit {

  private _config: Object;
  private _env: string;
  // private _config: ConfigLoaderService
  constructor(private _http: HttpClient, private loader: AppConfig) {
    this._config = loader.getApiUrl();
  }

  ngOnInit() {
  }

  protected buildRemoteRestUrl(apiPart: string): string {
    // return  ApiUtils.REMOTE_API_URL + apiPart;
    if (this._config) {
      return  this._config + '/' + apiPart;
    }
  }
}
