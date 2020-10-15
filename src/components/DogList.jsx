import React, { useEffect, useState }  from "react";

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
        const data = response.json();
        console.log(data)
        return data;
      };
    return (
        <>
        {dogInfo.map(dog => {
            return (
                <li key={`${dog.breed_id}`}>
                    <img src={loadData(dog)} alt="" /> 
                    <p>{dog.name}</p>
                    <p>{dog.breed}</p>
                </li>
            )
        })}
        </>
    )}
export default DogList;