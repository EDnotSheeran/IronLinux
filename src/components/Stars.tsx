import { StarIcon } from '@heroicons/react/solid';

const Stars: React.FC<StarsProps> = ({ children, max, value }) => {
  if (value < 0)
    throw Error('Invalid number: number of stars must be between 0 and ' + max);

  const schema = '1'.repeat(value).padEnd(max, '0').split('');

  return (
    <div>
      {schema.map((value, i) => (
        <StarIcon
          key={i}
          className={'w-5 inline-block'.concat(
            value == '1' ? ' text-gold-rose' : ' text-gray-400'
          )}
        />
      ))}
    </div>
  );
};
export default Stars;
