import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { useFetchContactsQuery } from '../redux/contactsApi';
import { changeFilter } from '../redux/filterSlicer';
import FilterImg from '../Images/FilterImg';
import css from './Filter.module.css';

function Filter() {
  const { data } = useFetchContactsQuery();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.query);

  return (
    <div className={css.filter_block}>
      <label>
        Contact filter:
        <input
          disabled={true ? data.length === 0 : data.length > 0}
          type="text"
          value={filter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
        <FilterImg />
      </label>
    </div>
  );
}

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
};
