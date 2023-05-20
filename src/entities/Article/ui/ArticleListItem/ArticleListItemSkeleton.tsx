import { classNames } from '@/shared/lib/classNames/classNames';
import { ToggleFeature, toggleFeatures } from '@/shared/lib/features';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { memo } from 'react';
import { ArticleView } from '../../model/consts/articleConsts';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => cls.ArticleListItemRedesigned,
      off: () => cls.ArticleListItem
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated
    });

    // const Card = toggleFeatures({
    //   name: 'isAppRedesigned',
    //   on: () => CardRedesigned,
    //   off: () => CardDeprecated
    // });

    if (view === ArticleView.LIST) {
      const cardContent = (
        <>
          <div className={cls.header}>
            <Skeleton
              borderRadius='50%'
              height={30}
              width={30}
            />
            <Skeleton
              width={150}
              height={16}
              className={cls.username}
            />
            <Skeleton
              width={150}
              height={16}
              className={cls.date}
            />
          </div>
          <Skeleton
            width={250}
            height={24}
            className={cls.title}
          />
          <Skeleton
            height={200}
            className={cls.img}
          />
          <div className={cls.footer}>
            <Skeleton
              height={36}
              width={200}
            />
          </div>
        </>
      );

      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <ToggleFeature
            feature='isAppRedesigned'
            on={
              <CardRedesigned
                border='round'
                className={cls.card}
              >
                {cardContent}
              </CardRedesigned>
            }
            off={
              <CardDeprecated className={cls.card}>
                {cardContent}
              </CardDeprecated>
            }
          />
        </div>
      );
    }

    const cardContent = (
      <>
        <ToggleFeature
          feature='isAppRedesigned'
          on={
            <Skeleton
              width='100%'
              height={150}
              borderRadius='32px'
              className={cls.img}
            />
          }
          off={
            <div className={cls.imageWrapper}>
              <Skeleton
                width={200}
                height={200}
                className={cls.img}
              />
            </div>
          }
        />
        <div className={cls.infoWrapper}>
          <Skeleton
            width={130}
            height={16}
          />
        </div>
        <Skeleton
          width={150}
          height={16}
          className={cls.title}
        />
      </>
    );

    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <ToggleFeature
          feature='isAppRedesigned'
          on={
            <CardRedesigned
              border='round'
              className={cls.card}
            >
              {cardContent}
            </CardRedesigned>
          }
          off={
            <CardDeprecated className={cls.card}>{cardContent}</CardDeprecated>
          }
        />
      </div>
    );
  }
);
