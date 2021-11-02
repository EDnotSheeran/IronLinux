import * as React from 'react';
import { motion } from 'framer-motion';
import { CloseButton, CloseButtonProps } from '@components/Buttons';
import { classNames } from '@libs/utils';
import { BiCheck, BiInfoCircle, BiErrorCircle } from 'react-icons/bi';

export type Message = {
  id: number;
  content: string;
  author?: string;
  type?: 'success' | 'error' | 'info';
};

export type NotificationProps = CloseButtonProps & Omit<Message, 'id'>;

const Notification: React.FC<NotificationProps> = ({
  close,
  content,
  author,
  type,
}) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: 50, scale: 0.3 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
      className={classNames(
        'p-5 px-10 max-w-80 min-w-60 min-h-16 relative',
        'bg-white rounded mb-2 drop-shadow-lg border',
        'text-base border-gray-300 text-blueGray-700'
      )}
    >
      {type === 'success' && (
        <BiCheck className="block text-3xl absolute top-1/2 -translate-y-1/2 left-1 text-green-600" />
      )}
      {type === 'info' && (
        <BiInfoCircle className="block text-3xl absolute top-1/2 -translate-y-1/2 left-1 text-blue-400" />
      )}
      {type === 'error' && (
        <BiErrorCircle className="block text-3xl absolute top-1/2 -translate-y-1/2 left-1 text-red-500" />
      )}
      {content}
      <CloseButton
        close={close}
        className="absolute top-2 right-1 text-blueGray-400"
        width="1rem"
        height="1rem"
      />
    </motion.li>
  );
};

export default Notification;
