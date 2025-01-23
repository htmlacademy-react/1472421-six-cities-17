import { ChangeEvent, FormEvent, useState } from 'react';
import { AuthorizationStatus, MAX_CHARACTERS_FOR_COMMENT, MIN_CHARACTERS_FOR_COMMENT } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks/state/state-hooks';
import { getAuthorizationStatus } from '../../storage/selectors';
import { postComment } from '../../storage/actions/api-actions';
import { FormDataType } from '../../types/user-type';

type OfferReviewsFormProps = {
  offerId: string;
}

const initialState: FormDataType = {
  rating: 0,
  comment: ''
};

function OfferReviewsForm({offerId}: OfferReviewsFormProps): JSX.Element {

  const [formData, setFormData] = useState<FormDataType>(initialState);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const dispatch = useAppDispatch();

  /* обработчик принимает два аргумента
    1 - объект события с типом changeEvent для инпута или для поля ввода текста
    2 - имя ключа объекта formData */
  const changeFormDataHandler = (
    evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    inputName: keyof FormDataType
  ) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [inputName]: evt.target.value
      }
    ));
  };

  const isValidForm = formData.comment.length >= MIN_CHARACTERS_FOR_COMMENT
    &&  formData.comment.length <= MAX_CHARACTERS_FOR_COMMENT
    && formData.rating

  /* При отправке формы очищает её и дизейблит кнопку */
  const submitFormDataHandler = (evt: FormEvent<HTMLFormElement>):void => {
    evt.preventDefault();
    const comment = formData.comment;
    const rating = +formData.rating;
    if(authorizationStatus === AuthorizationStatus.Auth){
      dispatch(postComment({id: offerId, rating, comment}))
        .then((response) => console.log(response.payload));
    }
  };


  return(
    <form onSubmit={submitFormDataHandler} className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={5}
          id="5-stars"
          type="radio"
          checked={5 === formData.rating}
          onChange={(evt) => changeFormDataHandler(evt, 'rating')}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={4}
          id="4-stars"
          type="radio"
          checked={4 === formData.rating}
          onChange={(evt) => changeFormDataHandler(evt, 'rating')}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={3}
          id="3-stars"
          type="radio"
          checked={3 === formData.rating}
          onChange={(evt) => changeFormDataHandler(evt, 'rating')}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={2}
          id="2-stars"
          type="radio"
          checked={2 === formData.rating}
          onChange={(evt) => changeFormDataHandler(evt, 'rating')}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          defaultValue={1}
          id="1-star"
          type="radio"
          checked={1 === formData.rating}
          onChange={(evt) => changeFormDataHandler(evt, 'rating')}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width={37} height={33}>
            <use xlinkHref="#icon-star" />
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={(evt) => changeFormDataHandler(evt, 'comment')}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isValidForm}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
