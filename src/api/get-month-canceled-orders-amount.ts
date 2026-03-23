import { api } from "@/lib/axios";

export interface GetMonthCanceledOrderstResponse {
    amount: number,
    diffFromLastMonth: number
}

export async function getMonthCanceledOrdersAmount() {
    const response = await api.get<GetMonthCanceledOrderstResponse>('/metrics/month-canceled-orders-amount')

    return response.data
}