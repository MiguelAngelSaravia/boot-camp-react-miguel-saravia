import React, {useState} from 'react'
import AppHeader from '../../components/AppBar';

function Favorites() {
    const [value, setValue] = useState({search: 'wizeline'});
    const criteriaFetch = (resp) => {
        setValue({...value, search: resp});
    }
    return (
        <div>
            <AppHeader value={value.search} onCriteria={criteriaFetch}/>
        </div>
    )
}
export default Favorites;