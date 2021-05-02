import React from 'react'

const KeywordInput = (props) => {
    function handleChange(event){
        props.setSearchInput(event.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.handleSearchChange(props.search_input);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Keyword Search:</label>
                <input type="text" id="search" name="search" value={props.search_input} onChange={handleChange}></input>
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default KeywordInput
