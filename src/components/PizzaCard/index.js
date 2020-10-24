import React from 'react';
import { PizzaContainer, PizzaContainerFooter, PizzaContainerTitle, PizzaDescription, Price } from '../../styles';
import { Button } from '../Button';
import { useAppState } from '../../Contexts/AppState';
import { useCart } from '../../Contexts/CartContext';
import PropTypes from 'prop-types';

export const PizzaCard = ( { name, price, description, image } ) => {
    const { state } = useAppState();
    const { addPizza } = useCart();
    return(
        <PizzaContainer>
            <img 
                src= { image }
                alt={name}
            />
            <PizzaContainerTitle>
                {name}
            </PizzaContainerTitle>
            <PizzaDescription>
                {description}
            </PizzaDescription>
            <PizzaContainerFooter>
                <Price>
                    {
                    state.currency === 'EURO' ?
                        `€${price.EURO}` :
                        `$${price.USD}`
                    }
                </Price>
                <div>
                    <Button onClick={ () => addPizza({name, price, description, image}) } >
                        Add to cart
                    </Button>
                </div>
            </PizzaContainerFooter>
        </PizzaContainer>
    )
}

PizzaCard.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.shape({
        euro: PropTypes.number,
        usd: PropTypes.number
    })
}

