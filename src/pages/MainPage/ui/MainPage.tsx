import { Counter } from '@/entities/Counter';
import { Page } from '@/widgets/Page';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

function MainPage() {
  const { t } = useTranslation();

  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <Page
      data-testid="MainPage"
      className="main"
    >
      {t('Главная')}
      <Counter />
    </Page>
  );
}

export default MainPage;
