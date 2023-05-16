import { useSelector, useDispatch } from 'react-redux';
import css from 'components/Filter/Filter.module.css';
import { filterContact } from 'redux/filterSlice';

export function Search() {
  const filterValue = useSelector(state => state.filterValue);
  const dispatch = useDispatch();

  const onFielterChange = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <div className={css.divFilter}>
      <label className={css.labelFilter}>
        Find contakts by name
        <input
          className={css.inputFilter}
          type="text"
          value={filterValue}
          onChange={onFielterChange}
        />
      </label>
    </div>
  );
}
