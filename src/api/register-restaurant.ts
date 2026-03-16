import { api } from "@/lib/axios";

export interface RegisterRestaurantBody {
    email: string
    restaurantName: string
    phone: string
    managerName: string
}

export async function registerRestaurant({ 
    managerName,
    email,
    phone,
    restaurantName,
} : RegisterRestaurantBody) {

    await api.post('/restaurants', { 
        email,
        managerName,
        phone,
        restaurantName
     })

}