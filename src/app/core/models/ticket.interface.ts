export interface ITicket {
   active: boolean;
   currencySymbol: string;
   order: number;
   price: number;
   inDemand: boolean;
   name: string;
   description: string;
   options: string[];
}
