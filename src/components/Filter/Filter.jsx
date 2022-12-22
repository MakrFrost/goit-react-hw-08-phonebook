import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  function changeFilter(e) {
    const inputValue = e.target.value;
    dispatch(setFilter(inputValue));
  }

  return (
    <label htmlFor="filter">
      Find you contacts by name:
      <input
        type="text"
        name="filter"
        placeholder="Enter name here"
        onChange={changeFilter}
      />
    </label>
  );
};
