import { useSelector, useDispatch } from 'react-redux';
import { FilterLabel, FilterInput, FilterWrapper } from './Filter.syled';
import { getFilterContsacts } from '../../redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const contactsFilter = useSelector(state => state.filter);

  return (
    <FilterWrapper>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          type="search"
          value={contactsFilter}
          onChange={event =>
            dispatch(getFilterContsacts(event.currentTarget.value))
          }
        ></FilterInput>
      </FilterLabel>
    </FilterWrapper>
  );
};

export default Filter;
