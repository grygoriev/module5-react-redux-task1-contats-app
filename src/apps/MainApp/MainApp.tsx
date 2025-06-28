import React, { useEffect } from 'react';
import './MainApp.scss';
import { ThemeProvider } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from 'src/components/Layout';
import {
  ContactListPage,
  GroupPage,
  ContactPage,
  FavoritListPage,
  GroupListPage,
} from 'src/pages';
import { store } from 'src/store/store';
import { fetchContacts } from 'src/store/actions/contactsActions';
import { fetchGroups } from 'src/store/actions/groupsActions';
import { Provider } from 'react-redux';
import { useAppDispatch } from 'src/hooks/hooks';

export const MainApp = () => (
    <Provider store={store}>
      <MainAppInner />
    </Provider>
);

const MainAppInner = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
    dispatch(fetchGroups());
  }, [dispatch]);

  return (
      <ThemeProvider
          breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
          minBreakpoint="xxs"
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<ContactListPage />} />
              <Route path="contact">
                <Route index element={<ContactListPage />} />
                <Route path=":contactId" element={<ContactPage />} />
              </Route>
              <Route path="groups">
                <Route index element={<GroupListPage />} />
                <Route path=":groupId" element={<GroupPage />} />
              </Route>
              <Route path="favorit" element={<FavoritListPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  );
};
