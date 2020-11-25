import {useEffect, useState} from 'react';
import Api from '../api/apiUrl';

function useApiYoutube(props) {
    const [youtubeList, setYoutubeList] = useState([]);
    const [loading, setLoading] = useState(true);
 // AIzaSyBJdRcmRN5lSmBMJsFZVdqcFqv3GIDJsg0 chalenge api
 // AIzaSyDM9O4AhgKFC6XVcvD97oIINPHl_Df7_5A my api
    const fetchYoutube = async () => {
        try{
            const list = await Api.get('', {params: {part: 'id', part: 'snippet', maxResults: '25', q: `${props}`, key: 'AIzaSyA_4mxhvsunwJCCEvfrgghVAhrz9yjfAcI'} });
            setYoutubeList(list.data.items);
            setLoading(false);
        } catch(e) {
            setLoading(false);
            console.log('error al consumir el api', e);
        }
    }

    useEffect(() => {
        fetchYoutube();
    }, [props])

    return {youtubeList, loading};
}

export default useApiYoutube;