import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';

import { CurrencyType, useAvailableCurrenciesQuery } from '../gen-types';

interface ICurrencySelect {
  label?: string;
  value: CurrencyType;
  setValue: (value: CurrencyType) => void;
}

const CurrencySelect = ({
  label,
  value,
  setValue,
}: ICurrencySelect): JSX.Element => {
  const { data, loading, error } = useAvailableCurrenciesQuery();

  return (
    <Autocomplete
      options={data?.currencies ?? []}
      style={{ width: 150 }}
      disabled={Boolean(error) || loading}
      value={value}
      onChange={(_, value) => setValue(value as CurrencyType)}
      renderInput={(params) => (
        <TextField {...params} label={label ?? 'Label'} variant="outlined" />
      )}
    />
  );
};

export default CurrencySelect;
