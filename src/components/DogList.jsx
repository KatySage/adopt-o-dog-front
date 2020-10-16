import React, { useEffect, useState }  from "react";
import { Link, Route } from 'react-router-dom';
import DogProfile from "./DogProfile";

const DogList = (props) => {
    const [dogInfo, setDog] = useState([]);
    useEffect(()=>{
        (async function(){
            const response = await fetch(`http://127.0.0.1:3333/`);
            const data = await response.json();
            setDog(data)
            console.log(data)
        })();
        
    }, [setDog]);
    return (
        <>
        <Route exact path='/'>
        {dogInfo.map(dog => {
            return (
                <li key={`${dog.breed_id}`}>
                    <img src={dog.url} alt="" /> 
                    <p>{dog.name}</p>
                    <Link to={`/dog-profile/${dog.id}`}>Check out more about {dog.name}!</Link>
                </li>
            )
        })}
        </Route>    
        <Route path={`/dog-profile/:dog_id`}>
            <DogProfile dogInfo={dogInfo} />
        
        </Route>
        </>
    )}
export default DogList;