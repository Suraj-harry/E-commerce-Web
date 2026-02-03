import React from 'react'
import { useSearch } from '../../context/search'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'


const SearchInput = () => {
    const [values, setValues] = useSearch();
    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.get(`/api/v1/product/search/${values.keyword}`);
            setValues({...values, results: data});
            Navigate("/search")
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div>
        <form class="d-flex" role="search" onSubmit={handlesubmit}>
            <input class="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    aria-label="Search"
                    value={values.keyword}
                    onChange={(e) => setValues({...values, keyword: e.target.value})}   
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <button className='btn btn-outline-success' type = "submit">
            Search
        </button>
    </div>
  )
}

export default SearchInput
