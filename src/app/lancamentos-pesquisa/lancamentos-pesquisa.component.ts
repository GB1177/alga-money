import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

    lancamentos = [
      { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: new Date(2022, 5, 18)  ,
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
      { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: new Date(2022, 9, 15),
      dataPagamento: new Date(2022, 4 ,19) , valor: 80000, pessoa: 'Atacado Brasil' },
      { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: new Date(2022, 6 , 6),
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
      { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: new Date(2022, 8 ,30),
      dataPagamento: new Date(2022, 4 ,17), valor: 800, pessoa: 'Escola Abelha Rainha' },
      { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: new Date(2022, 7 ,11),
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
      { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: new Date(2022, 5 ,28),
      dataPagamento: new Date(2022, 4 ,30), valor: 1750, pessoa: 'Casa Nova Imóveis' },
      { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: new Date(2022, 10 ,26),
      dataPagamento: null, valor: 180, pessoa: 'Academia Top' }

  ];

}
