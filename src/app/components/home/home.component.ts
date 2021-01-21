import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError: string;

  constructor( private spotify: SpotifyService) { 
    
    this.error = false;
    this.loading = true;

    this.spotify.getNewReleases().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
      console.log(data);
      
    }, (errorServicio) => {
      this.error = true;
      this.loading = false;
      console.log(errorServicio);
      this.mensajeError = errorServicio.error.error.message;
    });
  }

  ngOnInit(): void {
  }



}
