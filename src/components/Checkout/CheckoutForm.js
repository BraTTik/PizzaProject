import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { FormField } from '../FormField'
import { MainButton, FormFieldContainer } from '../../styles'

const validationSchema = yup.object().shape({
    name: yup.string().required('Enter your name'),
    lastName: yup.string().required('Enter your last name'),
    phone: yup.string().required()
            .matches(/^\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/, 'Phone must have 10 numbers'),
    street: yup.string().required('Please add street'),
    house: yup.number().typeError('Please, enter house number').required().positive().integer(),
    apartment: yup.number().typeError('Please, enter apartment number').required().positive().integer()
})

export const CheckoutForm = ( {submit = async () => {}} ) => {
    const {register, errors, handleSubmit} = useForm({
        mode: "onBlur",
        resolver: yupResolver(validationSchema),
    });

    return(
        <form onSubmit={handleSubmit(submit)} style={{flexGrow: 1}}>
            <h3>Contacts:</h3>
            <FormFieldContainer>
                    <FormField 
                        name="name"
                        label="Name"
                        type="text"
                        inputRef={register}
                        placeholder="John"
                        errors={errors.name}
                    />
                    <FormField 
                        name="lastName"
                        label="Last name"
                        type="text"
                        inputRef={register}
                        placeholder="Smith"
                        errors={errors.lastName}
                    />
                    <FormField
                        name="phone"
                        label="Phone"
                        type="tel"
                        inputRef={register}
                        placeholder="(000) 111-22-33"
                        errors={errors.phone}
                        normalize = {value => {
                            let result = value
                                .replace(/[\s\D]/g, "")
                                .replace(/^(\d{1,2})/g, `($1`)
                                .replace(/^(\(\d{3})/g, '$1)')
                                .replace(/^(\(\d{3}\))(\d{1,3})$/g, '$1 $2')
                                .replace(/^(\(\d{3}\))(\d{3})(\d{1,2})$/g, '$1 $2-$3')
                                .replace(/^(\(\d{3}\))(\d{3})(\d{2})(\d{1,2})$/g, '$1 $2-$3-$4')
                                .substr(0, 15)
                            return result    
                        }}
                    />
            </FormFieldContainer>
        <h3>Delivery Address</h3>
        <FormField 
            name="street"
            label="Street"
            type="text"
            inputRef={register}
            errors={errors.street}
        />
        <FormFieldContainer>
            <FormField 
                name="house"
                label="House"
                type="text"
                inputRef={register}
                errors={errors.house}
                style={{flexBasis: '200px'}}
            />
            <FormField
                name="building"
                label="Building"
                type="text"
                inputRef={register}
                style={{flexBasis: '200px'}}
            />
            <FormField
                name="apartment"
                label="Apart"
                type="text"
                inputRef={register}
                errors={errors.apartment}
                style={{flexBasis: '200px'}}
            />
        </FormFieldContainer>
        <MainButton as="input" type="submit" value="Submit"/>
        </form>
    )
}