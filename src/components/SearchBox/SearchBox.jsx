import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={styles.searchBox}>
      <label htmlFor="filter" className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleChange}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;
