import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

export const StyledButton = styled(Button)`
  && {
    color: #542677;
    background-color: #20ceff;
    font-weight: bold;
    &:hover {
      background-color: #20ceff;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > div {
    margin-right: 10px;
  }
  @media screen and (max-width: 425px) {
    > div {
      margin-bottom: 5px;
    }
  }
`;

export const ConvertionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    > div:first-child {
      margin-right: 15px;
    }
  }

  @media screen and (max-width: 425px) {
    > div:first-child {
      margin-bottom: 10px;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  && {
    color: white;
  }
`;
