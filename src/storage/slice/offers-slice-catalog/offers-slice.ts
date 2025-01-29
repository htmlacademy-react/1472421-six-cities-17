import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, OFFER_BY_ID_TEMPLATE, SortingParams } from '../../../consts/const';
import { CityName, OfferType, OfferTypeById } from '../../../types/offer-types';
import { UserComments } from '../../../types/user-type';
import { fetchOffersAction, fetchOfferByIdAction, fetchUsersCommentsAction, postComment, fetchNearbyOffersAction, fetchFavoriteOfferAction } from '../../actions/api-actions-slice';
import { toast } from 'react-toastify';

const initialState = {
  city: 'Paris' as CityName,
  sortParam: SortingParams.Popular,
  offers: [] as OfferType[],
  isLoadingOffers: false,
  isLoadingOffersError: false,
  offerById: OFFER_BY_ID_TEMPLATE,
  isLoadingOfferById: false,
  isLoadingOfferByIdError: false,
  comments: [] as UserComments[],
  isLoadingComments: false,
  postCommentPending: false,
  postCommentError: false,
  nearbyOffers: [] as OfferType[],
  favoriteOffers: [] as OfferType[],
  isLoadingFavoriteOffers: false
};

export const offersSlice = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityName>) => {
      state.city = action.payload;
    },
    changeSortParam: (state, action: PayloadAction<SortingParams>) => {
      state.sortParam = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      /* Все предложения */
      .addCase(fetchOffersAction.pending, (state) => {
        state.isLoadingOffers = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action: PayloadAction<OfferType[]>) => {
        state.offers = action.payload;
        state.isLoadingOffers = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isLoadingOffers = false;
        state.isLoadingOffersError = true;
        toast.warning('Не удалось загрузить предложения по аренде');
      })
      /* Выбранное предложение */
      .addCase(fetchOfferByIdAction.pending, (state) => {
        state.isLoadingOfferByIdError = false;
        state.isLoadingOfferById = true;
      })
      .addCase(fetchOfferByIdAction.fulfilled, (state, action: PayloadAction<OfferTypeById>) => {
        state.offerById = action.payload;
        state.isLoadingOfferById = false;
      })
      .addCase(fetchOfferByIdAction.rejected, (state) => {
        state.isLoadingOfferById = false;
        state.isLoadingOfferByIdError = true;
        toast.warning('Не удалось загрузить предложение');
      })
      /* Комментарии */
      .addCase(fetchUsersCommentsAction.pending, (state) => {
        state.isLoadingComments = true;
      })
      .addCase(fetchUsersCommentsAction.fulfilled, (state, action: PayloadAction<UserComments[]>) => {
        state.comments = action.payload;
        state.isLoadingComments = false;
      })
      .addCase(fetchUsersCommentsAction.rejected, (state) => {
        state.isLoadingComments = false;
        toast.warning('Не удалось загрузить коментарии');
      })
      /* Предложения неподалеку */
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action: PayloadAction<OfferType[]>) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(fetchNearbyOffersAction.rejected, () => {
        toast.warning('Не удалось загрузить предложения неподалеку');
      })
      /*Отправка комментария*/
      .addCase(postComment.pending, (state) => {
        state.postCommentPending = true;
      })
      .addCase(postComment.fulfilled, (state, action: PayloadAction<UserComments>) => {
        state.comments.push(action.payload);
        state.postCommentPending = false;
      })
      .addCase(postComment.rejected, (state) => {
        state.postCommentPending = false;
        state.postCommentError = true;
        toast.warning('Не удалось отправить коментарий, возможно вы не поставили оценку или комментарий слишком короткий');
      })
      /* Получение списка избранных предложений */
      .addCase(fetchFavoriteOfferAction.pending, (state) => {
        state.isLoadingFavoriteOffers = true;
      })
      .addCase(fetchFavoriteOfferAction.fulfilled, (state, action: PayloadAction<OfferType[]>) => {
        state.favoriteOffers = action.payload;
        state.isLoadingFavoriteOffers = false;
      })
      .addCase(fetchFavoriteOfferAction.rejected, (state) => {
        state.isLoadingFavoriteOffers = false;
        toast.warning('Не удалось загрузить список избранных предложений');
      });
  },
});

export const {changeSortParam, changeCity} = offersSlice.actions;

