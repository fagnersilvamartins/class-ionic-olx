import { Injectable } from '@angular/core';

import { Ad } from './../../models/ad';
import { Region } from '../../models/region';

@Injectable()
export class ApiProvider {

  constructor() {
    console.log('Hello ApiProvider Provider');
  }

  getAllAds(): Array<Ad> {
    return [
      {
        title: "Shih tzu macho",
        description: "filhote de Shih tzu macho 700,00 avista ou 12×70,00 no cartão de crédito",
        region: this.getRegion(0),
        price: 700,
        images: [
          "http://img.olx.com.br/images/40/409819038755236.jpg",
          "http://img.olx.com.br/images/40/403819037049334.jpg",
          "http://img.olx.com.br/images/40/407819033393567.jpg"
        ]
      },
      {
        title: "Triumph Street Triple 675 R",
        description: "Na garantia de Fábrica, Revisões feitas na autorizada. Único dono. Pintura especial",
        region: this.getRegion(4),
        price: 33.900,
        images: [
          "http://img.olx.com.br/thumbs/13/137823025481351.jpg",
          "http://img.olx.com.br/thumbs/13/136823020818685.jpg"
        ]
      },
      {
        title: "CHEVROLET COBALT 2013/2014",
        description: "Outros opcionais: Banco do motorista com ajuste de altura, Computador de bordo",
        region: this.getRegion(1),
        price: 700,
        images: [
          "http://img.olx.com.br/images/40/409819038755236.jpg",
          "http://img.olx.com.br/images/40/403819037049334.jpg",
          "http://img.olx.com.br/images/40/407819033393567.jpg"
        ]
      },
      {
        title: "Excelente Apartamento",
        description: "Dois quartos sendo um suite, banho social, sala com varanda e cozinha com area de serviço.",
        region: this.getRegion(3),
        price: 380.000,
        images: [
          "http://img.olx.com.br/images/77/776815012278740.jpg"
        ]
      },
      {
        title: "IPhone 6s 64 GB Rose",
        description: "iPhone 6s Semi novo. Bem conservado ",
        region: this.getRegion(2),
        price: 1.450,
        images: [
          "http://img.olx.com.br/images/40/409819030995987.jpg"
        ]
      },
      {
        title: "Eletricista - Serviços elétricos e manutenções",
        description: "Olá pessoal! Será um prazer atendê-los!",
        region: this.getRegion(0),
        price: 50,
        images: [
          "http://img.olx.com.br/thumbs/40/404819031429512.jpg",
          "http://img.olx.com.br/images/40/407819038039775.jpg"
        ]
      }
    ].sort();
  }

  getRegion(index): Region {
    return this.getAllRegions()[index];
  }

  getAllRegions(): Array<Region> {
    return [
      "Paraíba",
      "São Paulo",
      "Santa Catarina",
      "Rio de Janeiro",
      "Pernambuco"
    ]
  }

}
