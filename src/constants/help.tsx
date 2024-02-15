import React from 'react';
import CreateList from '../assets/create-a-list.svg';
import AddWords from '../assets/add-words.svg';
import StartLearning from '../assets/start-learning.svg';
import TrackProgress from '../assets/track-progress.svg';

export const helpSteps = [
  {
    title: 'Create a list',
    description: (
      <>
        In the
        {' '}
        <b>Dashboard</b>
        {' '}
        or
        {' '}
        <b>List Management</b>
        {' '}
        page, click on the
        <b>add</b>
        {' '}
        button to create a list with the preferred name
      </>
    ),
    icon: <img src={CreateList} alt="create-list" />,
  },

  {
    title: 'Add the words',
    description: (
      <>
        After the list is created, add the words for learning by clicking the
        {' '}
        <b>plus</b>
        {' '}
        button. Type a word in the native language and the one you
        want to learn it in
      </>
    ),
    icon: <img src={AddWords} alt="create-list" />,
  },

  {
    title: 'Start learning',
    description: (
      <>
        Select the list in the
        {' '}
        <b>Active lists</b>
        {' '}
        in the
        {' '}
        <b>Dashboard</b>
        {' '}
        and
        click on the
        {' '}
        <b>Start learning</b>
        {' '}
        button
      </>
    ),
    icon: <img src={StartLearning} alt="create-list" />,
  },

  {
    title: 'Track the progress',
    description: (
      <>
        Keep learning new words and track your progress in your
        {' '}
        <b>User Profile</b>
      </>
    ),
    icon: <img src={TrackProgress} alt="create-list" />,
  },
];
