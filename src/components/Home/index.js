import React from 'react';
import { AppLayout } from '../AppLayout';
import { PizzasWrapper } from '../../styles';
import { PizzaCard } from '../PizzaCard';
import { usePizza } from '../../Contexts/PizzasContext';


export const Home = ( { usePizzaHook = usePizza }) => {
    const { pizzas } = usePizzaHook();
    return(
        <AppLayout>
            <PizzasWrapper>
                { pizzas.map( (pizza, i) => (
                    <PizzaCard 
                        { ...pizza}
                        key={pizza.name+i}
                    />
                ))}
            </PizzasWrapper>
        </AppLayout>
    )
}