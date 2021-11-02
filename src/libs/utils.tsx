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

export function shortDate(dateString: string, lang: string = 'en') {
  let d = new Date(dateString);
  let ye = new Intl.DateTimeFormat(lang, { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat(lang, { month: 'long' }).format(d);
  let da = new Intl.DateTimeFormat(lang, { day: '2-digit' }).format(d);

  return `${mo} ${da}, ${ye}`;
}

export function longDate(dateString: string, lang: string = 'en') {
  let d = new Date(dateString);
  let ye = new Intl.DateTimeFormat(lang, { year: 'numeric' }).format(d);
  let mo = new Intl.DateTimeFormat(lang, { month: 'long' }).format(d);
  let da = new Intl.DateTimeFormat(lang, { day: '2-digit' }).format(d);
  let wd = new Intl.DateTimeFormat(lang, { weekday: 'long' }).format(d);

  return `${wd}, ${mo} ${da}, ${ye}`;
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

export function classNames(...classes: (String | Boolean)[]) {
  return classes.filter(Boolean).join(' ');
}

export const safePromise = (
  promise: Promise<any>
): Promise<{ ok: boolean; result?: any; error?: Error }> =>
  promise
    .then(result => ({ ok: true, result }))
    .catch(error => Promise.resolve({ ok: false, error }));

export const delay = (time = 758) =>
  new Promise(resolve => setTimeout(resolve, time));
