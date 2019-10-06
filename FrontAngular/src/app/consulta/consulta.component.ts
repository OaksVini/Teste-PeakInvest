import { Component, OnInit } from '@angular/core';

import { HttpTestService } from '../httptest.service';
import { O_DIRECT } from 'constants';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css'],
  providers : [HttpTestService] 
})
export class ConsultaComponent implements OnInit {

  getData: string;

  constructor(private httpService : HttpTestService){}

  ngOnInit() {
  }

  Get(id: number) {
    if (id.toString() == '') {
      this.getData = "";
      return alert('Você deve preencher a caixa de texto com algum valor.');
    }
    else if(id != 1 && id != 2 && id != 3) {
      this.getData = "";
      return alert('Você deve preencher a caixa de texto somente com números de 1 a 3.');
    }
    id = Number.parseInt(id.toString());
    this.httpService.get(id)
    .subscribe(
       data => this.getData = JSON.stringify(data)
    );
  }

}
