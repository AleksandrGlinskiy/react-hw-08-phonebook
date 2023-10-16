import { ContactList } from './Contact/ContactList';
import { Filter } from './Filter/Filter';

import { ContactForm } from './Form/ContactForm';
export function App() {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}


