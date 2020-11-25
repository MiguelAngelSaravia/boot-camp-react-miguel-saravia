import React, {useState} from 'react';

import AppHeader from '../../components/AppBar';
import CardContent from '../../components/CardContent';

function Home() {
    const [value, setValue] = useState({search: 'wizeline'});
    const criteriaFetch = (resp) => {
        setValue({...value, search: resp});
    }
    
    return (
        <div>
            <AppHeader value={value.search} onCriteria={criteriaFetch}/>
            {/* <CardContent query = {value.search}/> */}
        </div>
    )
}
 export default Home;