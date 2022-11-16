import { Divider, Input } from 'antd';
import React, { useState } from "react"


function Search(props) {

    // const [name, setName] = useState("")

    const nameChangeHandler = (event) => {
        props.onSearch(event.target.value)
    }
  
    return (
    <div>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input type="text" onChange={nameChangeHandler} />
    </div>
  );
}

export default Search;
