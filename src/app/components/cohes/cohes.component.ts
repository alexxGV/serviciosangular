import { Component, OnInit } from '@angular/core';
import { Coche } from './../../models/coche';
import { CocheService } from './../../services/coche.service';


@Component({
  selector: 'app-cohes',
  templateUrl: './cohes.component.html',
  styleUrls: ['./cohes.component.css'],
  providers: [CocheService]
})
export class CohesComponent implements OnInit {

  public coches: Array<Coche>;

  constructor(private _service: CocheService) { }

  ngOnInit(): void {
    this._service.getCoches().subscribe(res => {
      this.coches = res;
    }, error => {
      console.log("Error");

    })
  }

}
