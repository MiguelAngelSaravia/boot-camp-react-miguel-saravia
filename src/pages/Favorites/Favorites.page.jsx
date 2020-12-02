import React, {useState} from 'react';

import AppHeader from '../../components/AppBar';


function Favorites() {
    const [value, setValue] = useState({search: 'wizeline'});

    return (
        <div>
            <AppHeader />
            <span>Favorites</span>
        </div>
    )
}
export default Favorites;