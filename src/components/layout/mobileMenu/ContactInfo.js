import React from 'react';

const ContactInfo = () => {
  return (
    <div className="text-center mt-1">
      <p
        className="italic block hover:text-accent mt-1 transition-colors duration-500 ease-in-out"
        href="mailto:mark.schnabel@markschnabel.com"
        target="_top"
      >
        mark.schnabel@markschnabel.com
      </p>
    </div>
  );
};

export default ContactInfo;
