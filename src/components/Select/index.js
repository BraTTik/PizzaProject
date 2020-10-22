import React from 'react';
import { CustomSelect } from '../../styles';
import { useAppState } from '../../Contexts/AppState';
import { CHANGE_CURRENCY } from '../../Contexts/AppStateActions';
import PropTypes from 'prop-types';

export const Select = ( { options }) => {
    const { dispatch } = useAppState();

    const changeHandler = (e) => {
        dispatch({
            type: CHANGE_CURRENCY,
            payload: e.target.value,
        })
    }
    return (
        <CustomSelect>
            <select onChange={changeHandler}>
                { options.map( (option, i) => (
                    <option key={option+i}>{option}</option>
                ))}
            </select>
        </CustomSelect>
    )
}

Select.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string)
}