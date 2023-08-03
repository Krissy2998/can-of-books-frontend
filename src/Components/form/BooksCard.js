import React from 'react'
import './BooksCard.css'
import Form from '../Form/Form'

export default function BooksCard({Books, handleDelete}) {
export default function BooksCard({Books, handleDelete, handleUpdateBooks}) {

  return (
    <div>
        {Books.map(Books => {
            return (
                <div key={Books._id}>
                    <div>
                        <p onClick={() => handleDelete(Books._id)}>X</p>
                        <h3>{Books.name}</h3>
                        <img src={Books.img_url} /> 
                        <p>{Books.director}, {Books.year}</p>
                    </div>
                    <Form onSubmitFunc={handleUpdateBooks} Books={Bookd}/> 
    </div>
    }))}