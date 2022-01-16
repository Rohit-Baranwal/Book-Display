import "./SingleContent.css"
import React from 'react'
import { unavailable } from "../../config/config" 
import ContentModal from "../../ContentModal/ContentModal"

const SingleContent = ({
    id,
    name,
    author,
    description,
    price,
    pages,
    cover,
    }) => {
    return (
        <ContentModal cover={cover} id={id}  >
            <img className="postr" src={ cover ? `${cover}` : unavailable} alt={name} />
            <b className="title">{ name }</b>
        </ContentModal>
    )
}

export default SingleContent;
