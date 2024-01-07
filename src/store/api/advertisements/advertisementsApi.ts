import { createApi } from '@reduxjs/toolkit/query/react';
import { configBaseQuery } from '../config';
import { IAdvertisement } from '../../../components/modules/Advertisement/types';

export const advertisementsApi = createApi({
  reducerPath: 'advertisementsApi',
  tagTypes: ['Advertisements', 'Advertisement'],
  baseQuery: configBaseQuery,
  refetchOnMountOrArgChange: 360,
  endpoints: (build) => ({
    getAdvertisements: build.query<IAdvertisement[], void>({
      query: () => '/api/Advertisement',
      providesTags: (result) =>
        result ? result.map(({ id }) => ({ type: 'Advertisements', id })) : []
    }),
    getAdvertisement: build.query<IAdvertisement, number | undefined>({
      query: (id) => `/api/Advertisement/${id}`
    }),
    addAdvertisement: build.mutation<IAdvertisement, Omit<IAdvertisement, 'id'>>({
      query: (data) => {
        return {
          url: 'api/Advertisement',
          method: 'POST',
          body: data
        };
      },
      invalidatesTags: ['Advertisements'],
      onCacheEntryAdded: (_, { dispatch }) => {
        dispatch(advertisementsApi.util.invalidateTags(['Advertisements']));
      }
    }),
    deleteUser: build.mutation<{ status: number }, number>({
      query: (id) => ({
        url: `/api/Advertisement/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Advertisements']
    }),
  })
});
