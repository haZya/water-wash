export const backendUrl =
  (process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_BACKEND_URL
    : process.env.NEXT_PUBLIC_BACKEND_LH_URL) ?? '';
