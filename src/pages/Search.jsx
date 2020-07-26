import React,{useState} from 'react'
import HandleSearch from '../components/HandleSearch'
import '../styles/Form.css';

function Search() {
    const [ques,setQues]=useState("");
    return (
        <div>
            <form className="form">
                Search : <input 
                    id="inp"
                    type="text" 
                    value={ques} 
                    onChange={(e)=>{
                        setQues(e.target.value)
                    }}
                />
            </form>
            <div>
                <HandleSearch query={ques}/>
            </div>
        </div>
    )
}

export default Search
