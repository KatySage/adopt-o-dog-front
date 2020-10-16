
import React, { useEffect, useState }  from "react";
import { useParams } from 'react-router-dom';

const DogProfile= (props) => {
    const { dogInfo } = props;
    console.log(dogInfo, typeof dogInfo)
    console.log(props)
    const { dog_id } = useParams();
    const dog = dogInfo.find((dog) => {
        return dog.id === (dog_id) ? dog : null;
      })
    const [commentsList, setComments] = useState([]);
    useEffect(()=>{
        (async function(){
            const response = await fetch(`http://127.0.0.1:3333/dog-profile/${dog.id}`);
            const data = await response.json();
            setComments(data)
            console.log(data)
        })();
    }, [setComments])
    return (
        <>
        {dog.name}
        </>
    )}
export default DogProfile;