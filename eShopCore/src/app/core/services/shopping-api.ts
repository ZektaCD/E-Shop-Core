import { Injectable, signal } from '@angular/core';
import { Product } from '../models/product-type';
import { CartProduct } from '../models/shoppi-type';

@Injectable({
  providedIn: 'root',
})
export class ShoppingApi {
  #s_example_products = signal<Product[]>([
    {
      id_db: 1,
      sku: 'PROD-001',
      name: 'Café en grano Patagonia 1kg',
      cost: 3500,
      description: 'Café de especialidad tostado en origen, notas a chocolate y nuez.',
      price: 5900,
      off_percent: 10,
      category: {
        id_db: 1,
        name: 'Café',
        off_percent: 5,
        subcategories: [
          {
            id_db: 11,
            name: 'Grano',
          },
          {
            id_db: 12,
            name: 'Molido',
          },
        ],
      },
      active: true,
      stock: 14,
      suppliers: [
        {
          id_db: 1,
          name: 'Andes Coffee Supply',
          cuit: '30-71234567-2',
          email: 'contacto@andescoffee.com',
          telephone: '299-4556677',
          adress: 'Av. Patagonia',
          adress_number: '1450',
          adress_unit: 'Depósito 3',
          city: 'Neuquén',
          commits: 'Entrega semanal',
          categories_associated: [
            {
              id_db: 1,
              name: 'Café',
            },
          ],
          active: true,
        },
      ],
      stock_state: true,
      created_date: '2025-08-01T10:30:00Z',
      edited_date: '2025-09-10T12:45:00Z',
    },
    {
      id_db: 2,
      sku: 'PROD-002',
      name: 'Taza cerámica artesanal',
      cost: 1800,
      description: 'Taza esmaltada a mano, 250 ml, estilo patagónico.',
      price: 3200,
      category: {
        id_db: 2,
        name: 'Merchandising',
        subcategories: [
          {
            id_db: 21,
            name: 'Tazas',
          },
        ],
      },
      active: true,
      stock: 35,
      suppliers: [
        {
          id_db: 2,
          name: 'Cerámicas del Sur',
          cuit: '30-69874512-9',
          telephone: '299-4789321',
          adress: 'Ruta 22',
          adress_number: '2500',
          adress_unit: 'Galpón 1',
          city: 'Plottier',
          active: true,
        },
      ],
      stock_state: true,
      created_date: '2025-06-15T09:00:00Z',
      edited_date: '2025-07-05T15:30:00Z',
    },
    {
      id_db: 3,
      sku: 'PROD-003',
      name: 'Filtros de papel V60 (100u)',
      cost: 1500,
      price: 2800,
      category: {
        id_db: 3,
        name: 'Accesorios',
        subcategories: [
          {
            id_db: 31,
            name: 'Filtros',
          },
        ],
      },
      active: true,
      stock: 9,
      suppliers: [
        {
          id_db: 3,
          name: 'BrewTech Argentina',
          cuit: '30-66543219-3',
          telephone: '11-45678900',
          adress: 'San Martín',
          adress_number: '322',
          adress_unit: 'Piso 2',
          city: 'Buenos Aires',
          active: true,
        },
      ],
      stock_state: true,
      created_date: '2025-05-20T08:15:00Z',
      edited_date: '2025-07-01T13:20:00Z',
    },
    {
      id_db: 4,
      sku: 'PROD-004',
      name: 'Molinillo manual de acero',
      cost: 8200,
      price: 12500,
      description: 'Molinillo de precisión para café, regulable por clics.',
      category: {
        id_db: 3,
        name: 'Accesorios',
      },
      active: true,
      stock: 22,
      suppliers: [
        {
          id_db: 4,
          name: 'Coffee Gear SA',
          cuit: '33-55667788-9',
          telephone: '11-44556677',
          adress: 'Mitre',
          adress_number: '980',
          adress_unit: 'Local 7',
          city: 'CABA',
          active: true,
        },
      ],
      stock_state: false,
      created_date: '2025-07-01T10:00:00Z',
      edited_date: '2025-08-12T14:10:00Z',
    },
    {
      id_db: 5,
      sku: 'PROD-005',
      name: 'Café molido Premium 500g',
      cost: 2800,
      price: 4600,
      off_percent: 5,
      category: {
        id_db: 1,
        name: 'Café',
        off_percent: 5,
        subcategories: [
          {
            id_db: 12,
            name: 'Molido',
          },
        ],
      },
      active: true,
      stock: 47,
      suppliers: [
        {
          id_db: 1,
          name: 'Andes Coffee Supply',
          cuit: '30-71234567-2',
          telephone: '299-4556677',
          adress: 'Av. Patagonia',
          adress_number: '1450',
          adress_unit: 'Depósito 3',
          city: 'Neuquén',
          active: true,
        },
      ],
      stock_state: true,
      created_date: '2025-08-15T11:00:00Z',
      edited_date: '2025-09-01T09:40:00Z',
    },
    {
      id_db: 6,
      sku: 'PROD-006',
      name: 'Taza térmica de acero inoxidable',
      cost: 4000,
      price: 7200,
      category: {
        id_db: 2,
        name: 'Merchandising',
        subcategories: [
          {
            id_db: 22,
            name: 'Botellas y termos',
          },
        ],
      },
      active: true,
      stock: 15,
      suppliers: [
        {
          id_db: 5,
          name: 'Surmetal',
          cuit: '30-77889900-5',
          telephone: '299-4422311',
          adress: 'Los Pinos',
          adress_number: '800',
          adress_unit: 'Nave B',
          city: 'Cipolletti',
          active: true,
        },
      ],
      stock_state: true,
      created_date: '2025-07-20T12:00:00Z',
      edited_date: '2025-07-25T12:30:00Z',
    },
    {
      id_db: 7,
      sku: 'PROD-007',
      name: 'Chemex 6 tazas original',
      cost: 18500,
      price: 25900,
      description: 'Cafetera de vidrio con cuello de madera, diseño clásico.',
      category: {
        id_db: 3,
        name: 'Accesorios',
        subcategories: [
          {
            id_db: 32,
            name: 'Cafeteras',
          },
        ],
      },
      active: true,
      stock: 50,
      suppliers: [
        {
          id_db: 3,
          name: 'BrewTech Argentina',
          cuit: '30-66543219-3',
          telephone: '11-45678900',
          adress: 'San Martín',
          adress_number: '322',
          adress_unit: 'Piso 2',
          city: 'Buenos Aires',
          active: true,
        },
      ],
      stock_state: true,
      created_date: '2025-08-10T08:30:00Z',
      edited_date: '2025-09-15T10:15:00Z',
    },
    {
      id_db: 8,
      sku: 'PROD-008',
      name: 'Set de degustación 3 variedades 250g',
      cost: 4200,
      price: 7200,
      description: 'Tres variedades de café de especialidad en formato degustación.',
      category: {
        id_db: 1,
        name: 'Café',
      },
      active: true,
      stock: 42,
      suppliers: [
        {
          id_db: 1,
          name: 'Andes Coffee Supply',
          cuit: '30-71234567-2',
          telephone: '299-4556677',
          adress: 'Av. Patagonia',
          adress_number: '1450',
          adress_unit: 'Depósito 3',
          city: 'Neuquén',
          active: true,
        },
      ],
      stock_state: true,
      created_date: '2025-06-01T09:00:00Z',
      edited_date: '2025-07-01T09:10:00Z',
    },
    {
      id_db: 9,
      sku: 'PROD-009',
      name: 'Jarabe sabor vainilla 1L',
      cost: 2100,
      price: 3900,
      category: {
        id_db: 4,
        name: 'Complementos',
        subcategories: [
          {
            id_db: 41,
            name: 'Saborizantes',
          },
        ],
      },
      active: true,
      stock: 25,
      suppliers: [
        {
          id_db: 6,
          name: 'SyrupLab SRL',
          cuit: '30-66778855-9',
          telephone: '11-44558877',
          adress: 'Brandsen',
          adress_number: '2021',
          adress_unit: 'Planta 1',
          city: 'Buenos Aires',
          active: true,
        },
      ],
      stock_state: true,
      created_date: '2025-05-05T08:00:00Z',
      edited_date: '2025-06-10T14:00:00Z',
    },
    {
      id_db: 10,
      sku: 'PROD-010',
      name: 'Cookies artesanales 6u',
      cost: 1600,
      price: 2800,
      description: 'Galletas caseras con chips de chocolate, receta patagónica.',
      category: {
        id_db: 4,
        name: 'Complementos',
        subcategories: [
          {
            id_db: 42,
            name: 'Pastelería',
          },
        ],
      },
      stock: 50,
      active: true,
      suppliers: [
        {
          id_db: 7,
          name: 'Dulce Sur',
          cuit: '30-55443322-1',
          telephone: '299-4776655',
          adress: 'San Carlos',
          adress_number: '950',
          adress_unit: 'Local 2',
          city: 'Bariloche',
          active: true,
        },
      ],
      stock_state: true,
      created_date: '2025-09-01T10:10:00Z',
      edited_date: '2025-09-25T12:20:00Z',
    },
  ]);
  #cart_signal = signal<CartProduct[]>([]);

  constructor(){
    this.loadItemsCart();
  }

  private loadItemsCart(){
    let items = localStorage.getItem('cart_list');
    if(items != null){ 
      console.log('los items de la lista del carrito son: ', items);
      this.#cart_signal.set(JSON.parse(items) as CartProduct[]);
    }
  }

  // ACA IRIA LA PETICION AL SERVIDOR, PARA TRAER LO QUE SE BUSCA
  getSignalProducts(){
    return this.#s_example_products();
  }

  addItemToCart(item: CartProduct){
    let position = this.checkItemInCart(item.item.id_db);
    if(position > -1){
      this.#cart_signal().at(position)!.quantity += item.quantity;
    }else{
      this.#cart_signal().push(item);
    }
    localStorage.setItem('cart_list',JSON.stringify(this.#cart_signal()));
    this.showCart();
  }

  updateItemCart(pos:number, item: CartProduct){
    this.#cart_signal().at(pos) != item;
    localStorage.setItem('cart_list', JSON.stringify(this.#cart_signal()));
  }

  deleteItemCart(pos: number){
    this.#cart_signal().splice(pos,1);
    localStorage.setItem('cart_list', JSON.stringify(this.#cart_signal()));
  }

  private checkItemInCart(id:number): number{
    let state = -1; 
    let counter = 0;
    this.#cart_signal().forEach(
      element => {
        if(element.item.id_db === id) state = counter 
        else counter++;
      }
    );
    return state;
  }

  getItemsInCart(): CartProduct[]{
    return this.#cart_signal();
  }

  showCart(){
    let lista = '';
    this.#cart_signal().forEach(element => {
      lista += '[ '+element.item.name+', '+element.quantity+', '+element.total_amount+' ]'+'\n';
    });
    // console.log(JSON.stringify(this.#cart_signal()));
    console.log(lista);
  }

  getAmountItemsInCart(): number{
    return this.#cart_signal().length;
  }
}
