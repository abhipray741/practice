//styles
import './Home.css';

// components
import RecipeList from '../../components/RecipeList';

//hooks
import { useFetch } from '../../hooks/useFetch';


export default function Home() {

    const {data,isPending,error} = useFetch('http://localhost:3000/recipes');
    console.log("1w",data);
    return (
        <div className='home'>
           { error && <p className='error'>{error}</p>}
           {isPending && <p className='loading'>Loading ...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    )
}