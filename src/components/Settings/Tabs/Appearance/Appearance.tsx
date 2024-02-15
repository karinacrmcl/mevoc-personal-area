/* eslint-disable */
import React, { useEffect } from 'react';
import {
  accentColors,
  currentTheme,
  textColor,
  textSizes,
} from '../../../../constants/settings';
import { useLocalTranslation } from '../../../../hooks/useLocalTranslation';
import { MultiSelector } from '../../../UI/MultiSelector/MultiSelector';
import s from './Appearance.module.scss';
import { SettingsColorSelect } from './ColorSelect/ColorSelect';
import settings from '../../../../pages/Settings/Settings.i18n.json';
import { hexToRgb, rgbToHex } from '../../../../utils/lib/colorTransform';
import { defaultColorValues } from '../../../../constants/kit/themes';

import {
  useGetCurrentUserQuery,
  useUpdateUserMutation,
} from '../../../../store/api/userApi';
import classNames from 'classnames';

type Color = {
  label: string;
  value: string;
  key: number;
};

export default function AppearanceTab() {
  const { data: user } = useGetCurrentUserQuery();
  const [update] = useUpdateUserMutation();

  const onThemeSelect = (st: string) => {
    update({ theme: st, id: user?.id });
  };

  const onColorSelect = (color: Color) => {
    const rgb = hexToRgb(color.value);
    const numericValues = [rgb?.r, rgb?.g, rgb?.b].join(',');
    update({ accentColor: numericValues, id: user?.id });
  };

  const onTextSizeSelect = () => console.log();
  const onTextColorSelect = () => console.log();

  const { t } = useLocalTranslation(settings);

  return (
    <div className={s.appearance_container}>
      <div className={s.appearance_sections}>
        <div className={classNames(s.appearance_section, s.inactive)}>
          <h3 className={s.appearance_title}>{t('currentTheme')}</h3>
          <div className={s.appearance_content}>
            <MultiSelector
              options={currentTheme}
              defaultActive={defaultColorValues.theme}
              onClick={onThemeSelect}
            />
          </div>
        </div>
        <div className={s.appearance_section}>
          <h3 className={s.appearance_title}>{t('accentColor')}</h3>
          <div className={s.appearance_content}>
            <SettingsColorSelect
              defaultSelected={rgbToHex(
                user?.accentColor || defaultColorValues.accentColor
              )}
              onClick={onColorSelect}
              colors={accentColors}
            />
          </div>
        </div>
        <div className={s.inactive}>
          <h3 className={s.appearance_title}>{t('textSize')}</h3>
          <div className={s.appearance_content}>
            <MultiSelector
              options={textSizes}
              defaultActive="medium"
              onClick={onTextSizeSelect}
              className={s.multiselector}
            />
          </div>
        </div>
        <div className={s.inactive}>
          <h3 className={s.appearance_title}>{t('textColor')}</h3>
          <div className={s.appearance_content}>
            <MultiSelector
              options={textColor}
              defaultActive="normal"
              onClick={onTextColorSelect}
              className={s.multiselector}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
