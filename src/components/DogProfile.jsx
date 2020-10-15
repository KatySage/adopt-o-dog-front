
import React, { useEffect, useState }  from "react";

const DogProfile= (props) => {
    const {user} = props
    const [dogList, setDogs] = useState([]);
    useEffect(()=>{
        (async function(){
            const response = await fetch(`http://127.0.0.1:3333/`);
            const data = await response.json();
            setDogs(data)
            console.log(data)
        })();
    }, [setDogs])
    return (
        <>

        </>
    )}
export default DogProfile;