import React, { useState } from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router';
import { SidebarActionItems } from '../ActionItems/ActionsItems';
import { SidebarNavigation } from '../Navigation/Navigation';
import { SidebarProfile } from '../Profile/Profile';

import { Logo } from '../../UI/Logo/Logo';

import { ActionItem, Pages } from './types';
import { useSignoutMutation } from '../../../store/api/authApi';
import { Path } from '../../../constants/routes';
import s from './Sidebar.module.scss';
import { ContentSkeleton } from '../../UI/ContentLoader/ContentLoader';
import { eventBus, EventTypes } from '../../../packages/EventBus';
import { CustomError } from '../../../@types/entities/ErrorObject';
import { NotificationType } from '../../../@types/entities/Notification';
import { useGetCurrentUserQuery } from '../../../store/api/userApi';
import translations from '../../../pages/Notifications.i18n.json';
import { useLocalTranslation } from '../../../hooks/useLocalTranslation';
import { Button } from '../../UI/Button/Button';
import { UISvgSelector } from '../../UI/UISvgSelector';

type Props<T> = {
  pages: T;
  actions: ActionItem[];
};

export function Sidebar<T extends Pages>({ pages, actions }: Props<T>) {
  const { t } = useLocalTranslation(translations);
  const navigate = useNavigate();
  const { data: user } = useGetCurrentUserQuery();
  const [isOpen, setIsOpen] = useState(false);
  const sortedPages = Object.keys(pages).map(key => ({
    icon: pages[key].icon,
    name: pages[key].name,
    path: pages[key].path,
    key,
  }));
  const [signOut] = useSignoutMutation();
  const goToHelp = () => navigate(Path.HELP);
  const handleSignOut = () => {
    try {
      signOut();
      localStorage.removeItem('accessToken');
    } catch (e) {
      eventBus.emit(EventTypes.notification, {
        message: (e as CustomError).data.message,
        title: t('error'),
        type: NotificationType.DANGER,
      });
    }
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(p => !p)}
        type="small"
        className={s.mobile_menu}
      >
        <UISvgSelector id="menu-mobile" />
      </Button>
      <div
        className={classNames(s.sidebar_container, {
          [s.sidebar_open]: isOpen,
        })}
      >
        <div
          className={classNames(s.sidebar_content, {
            [s.sidebar_content_open]: isOpen,
          })}
        >
          <Logo />
          {user ? (
            <SidebarProfile user={user} />
          ) : (
            <ContentSkeleton
              type="profile"
              width={400}
              height={50}
              bgColor="#4F4E60"
              fgColor="#7a798f"
              style={{ marginTop: '50px' }}
            />
          )}
          <SidebarNavigation
            setOpen={(b: boolean) => setIsOpen(b)}
            pages={sortedPages}
          />
          <SidebarActionItems
            items={actions}
            onSignOut={handleSignOut}
            onGoToHelp={goToHelp}
          />
        </div>
      </div>
    </>
  );
}
