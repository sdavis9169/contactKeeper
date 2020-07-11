import React, { useState } from 'react';

const ContactForm = () => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal'
  });

  const { name, email, phone, type } = contact;

  return (
    <form>
      <h2 className='text-primary'>Add Contacts</h2>
      <input type='text' placeholder='Name' value={name} onChange={onChange} />
      <input
        type='email'
        placeholder='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        checked={type === 'personal'}
      />{' '}
      Personal{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        checked={type === 'professional'}
      />{' '}
      Professional{' '}
      <input
        type='submit'
        value='Add Contact'
        className='btn btn-primary btn-block'
      />
    </form>
  );
};

export default ContactForm;
