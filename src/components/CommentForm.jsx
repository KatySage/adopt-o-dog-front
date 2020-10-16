import React, { useEffect, useState }  from "react";
import { Link, Route } from 'react-router-dom';
import DogProfile from "./DogProfile";
const CommentForm = (props) => {
    const { dog } = props
    return (
        <>
        <form action={`http://127.0.0.1:3333/dog-profile/${dog.id}/add`} method='POST'>
            <input hidden name="dog_id" value={dog.id} />
            <label>post title
            <input name='title' />
            
            </label>
            <label>post content
                <textarea name='comment_text' />
            </label>
            <button type='submit'>comment</button>
        </form>
        </>
    )}
export default CommentForm;