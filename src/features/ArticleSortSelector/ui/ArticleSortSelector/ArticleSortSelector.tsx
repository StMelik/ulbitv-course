import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOption } from '@/shared/ui/Select';
import cls from './ArticleSortSelector.module.scss';
import { SortOrder } from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo((props: ArticleSortSelectorProps) => {
  const { className, sort, order, onChangeOrder, onChangeSort } = props;

  const { t } = useTranslation();

  const orderOptions = useMemo<SelectOption<SortOrder>[]>(
    () => [
      {
        value: 'asc',
        content: t('возрастанию')
      },
      {
        value: 'desc',
        content: t('убыванию')
      }
    ],
    [t]
  );

  const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(
    () => [
      {
        value: ArticleSortField.CREATED,
        content: t('дате создания')
      },
      {
        value: ArticleSortField.TITLE,
        content: t('названию')
      },
      {
        value: ArticleSortField.VIEW,
        content: t('просмотрам')
      }
    ],
    [t]
  );

  return (
    <div className={classNames(cls.articleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        options={sortFieldOptions}
        label={t('Сортировать по')}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        className={cls.order}
        options={orderOptions}
        label={t('по')}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  );
});
