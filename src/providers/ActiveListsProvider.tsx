import React, { ReactNode, useMemo, useState } from 'react';
import { List } from '../@types/entities/List';
import { ActiveListsContext, useActiveLists } from '../context/ActiveLists';

type Props = {
  children: ReactNode;
};

export default function ActiveListsProvider({ children }: Props) {
  const { currentLists: data } = useActiveLists();

  const [currentLists, setLists] = useState<List[] | []>(data);

  const setCurrentLists = (items: List[] | []) => {
    setLists(items);
  };

  const stateMemo = useMemo(
    () => ({ currentLists, setCurrentLists }),
    [currentLists],
  );

  return (
    <ActiveListsContext.Provider value={stateMemo}>
      {children}
    </ActiveListsContext.Provider>
  );
}
