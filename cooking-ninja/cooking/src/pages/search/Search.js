import {useLocation} from 'react-router-dom'
import {useFetch } from '../../hooks/useFetch'
//style
import './Search.css';

import React from 'react'
//components
import RecipeList from '../../components/RecipeList';

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q');
  console.log("aws",{queryString,queryParams,query});
const url = 'http://localhost:3000/recipes?q=' + query
const {data,isPending,error} = useFetch(url)
console.log("aws2",url)
 
    return (
    <div>
        <h2 className='page-title'> Recipes including "{query}"</h2>
        {error && <p className='error'>{error}</p>}
        {isPending && <p className='loading'>Loading...</p>}
        {data && <RecipeList recipes={data}/>}
    </div>
    
  )
}
