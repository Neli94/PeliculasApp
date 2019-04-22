import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiKey = '5294b41adf348df0ac2dbdcf65e50d8e';
  private urlMovieDb = 'https://api.themoviedb.org/3';

  constructor(private jsonp: Jsonp, private http: Http ) { }

  getCartelera() {
    const desde = new Date();
    const hasta = new Date();
    hasta.setDate(hasta.getDate() + 7);

    const desdeStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDay()}`;
    const hastaStr = `${desde.getFullYear()}-${desde.getMonth() + 1}-${desde.getDay()}`;

    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMovieDb}/discover/movie?primary_release_date.gte=${desdeStr}&primary_release_date.lte=${hastaStr}&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(
      map( res => {
        return res;
    }));
  }

  getPopulares() {
    const url = `${this.urlMovieDb}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(
      map( res => {
        return res;
    }));
  }

  buscarPelicula( texto: string ) {
    // tslint:disable-next-line:max-line-length
    const url = `${this.urlMovieDb}/search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apiKey}&language=es&callback=JSONP_CALLBACK`;
    return this.jsonp.get(url).pipe(
      map( res => {
        return res;
    }));
  }

}
