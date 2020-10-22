import React from 'react';
import { PizzaContainer, PizzaContainerFooter, PizzaContainerTitle, PizzaDescription } from '../../styles';
import { Button } from '../Button';
import { useAppState } from '../../Contexts/AppState';
import PropTypes from 'prop-types';

export const PizzaCard = ( { name, price, description, image } ) => {
    const { state } = useAppState();
    return(
        <PizzaContainer>
            <img 
                src= { image }
            />
            <PizzaContainerTitle>
                {name}
            </PizzaContainerTitle>
            <PizzaDescription>
                {description}
            </PizzaDescription>
            <PizzaContainerFooter>
                <div>
                    {
                    state.currency === 'EURO' ?
                        `€${price.euro}` :
                        `$${price.usd}`
                    }
                </div>
                <div>
                    <Button onClick={ () => console.log('added to cart') }>
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

