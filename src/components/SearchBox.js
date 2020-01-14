import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input
                style={{margin: '5px'}}
                className={'pa3 ba b--green bg-lightest-blue'}
                type={'search'}
                placeholder={'search robots'}
                onChange={searchChange}
            />
        </div>
    )
};

export default SearchBox;