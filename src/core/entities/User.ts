import { PaymentTypeEnum } from "../enums/payment-type.enum";

export interface User {
    id: number;
    name: string;
    gridA: PaymentTypeEnum;
    gridB: PaymentTypeEnum;
    gridC: PaymentTypeEnum;
}