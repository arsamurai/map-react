import { advertisementsApi } from './advertisements/advertisementsApi';

export const reducers = {
  [advertisementsApi.reducerPath]: advertisementsApi.reducer
};

export const middlewares = [
  advertisementsApi.middleware
];

export const { useGetAdvertisementsQuery, useGetAdvertisementQuery, useAddAdvertisementMutation, useDeleteUserMutation } = advertisementsApi;