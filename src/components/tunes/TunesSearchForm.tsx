import React, {ChangeEvent, FormEvent} from 'react'

//Props
interface Props {
    searchQuery: string
    onSearchFormSubmit: (data: string) => void
    onInputChange: (data: string) => void
}

const TunesSearchForm: React.FC<Props> = props => {
    const {searchQuery} = props

    //Methods
    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        props.onInputChange(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        props.onSearchFormSubmit(searchQuery)
    }

    //Template
    return (
        <div>
            <form className="relative" onSubmit={handleSubmit}>
                <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none z-10" >
                    <p className="font-bold text-gray-900 pr-2 border-r border-gray-300">Search:</p>
                </div>
                <input className="py-3 pl-20 pr-3 rounded w-full" id="query" type="text" value={searchQuery} onChange={handleInput}/>
            </form>
            <p className="mt-4 text-xs text-gray-900">{searchQuery}</p>
        </div>
    )
}

export default TunesSearchForm