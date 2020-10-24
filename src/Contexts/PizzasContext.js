import React, { createContext, useReducer, useContext } from 'react'

const pizzaData = {
    pizzas : [
        {
            name: 'Pepperoni',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolore modi laborum accusamus qui in molestias voluptatem debitis tempora?',
            price: {
                EURO: 10.99,
                USD: 12.99
            },
            image: '/img/pepperoni-pizza.jpg'
        },
        {
            name: '4 cheese',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolore modi laborum accusamus qui in molestias voluptatem debitis tempora?',
            price: {
                EURO: 10.99,
                USD: 9.99
            },
            image: '/img/4-cheese-pizza.png'
        },
        {
            name: 'Barbecue pizza',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolore modi laborum accusamus qui in molestias voluptatem debitis tempora?',
            price: {
                EURO: 10.99,
                USD: 12.99
            },
            image: '/img/bbq-pizza.jpg'
        },
        {
            name: 'Double Pepperoni',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolore modi laborum accusamus qui in molestias voluptatem debitis tempora?',
            price: {
                EURO: 10.99,
                USD: 12.99
            },
            image: '/img/double-pepperoni-pizza.jpg'
        },
        {
            name: 'Hawaii',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolore modi laborum accusamus qui in molestias voluptatem debitis tempora?',
            price: {
                EURO: 10.99,
                USD: 12.99
            },
            image: '/img/hawaii-pizza.jpg'
        },
        {
            name: 'Margherita',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolore modi laborum accusamus qui in molestias voluptatem debitis tempora?',
            price: {
                EURO: 7.99,
                USD: 8.99
            },
            image: '/img/margherita-pizza.png'
        },
        {
            name: 'Meat pizza',
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos dolore modi laborum accusamus qui in molestias voluptatem debitis tempora?',
            price: {
                EURO: 13.99,
                USD: 15.99
            },
            image: '/img/meat-pizza.png'
        },
    ]
}

const PizzaContext = createContext({});

export const PizzaProvider = ( { children }) => {
    return (
        <PizzaContext.Provider value = { pizzaData } >
            { children }
        </PizzaContext.Provider>
    )
}

export const usePizza = () => {
    return useContext(PizzaContext);
}