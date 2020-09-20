import React from 'react';
import styled from 'styled-components';
import { Card, CardContent, CircularProgress } from '@material-ui/core';

const Title = styled.p`
  color: #542677;
  font-weight: bold;
`;

const StyledCard = styled(Card)`
  && {
    flex: 1;
  }
`;

interface IResultCard {
  value: number | string;
  title: string;
  loading?: boolean;
}

const ResultCard = ({ value, title, loading }: IResultCard) => {
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
