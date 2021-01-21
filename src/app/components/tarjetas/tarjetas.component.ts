import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss']
})
export class TarjetasComponent implements OnInit {

  @Input() items: any[] = [];

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  verArtistas( item: any ) {
    let artistaId: String;

    if ( item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    
    this.router.navigate([ '/artists', artistaId])
    
  }

}
