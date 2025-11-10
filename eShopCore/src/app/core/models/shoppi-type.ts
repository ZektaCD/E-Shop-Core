import { Product } from "./product-type";

export interface CartProduct {
  item: Product,
  quantity: number,
  total_amount: number
}


export interface OrderToBuy{
  date_created: string,
  order_id: string,
  client_id: string,
  transaction_amount: number,

}
