/** * GENERATED FILE. DO NOT MODIFY HERE!. */
/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export enum CurrencyType {
  Aed = 'AED',
  Afn = 'AFN',
  All = 'ALL',
  Amd = 'AMD',
  Ang = 'ANG',
  Aoa = 'AOA',
  Ars = 'ARS',
  Aud = 'AUD',
  Awg = 'AWG',
  Azn = 'AZN',
  Bam = 'BAM',
  Bbd = 'BBD',
  Bdt = 'BDT',
  Bgn = 'BGN',
  Bhd = 'BHD',
  Bif = 'BIF',
  Bmd = 'BMD',
  Bnd = 'BND',
  Bob = 'BOB',
  Brl = 'BRL',
  Bsd = 'BSD',
  Btc = 'BTC',
  Btn = 'BTN',
  Bwp = 'BWP',
  Byn = 'BYN',
  Bzd = 'BZD',
  Cad = 'CAD',
  Cdf = 'CDF',
  Chf = 'CHF',
  Clf = 'CLF',
  Clp = 'CLP',
  Cnh = 'CNH',
  Cny = 'CNY',
  Cop = 'COP',
  Crc = 'CRC',
  Cuc = 'CUC',
  Cup = 'CUP',
  Cve = 'CVE',
  Czk = 'CZK',
  Djf = 'DJF',
  Dkk = 'DKK',
  Dop = 'DOP',
  Dzd = 'DZD',
  Egp = 'EGP',
  Ern = 'ERN',
  Etb = 'ETB',
  Eur = 'EUR',
  Fjd = 'FJD',
  Fkp = 'FKP',
  Gbp = 'GBP',
  Gel = 'GEL',
  Ggp = 'GGP',
  Ghs = 'GHS',
  Gip = 'GIP',
  Gmd = 'GMD',
  Gnf = 'GNF',
  Gtq = 'GTQ',
  Gyd = 'GYD',
  Hkd = 'HKD',
  Hnl = 'HNL',
  Hrk = 'HRK',
  Htg = 'HTG',
  Huf = 'HUF',
  Idr = 'IDR',
  Ils = 'ILS',
  Imp = 'IMP',
  Inr = 'INR',
  Iqd = 'IQD',
  Irr = 'IRR',
  Isk = 'ISK',
  Jep = 'JEP',
  Jmd = 'JMD',
  Jod = 'JOD',
  Jpy = 'JPY',
  Kes = 'KES',
  Kgs = 'KGS',
  Khr = 'KHR',
  Kmf = 'KMF',
  Kpw = 'KPW',
  Krw = 'KRW',
  Kwd = 'KWD',
  Kyd = 'KYD',
  Kzt = 'KZT',
  Lak = 'LAK',
  Lbp = 'LBP',
  Lkr = 'LKR',
  Lrd = 'LRD',
  Lsl = 'LSL',
  Lyd = 'LYD',
  Mad = 'MAD',
  Mdl = 'MDL',
  Mga = 'MGA',
  Mkd = 'MKD',
  Mmk = 'MMK',
  Mnt = 'MNT',
  Mop = 'MOP',
  Mro = 'MRO',
  Mru = 'MRU',
  Mur = 'MUR',
  Mvr = 'MVR',
  Mwk = 'MWK',
  Mxn = 'MXN',
  Myr = 'MYR',
  Mzn = 'MZN',
  Nad = 'NAD',
  Ngn = 'NGN',
  Nio = 'NIO',
  Nok = 'NOK',
  Npr = 'NPR',
  Nzd = 'NZD',
  Omr = 'OMR',
  Pab = 'PAB',
  Pen = 'PEN',
  Pgk = 'PGK',
  Php = 'PHP',
  Pkr = 'PKR',
  Pln = 'PLN',
  Pyg = 'PYG',
  Qar = 'QAR',
  Ron = 'RON',
  Rsd = 'RSD',
  Rub = 'RUB',
  Rwf = 'RWF',
  Sar = 'SAR',
  Sbd = 'SBD',
  Scr = 'SCR',
  Sdg = 'SDG',
  Sek = 'SEK',
  Sgd = 'SGD',
  Shp = 'SHP',
  Sll = 'SLL',
  Sos = 'SOS',
  Srd = 'SRD',
  Ssp = 'SSP',
  Std = 'STD',
  Stn = 'STN',
  Svc = 'SVC',
  Syp = 'SYP',
  Szl = 'SZL',
  Thb = 'THB',
  Tjs = 'TJS',
  Tmt = 'TMT',
  Tnd = 'TND',
  Top = 'TOP',
  Try = 'TRY',
  Ttd = 'TTD',
  Twd = 'TWD',
  Tzs = 'TZS',
  Uah = 'UAH',
  Ugx = 'UGX',
  Usd = 'USD',
  Uyu = 'UYU',
  Uzs = 'UZS',
  Vef = 'VEF',
  Ves = 'VES',
  Vnd = 'VND',
  Vuv = 'VUV',
  Wst = 'WST',
  Xaf = 'XAF',
  Xag = 'XAG',
  Xau = 'XAU',
  Xcd = 'XCD',
  Xdr = 'XDR',
  Xof = 'XOF',
  Xpd = 'XPD',
  Xpf = 'XPF',
  Xpt = 'XPT',
  Yer = 'YER',
  Zar = 'ZAR',
  Zmw = 'ZMW',
  Zwl = 'ZWL'
}

export type ConversionStats = {
  __typename?: 'ConversionStats';
  mostPolularCurrency?: Maybe<Scalars['String']>;
  totalConverted?: Maybe<Scalars['Float']>;
  totalConversions?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  currentStats: ConversionStats;
  conversions: Array<Maybe<Conversion>>;
  currencies?: Maybe<Array<Maybe<CurrencyType>>>;
};

export type Conversion = {
  __typename?: 'Conversion';
  _id: Scalars['ID'];
  value: Scalars['Float'];
  originCurrency: CurrencyType;
  targetCurrency: CurrencyType;
  result: Scalars['Float'];
};

export type NewConversionInput = {
  value: Scalars['Float'];
  originCurrency: CurrencyType;
  targetCurrency: CurrencyType;
};

export type Mutation = {
  __typename?: 'Mutation';
  newConversion: Conversion;
};


export type MutationNewConversionArgs = {
  input: NewConversionInput;
};

export type ConversionListQueryVariables = Exact<{ [key: string]: never; }>;


export type ConversionListQuery = (
  { __typename?: 'Query' }
  & { conversions: Array<Maybe<(
    { __typename?: 'Conversion' }
    & Pick<Conversion, '_id' | 'originCurrency' | 'targetCurrency' | 'value' | 'result'>
  )>> }
);

export type NewConversionMutationVariables = Exact<{
  newConversion: NewConversionInput;
}>;


export type NewConversionMutation = (
  { __typename?: 'Mutation' }
  & { newConversion: (
    { __typename?: 'Conversion' }
    & Pick<Conversion, '_id' | 'value' | 'originCurrency' | 'targetCurrency' | 'result'>
  ) }
);

export type StatisticsQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type StatisticsQueryQuery = (
  { __typename?: 'Query' }
  & { currentStats: (
    { __typename?: 'ConversionStats' }
    & Pick<ConversionStats, 'mostPolularCurrency' | 'totalConverted' | 'totalConversions'>
  ) }
);


export const ConversionListDocument = gql`
    query ConversionList {
  conversions {
    _id
    originCurrency
    targetCurrency
    value
    result
  }
}
    `;

/**
 * __useConversionListQuery__
 *
 * To run a query within a React component, call `useConversionListQuery` and pass it any options that fit your needs.
 * When your component renders, `useConversionListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useConversionListQuery({
 *   variables: {
 *   },
 * });
 */
export function useConversionListQuery(baseOptions?: Apollo.QueryHookOptions<ConversionListQuery, ConversionListQueryVariables>) {
        return Apollo.useQuery<ConversionListQuery, ConversionListQueryVariables>(ConversionListDocument, baseOptions);
      }
export function useConversionListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ConversionListQuery, ConversionListQueryVariables>) {
          return Apollo.useLazyQuery<ConversionListQuery, ConversionListQueryVariables>(ConversionListDocument, baseOptions);
        }
export type ConversionListQueryHookResult = ReturnType<typeof useConversionListQuery>;
export type ConversionListLazyQueryHookResult = ReturnType<typeof useConversionListLazyQuery>;
export type ConversionListQueryResult = Apollo.QueryResult<ConversionListQuery, ConversionListQueryVariables>;
export const NewConversionDocument = gql`
    mutation NewConversion($newConversion: NewConversionInput!) {
  newConversion(input: $newConversion) {
    _id
    value
    originCurrency
    targetCurrency
    result
  }
}
    `;
export type NewConversionMutationFn = Apollo.MutationFunction<NewConversionMutation, NewConversionMutationVariables>;

/**
 * __useNewConversionMutation__
 *
 * To run a mutation, you first call `useNewConversionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNewConversionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [newConversionMutation, { data, loading, error }] = useNewConversionMutation({
 *   variables: {
 *      newConversion: // value for 'newConversion'
 *   },
 * });
 */
export function useNewConversionMutation(baseOptions?: Apollo.MutationHookOptions<NewConversionMutation, NewConversionMutationVariables>) {
        return Apollo.useMutation<NewConversionMutation, NewConversionMutationVariables>(NewConversionDocument, baseOptions);
      }
export type NewConversionMutationHookResult = ReturnType<typeof useNewConversionMutation>;
export type NewConversionMutationResult = Apollo.MutationResult<NewConversionMutation>;
export type NewConversionMutationOptions = Apollo.BaseMutationOptions<NewConversionMutation, NewConversionMutationVariables>;
export const StatisticsQueryDocument = gql`
    query StatisticsQuery {
  currentStats {
    mostPolularCurrency
    totalConverted
    totalConversions
  }
}
    `;

/**
 * __useStatisticsQueryQuery__
 *
 * To run a query within a React component, call `useStatisticsQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useStatisticsQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStatisticsQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useStatisticsQueryQuery(baseOptions?: Apollo.QueryHookOptions<StatisticsQueryQuery, StatisticsQueryQueryVariables>) {
        return Apollo.useQuery<StatisticsQueryQuery, StatisticsQueryQueryVariables>(StatisticsQueryDocument, baseOptions);
      }
export function useStatisticsQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StatisticsQueryQuery, StatisticsQueryQueryVariables>) {
          return Apollo.useLazyQuery<StatisticsQueryQuery, StatisticsQueryQueryVariables>(StatisticsQueryDocument, baseOptions);
        }
export type StatisticsQueryQueryHookResult = ReturnType<typeof useStatisticsQueryQuery>;
export type StatisticsQueryLazyQueryHookResult = ReturnType<typeof useStatisticsQueryLazyQuery>;
export type StatisticsQueryQueryResult = Apollo.QueryResult<StatisticsQueryQuery, StatisticsQueryQueryVariables>;