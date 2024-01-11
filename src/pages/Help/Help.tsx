import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { merge } from 'lodash';
import s from './Help.module.scss';
import { useLocalTranslation } from '../../hooks/useLocalTranslation';
import sidebar from '../../components/Sidebar/Sidebar/Sidebar.i18n.json';
import { PageLayout } from '../../layouts/PageLayout/PageLayout';

export default function HelpPage() {
  const { t } = useLocalTranslation(merge(sidebar));
  const isSmallScreen = useMediaQuery({ maxWidth: '1100px' });

  return (
    <PageLayout
      title={t('help')}
      styles={{ height: isSmallScreen ? '1330px' : 'fit-content' }}
    >
      <div className={s.howitworks} />
    </PageLayout>
  );
}
