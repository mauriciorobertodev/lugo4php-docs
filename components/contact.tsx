import { sendContact } from '@/actions/discord';
import React from 'react';

const Contact = ({ children }: { children: React.ReactNode }) => {
  return (
    <form className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center" method='post' action={sendContact}>
      <input type="text" />
      <button type="submit">send</button>
    </form>
  );
};

export default Contact;
