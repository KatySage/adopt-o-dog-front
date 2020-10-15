import React, { useEffect, useState }  from "react";
import { Link } from 'react-router-dom';

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
    const loadData = async (dog) => {
        const url = `https://api.thedogapi.com/v1/images/search?breed_id=${dog.breed_id}`;
        const response = await fetch(url);
        const data = await response.json();
        const pic = data[0].url
        const picSrc = JSON.stringify(pic)
        console.log(picSrc)
        return picSrc;
    };
    return (
        <>
        {dogInfo.map(dog => {
            return (
                <li key={`${dog.breed_id}`}>
                    <img src={loadData(dog)} alt="" /> 
                    <p>{dog.name}</p>
                    <p>{dog.breed}</p>
                    <Link to={`dog-profile/${dog.id}`}>Check out more about {dog.name}!</Link>
                </li>
            )
        })}
        </>
    )}
export default DogList;