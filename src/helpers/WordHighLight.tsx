export default function WordHighLight(text: string, highlightWords: string[]) {
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
