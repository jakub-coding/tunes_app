import React from 'react'
import { Song } from '../../types'

interface Props {
    songs: Song[]
}

const TunesList: React.FC<Props> = props => {
    const {songs} = props // spread array to Constants

    //State

    //methods

    //Template
    return (
        <ul>
            {songs.map(song => (
                <li className="text-gray-100" key={song.id}>{song.artist + ' - ' + song.track}</li>
            ))}
        </ul>
    )
}

export default TunesList