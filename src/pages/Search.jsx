import React,{useState} from 'react'
import HandleSearch from '../components/HandleSearch'

function Search() {
    const [ques,setQues]=useState("");
    return (
        <div>
            <form>
                <input 
                    type="text" 
                    value={ques} 
                    onChange={(e)=>{
                        setQues(e.target.value)
                    }}
                />
            </form>
            <div>
                <HandleSearch />
            </div>
        </div>
    )
}

export default Search
