export const Currency = (
  num: number,
  lang: string = 'en',
  currency: string = 'USD'
) => {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: currency,
  }).format(num);
};
