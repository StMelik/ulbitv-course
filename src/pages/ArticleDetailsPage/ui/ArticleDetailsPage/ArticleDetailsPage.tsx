import { ArticleDetails } from '@/entities/Article';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLouder,
  ReducersList
} from '@/shared/lib/components/DynamicModuleLouder/DynamicModuleLouder';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleRating } from '@/features/ArticleRaiting';
import { ToggleFeature } from '@/shared/lib/features';
import { Card } from '@/shared/ui/deprecated/Card';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer
};
const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;

  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLouder
      reducers={reducers}
      removeAfterUnmount
    >
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <VStack
          gap='16'
          max
        >
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          <ToggleFeature
            feature='isArticleRatingEnabled'
            on={<ArticleRating articleId={id} />}
            off={<Card>{t('Оценка статей скоро появится')}</Card>}
          />
          <ToggleFeature
            feature='isArticleRecommendationsEnabled'
            on={<ArticleRecommendationsList />}
            off={<Card>{t('Рекомендации скоро появятся')}</Card>}
          />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLouder>
  );
};

export default ArticleDetailsPage;
