
import React, { useEffect, useState }  from "react";
import { useParams } from 'react-router-dom';
import CommentForm from './CommentForm'
const DogProfile= (props) => {
    const { dogInfo } = props;
    console.log(dogInfo)
    const { dog_id } = useParams();
    const dog = dogInfo.find((dog) => {
        return dog.id === parseInt(dog_id) ? dog : null;
      })
    const [commentsList, setComments] = useState([]);
    useEffect(()=>{
        (async function(){
            const response = await fetch(`http://127.0.0.1:3333/dog-profile/${dog.id}/comments`);
            const data = await response.json();
            setComments(data)
            console.log(data)
        })();
    }, [setComments])
    return (
        <>
        <img src={dog.url} alt="" /> 
        {dog.sex === 'M' ? <><h1>{dog.name}</h1><p>He is a {dog.breed} and weighs {dog.weight}lbs.</p>
        <p>Friends of {dog.name} describe him using words like: <br /> {dog.temperment}</p> </> : <><h1>{dog.name}</h1><p>She is a {dog.breed} and weighs {dog.weight}lbs.</p>
        <p>Friends of {dog.name} describe her using words like: <br /> {dog.temperment}</p> </>}
        <div><h2>Read what others are saying about {dog.name}!</h2>
        {commentsList.map(comment => {
            return (
                <div>
                <h3>{comment.title}</h3>
                <p>{comment.comment_text}</p>
                </div>
            )})}
        </div>
        <div><p>Are you a fan of {dog.name} or interested in more information about {dog.sex === 'M' ? 'him' : 'her'}? Drop us a comment!</p> 
        <CommentForm dog={dog} />
        </div>
        </>
    )}
export default DogProfile;