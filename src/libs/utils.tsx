export function Currency(
  num: number,
  lang: string = 'en',
  currency: string = 'USD'
) {
  return new Intl.NumberFormat(lang, {
    style: 'currency',
    currency: currency,
  }).format(num);
}

export function WordHighLight(text: string, highlightWords: string[]) {
  return text.split(' ').map((word, i) => {
    return (
      <span
        key={i}
        className={highlightWords.includes(word) ? 'text-gold' : undefined}
      >
        {word + ' '}
      </span>
    );
  });
}

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
