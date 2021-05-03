import React, {useState} from 'react'

const KeywordInput = (props) => {

    const [search, setSearch] = useState(props.search_input);

    function handleChange(event){
        setSearch(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.setSearchInput(search);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Keyword Search:</label>
                <input type="text" id="search" name="search" value={search} onChange={handleChange}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default KeywordInput
