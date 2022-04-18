import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import App from './app/App';
import { store } from './app/store';
import { DeckForm } from './decks/DeckForm';
import { Decks } from './decks/Decks';
import { Study } from './study/Study';
import { User } from './users/User';
import { Users } from './users/Users';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="decks" element={<Outlet />}>
              <Route index element={<Decks />} />
              <Route path="new" element={<DeckForm />} />
              <Route path=":deckId" element={<DeckForm />} />
            </Route>
            <Route path="study" element={<Study />} />
            <Route path="users" element={<Outlet />}>
              <Route index element={<Users />} />
              <Route path=":userId" element={<User />} />
            </Route>
            <Route path="*" element={<Navigate to="/decks" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/decks" replace />} />
          <Route index element={<Navigate to="/decks" replace />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
