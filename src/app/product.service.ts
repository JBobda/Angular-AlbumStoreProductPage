import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Http, Response } from '@angular/http';
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';

@Injectable()
export class ProductService {
  _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }

  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response) =>
      response.json()
    );
  }

}
