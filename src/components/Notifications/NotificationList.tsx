import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Notification, Message } from '@components/Notifications';

export type NotificationListProps = {
  notifications: Message[];
  setNotifications: React.Dispatch<React.SetStateAction<Message[]>>;
};

const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  setNotifications,
}) => {
  return (
    <>
      <ul className="absolute top-2 right-2">
        <AnimatePresence initial={false}>
          {notifications.map(({ id, author, content, type }) => (
            <Notification
              key={id}
              author={author}
              content={content}
              type={type}
              close={() => setNotifications(remove(notifications, id))}
            />
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
};

export default NotificationList;

const remove = (arr: Message[], id: number) => {
  const newArr = [...arr];
  newArr.splice(
    newArr.findIndex(message => message.id === id),
    1
  );
  return newArr;
};
