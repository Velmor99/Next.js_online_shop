import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './green-cross.svg';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';
import { useState } from 'react';

export const ReviewForm = ({ productId, isOpened, className, ...props }: ReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const onSubmit: SubmitHandler<IReviewForm> = async (data) => {
    try {
      await console.log(data);
      reset();
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
      setError('Somethig went wrong');
    } finally {
      setError('yes');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          tabIndex={isOpened ? 0 : -1}
          {...register('name', { required: { value: true, message: 'Заполните имя' } })}
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          tabIndex={isOpened ? 0 : -1}
          {...register('title', { required: { value: true, message: 'Заполните заголовок' } })}
          placeholder="Заголовок отзыва"
          className={styles.title}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            render={({ field }) => (
              <Rating
                error={errors.rating}
                rating={field.value}
                ref={field.ref}
                isEditable
                setRating={field.onChange}
                tabIndex={isOpened ? 0 : -1}
              />
            )}
          />
        </div>
        <Textarea
          tabIndex={isOpened ? 0 : -1}
          {...register('description', { required: { value: true, message: 'Заполните описание' } })}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button tabIndex={isOpened ? 0 : -1} appearance="primary">Отправить</Button>
          <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && (
        <div className={styles.success}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки</div>
          <CloseIcon onClick={() => setIsSuccess(false)} className={styles.close} />
        </div>
      )}
      {error && (
        <div className={styles.error}>
          {error}
          <CloseIcon onClick={() => setError('')} className={styles.close} />
        </div>
      )}
    </form>
  );
};
