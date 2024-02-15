import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { merge } from 'lodash';
import s from './Help.module.scss';
import { useLocalTranslation } from '../../hooks/useLocalTranslation';
import sidebar from '../../components/Sidebar/Sidebar/Sidebar.i18n.json';
import { PageLayout } from '../../layouts/PageLayout/PageLayout';
import { helpSteps } from '../../constants/help';

export default function HelpPage() {
  const { t } = useLocalTranslation(merge(sidebar));
  const isSmallScreen = useMediaQuery({ maxWidth: '1100px' });

  return (
    <PageLayout title={t('help')} styles={{ height: '90vh' }}>
      <div className={s.container}>
        {helpSteps.map(({ icon, title, description }, i) => (
          <div className={s.item}>
            <span className={s.number}>{i + 1}</span>
            {' '}
            {icon}
            <div className={s.content}>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
