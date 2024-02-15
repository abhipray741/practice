import {useParams} from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
//styles
import './Recipe.css';
import { useTheme } from '../../hooks/useTheme';

export default function Recipe() {
    const {mode} = useTheme()
    const {id} = useParams()
    const url = 'http://localhost:3000/recipes/' + id
    const {error,data:recipe,isPending} =useFetch(url);


    return (
        <div className={`recipe  ${mode}`}>
            {error && <p className='error'>{error} </p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                <h2 className='page-title'>{recipe.title}</h2>   
                    <p>Takes {recipe.cookingTime} to Cook</p>
                    <ul>
                        {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                </>
            )}
        </div>
    )
}