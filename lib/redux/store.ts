import { configureStore, Middleware } from '@reduxjs/toolkit';
import about from 'components/about/store';
import commercial from 'components/commercial/store';
import contact from 'components/contact/store';
import home from 'components/home/store';
import shared from 'components/shared/store';
import { createLogger } from 'redux-logger';

const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  const logger: Middleware = createLogger({
    collapsed: (_getState, _action, logEntry) => !logEntry?.error,
  });

  middlewares.push(logger);
}

const store = configureStore({
  reducer: {
    shared,
    home,
    about,
    contact,
    commercial,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
