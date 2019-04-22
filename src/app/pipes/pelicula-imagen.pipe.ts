import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'peliculaImagen'
})
export class PeliculaImagenPipe implements PipeTransform {

  transform(pelicula: any): any {
    const url = 'http://image.tmdb.org/t/p/w500';
    if (pelicula.backdrop_path) {
      console.log('poraqui' + url);
      return url + pelicula.backdrop_path;
    } else {
      if (pelicula.poster_path) {
        console.log('poralla');
        return url + pelicula.poster_path;
      } else {
        return 'assets/img/no-image-available.jpg';
      }
    }
  }

}
