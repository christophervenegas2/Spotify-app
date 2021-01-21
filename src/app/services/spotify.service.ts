import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'BQA6Lz4eKt3TmMznz6t5mbOGhdewb_ilKH6PU2Vo5azLqi5-cfbgkTP4Az90holWEVXsPx2u9bezkiJjpy0';

  constructor(private http: HttpClient) { }

  getQuery( query: string ) {

    const url= `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    return this.http.get(url, { headers });

  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(  (data: any) => {
        return data.albums.items;
      }));
  }
  
  getArtistas( termino: string) {  
    // const headers = new HttpHeaders({
    //   'Authorization': this.token
    // });
    
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
      .pipe( map( (data: any) => {
        return data['artists'].items;
      }));
  }

  getArtista( id: string ) {
    return this.getQuery(`artists/${id}`)
      // .pipe( map( (data: any) => {
      //   return data['artists'].items;
      // }));
  }

  getTopTracks( id: string ) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
        .pipe( map( (data: any) => data['tracks']));
  }
}
