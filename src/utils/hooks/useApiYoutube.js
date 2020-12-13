import {useEffect, useState} from 'react';
import Api from '../api/apiUrl';
 // AIzaSyBJdRcmRN5lSmBMJsFZVdqcFqv3GIDJsg0 chalenge api
 // AIzaSyDM9O4AhgKFC6XVcvD97oIINPHl_Df7_5A my api
 // AIzaSyA_4mxhvsunwJCCEvfrgghVAhrz9yjfAcI another api
function useApiYoutube(props) {
    const [youtubeList, setYoutubeList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchYoutube = async () => {
        try{
            const list = await Api.get('', {params: {part: 'snippet', maxResults: '25', q: `${props}`, key: 'AIzaSyA_4mxhvsunwJCCEvfrgghVAhrz9yjfAcI'} });
            const currentList = list.data.items.map((x) => {
                if(x.id.hasOwnProperty('videoId')) {
                    return x;
                }
                return null;
            });
            setYoutubeList(currentList.filter(x=>x));
            setLoading(false);
        } catch(e) {
            setLoading(false);
            console.log('error al consumir el api', e);
        }
    }

    useEffect(() => {
        fetchYoutube();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props])

    return {youtubeList, loading};
}

export default useApiYoutube;