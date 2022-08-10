import { configureStore, Middleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

const middlewares: Middleware[] = [];

if (process.env.NODE_ENV === 'development') {
  const logger: Middleware = createLogger({
    collapsed: (_getState, _action, logEntry) => !logEntry?.error,
  });

  middlewares.push(logger);
}

const store = configureStore({
  reducer: {},
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
