import { Component, OnInit, LOCALE_ID } from '@angular/core';

import { HttpTestService } from '../httptest.service';
import { formatCurrency } from '@angular/common';

import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  providers : [
    {provide: LOCALE_ID, useValue: "pt"}, 
    HttpTestService
  ] 
})
export class CadastroComponent implements OnInit {

  getData: string;

  constructor(private httpService : HttpTestService){}

  ngOnInit() {
  }

  Post(valor: string, parcelas: number) {
    if (parcelas.toString() == '') {
      this.getData = "";
      return alert('Você deve preencher a quantidade de parcelas!');
    }
    else if(valor == "") {
      this.getData = "";
      return alert('Você deve preencher o Valor das Parcelas!');
    }
    
    parcelas = Number.parseInt(parcelas.toString());
    this.httpService.post(valor, parcelas)
    .subscribe(
       data => this.getData = formatCurrency(Number.parseFloat(JSON.stringify(data)), "pt", "R$", "", "2.3")
    );
  }  

}
