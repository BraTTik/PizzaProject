import React, { useEffect, useState } from 'react';
import { FormField } from '../FormField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { MainButton } from '../../styles';

const validationScheme = yup.object().shape({
    email: yup.string().email('Enter email').required(),
    password: yup.string().required('Enter password'),
    repassword: yup.string().required('Confirm password')
})

export const SignUpForm = ( { submit = async () => {} }) => {

    const {register, errors, handleSubmit} = useForm({
        mode: 'onBlur',
        resolver: yupResolver(validationScheme),
    });

    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [repasswordError, setRepasswordError] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(()=>{ 
        if(repassword && (password === repassword)){
            setIsButtonDisabled(false);
            setRepasswordError(false)
        }else{
            setIsButtonDisabled(true);
        }
        if(password !== repassword){
            setRepasswordError({message: "Passwords don't match"})
        }
    }, [repassword])

    return(
        <form action="POST" onSubmit={handleSubmit(submit)}>
            <FormField 
                name="email"
                type="email"
                inputRef={register}
                label="Email"
                errors={errors.email}
            />
            <FormField 
                name="password"
                type="password"
                inputRef={register}
                label="Password"
                errors={errors.password}
                onBlur={ e => setPassword(e.target.value)}
            />
            <FormField 
                name="repassword"
                type="password"
                inputRef={register}
                label="Confirm password"
                errors={errors.repassword || repasswordError}
                onChange={ e => setRepassword(e.target.value)}
            />
            <div style={{ textAlign: "right" }}>
                <MainButton as="input" type="submit" value="Sign up" disabled={isButtonDisabled}/>
            </div>
        </form>
    )
}