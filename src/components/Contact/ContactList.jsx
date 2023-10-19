import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, fetchContacts, updateContact } from 'redux/operations';
import { getContacts, getFilter } from 'redux/selectors';
import css from './ContactList.module.css';
import { ListItem, OrderedList } from '@chakra-ui/react';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const filterContacts = useSelector(getFilter);

  const removeContact = id => dispatch(deleteContact(id));

  const [updateData, setUpdateData] = useState({
    id: null,
    name: '',
    number: '',
  });
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleUpdateMode = (id, name, number) => {
    setIsUpdating(true);
    setUpdateData({ id, name, number });
  };

  const updatingContact = () => {
    dispatch(
      updateContact({
        id: updateData.id,
        data: { name: updateData.name, number: updateData.number },
      })
    );
    setIsUpdating(false);
    setUpdateData({ id: null, name: '', number: '' });
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterContacts.toLowerCase())
  );

  // console.log(visibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <OrderedList>
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => (
          <ListItem className={css.item} key={id}>
            <span className={css.nameNumber}>{name}: </span>
            <span className={css.nameNumber}>{number}</span>
            <button
              type="button"
              className={css.classListButton}
              onClick={() => removeContact(id)}
            >
              Delete
            </button>
            <button
              className={css.classListButtonUpdate}
              type="button"
              onClick={() => toggleUpdateMode(id, name, number)}
            >
              Update
            </button>
          </ListItem>
        ))}

      {isUpdating && (
        <ListItem>
          <input
            type="text"
            value={updateData.name}
            onChange={e =>
              setUpdateData({ ...updateData, name: e.target.value })
            }
          />
          <input
            type="text"
            value={updateData.number}
            onChange={e =>
              setUpdateData({ ...updateData, number: e.target.value })
            }
          />
          <button type="button" onClick={updatingContact}>
            Save Update
          </button>
        </ListItem>
      )}
    </OrderedList>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
