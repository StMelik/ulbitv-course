import { classNames } from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Text, TextSize } from '@/shared/ui/deprecated/Text';
import { ArticleList } from '@/entities/Article';
import { VStack } from '@/shared/ui/deprecated/Stack';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const {
      data: articles,
      isLoading,
      error
    } = useArticleRecommendationsList(3);

    if (isLoading || error || !articles) {
      return null;
    }

    return (
      <VStack
        data-testid='ArticleRecommendationsList'
        gap='16'
        className={classNames('', {}, [className])}
      >
        <Text
          size={TextSize.L}
          title={t('Рекомендуем')}
        />
        <ArticleList
          target='_blank'
          articles={articles}
        />
      </VStack>
    );
  }
);
