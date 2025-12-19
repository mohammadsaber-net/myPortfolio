import 'server-only'

export const getDictionary = async (locale: 'en' | 'ar') => {
  const dict = await import(`../../locales/${locale}.json`);
  return dict.default;
};
