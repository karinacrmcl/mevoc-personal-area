import React, { CSSProperties, ReactNode } from 'react';
import classNames from 'classnames';
import s from './CardLayout.module.scss';

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  bgColor?: string;
  styles?: CSSProperties;
  className?: string;
  classNameContent?: string;
};

export function CardLayout({
  children,
  title,
  description,
  bgColor,
  styles,
  className,
  classNameContent,
}: Props) {
  return (
    <div
      className={classNames(s.card_container, className)}
      style={{ ...styles, background: bgColor }}
    >
      <h4 className={s.card_title}>{title}</h4>
      {description && <p className={s.card_descirpiton}>{description}</p>}

      <div className={classNames(s.card_content, classNameContent)}>
        {children}
      </div>
    </div>
  );
}
