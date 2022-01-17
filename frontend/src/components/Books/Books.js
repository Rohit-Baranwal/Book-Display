import "./Books.css"
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SingleContent from '../SingleContent/SingleContent';

const Books = (props) => {
    
    let url ;
    const [content, setContent] = useState([]);
    if(`${props.header}` === "latest") {
         url = "https://floran-book-api.herokuapp.com/latest/";
    }
    else {
         url = "https://floran-book-api.herokuapp.com/";
    }


    const fetchBooks = async() => {
        const { data } = await axios.get(url);
        
        // console.log(data);

        setContent(data);
    };

    useEffect(() => {
       fetchBooks();
       // eslint-disable-next-line
    }, [])

    return (
        <div className="container">
         <label className="tittle">{props.header} Books</label>
         <div className="item">
             {
                 content && content.map((c) => (
                    //  console.log(c)

                    <SingleContent 
                        key={c.id}
                        id={c.id}
                        name={c.name}
                        author={c.author}
                        description={c.description}
                        price={c.price}
                        pages={c.pages}
                        cover={c.cover}
                        />
                 ))
             }
         </div>
        </div>
    )
}

export default Books;
