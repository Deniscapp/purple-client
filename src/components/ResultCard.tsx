import React from 'react';
import { CardContent, CircularProgress } from '@material-ui/core';

import { Title, StyledCard } from './styledComponents';

interface IResultCard {
  value: number | string;
  title: string;
  loading?: boolean;
}

const ResultCard = ({ value, title, loading }: IResultCard): JSX.Element => {
  const formatValue = (value: number | string) => {
    if (typeof value === 'number')
      return new Intl.NumberFormat('en-IN', {
        maximumSignificantDigits: 3,
      }).format(value);

    return value;
  };

  return (
    <StyledCard>
      <CardContent>
        <Title>{title}</Title>
        {loading ? (
          <CircularProgress size={20} />
        ) : (
          <p>{formatValue(value) ?? '-'}</p>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default ResultCard;
