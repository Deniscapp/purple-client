import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { TextField } from '@material-ui/core';

const CURRENCIES_QUERY = gql`
    query AvailableCurrencies {
        currencies
    }
`

interface ICurrencySelect {
    label?: string;
    value: string;
    setValue: (value: string) => void; 
}

const CurrencySelect = ({ label, value, setValue }: ICurrencySelect) => {
    const { data, loading, error } = useQuery(CURRENCIES_QUERY);

    return (
        <Autocomplete
            options={data?.currencies ?? []}
            style={{ width: 150 }}
            disabled={Boolean(error) || loading}
            value={value}
            onChange={(_, value) => setValue(value as string)}
            renderInput={(params) => <TextField {...params} label={label ?? 'Label'} variant="outlined" />}
        />
    )

}

export default CurrencySelect;
