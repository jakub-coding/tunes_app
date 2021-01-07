import React, {useState} from 'react'

//Children
import TunesList from "../components/tunes/TunesList";
import TunesSearchForm from "../components/tunes/TunesSearchForm";

// component
const Tunes: React.FC = () => {
    // State
    const [searchQuery, setSearchQuery] = useState('');
    const [songs, setSongs] = useState([
        {
            id: 1,
            artist: 'Horký že slíže',
            track: 'trapny vietor',
        },
        {
            id: 2,
            artist: 'horký že slíže',
            track: 'atomový kryt'
        },
        {
            id: 3,
            artist: 'horký že slíže',
            track: 'Logická hádanka'
        }
    ])
    //
    // *** methods ***
    //

    //Callback
    const handleSearchFormSubmit = (data: string) => {
        const newSong = {
            id: Math.max(...songs.map(s => s.id)) +1,
            artist: 'Horký že slíže',
            track: data,
        }

        setSongs([
            ...songs, newSong
        ])
    }
    //Callback
    const handleInputChange = (data: string) => {
        setSearchQuery(data);
    }

    // Template
    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="site-title">Tunes</h1>
            <TunesSearchForm
                searchQuery={searchQuery}
                onInputChange={handleInputChange}
                onSearchFormSubmit={handleSearchFormSubmit}
            />
            <TunesList songs={songs}/>
        </div>
    )
}

export default Tunes