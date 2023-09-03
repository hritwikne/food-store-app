import { Food } from './app/shared/models/Food';

export const sample_foods: Food[] = [
    {
        id: '1',
        name: 'Burger',
        price: 220,
        tags: ['burger', 'fast food'],
        imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=699&q=80',
        origins: ['American', 'German'],
        cookTime: '20 mins'
    },
    {
        id: '2',
        name: 'Pizza',
        price: 350,
        tags: ['pizza', 'fast food'],
        imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
        origins: ['Italian'],
        cookTime: '15 mins'
    },
    {
        id: '3',
        name: 'Sushi',
        price: 400,
        tags: ['sushi', 'japanese'],
        imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c3VzaGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60',
        origins: ['Japanese'],
        cookTime: '20 mins'
    }
]