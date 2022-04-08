import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from 'react-router-dom';

import App from './app/App';
import { Deck } from './decks/Deck';
import { Decks } from './decks/Decks';
import { Study } from './study/Study';
import { User } from './users/User';
import { Users } from './users/Users';

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="decks" element={<Outlet />}>
            <Route index element={<Decks />} />
            <Route path=":deckId" element={<Deck />} />
          </Route>
          <Route path="study" element={<Study />} />
          <Route path="users" element={<Outlet />}>
            <Route index element={<Users />} />
            <Route path=":userId" element={<User />} />
          </Route>
          <Route path="*" element={<Navigate to="/decks" replace />} />
        </Route>
        <Route path="*" element={<Navigate to="/decks" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);
