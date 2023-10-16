import { ContactList } from "components/Contact/ContactList"
import { Filter } from "components/Filter/Filter"
import { ContactForm } from "components/Form/ContactForm"


const Contacts = () => {
  return (
    <>
    <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList /></>
  )
}

export default Contacts