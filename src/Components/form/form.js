import React from 'react'
import React, {useState} from 'react'

export default function Form({onSubmitFunc, book}) {
  const [formData, setFormData] = useState(book ?? {
    name: '',
    img_url: '',
    director: '',
    year: ''
})

  // Dealing with FORM DATA
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name] : event.target.value})
    console.log(formData)
  }  



  const submit = event => {
    event.preventDefault()
 
    onSubmitFunc(formData)
  }}  

  return(
  <div>
  <form onSubmit={handleAddMovie}/>
    <input placeholder='movie name' onChange={handleChange} name='name'></input>
    <input placeholder='img url' onChange={handleChange} name='img_url'></input>
    <input placeholder='director' onChange={handleChange} name='director'></input>
    <input placeholder='year' onChange={handleChange} name='year'></input>
    <button type='submit'>Add Movie</button>
  <form onSubmit={submit}>
    <input placeholder='movie name' onChange={handleChange} name='name' value={formData.name}></input>
    <input placeholder='img url' onChange={handleChange} name='img_url' value={formData.img_url}></input>
    <input placeholder='director' onChange={handleChange} name='director' value={formData.director}></input>
    <input placeholder='year' onChange={handleChange} name='year' value={formData.year}></input >
    <button type='submit'>{movie ? 'Update' : 'Add Movie'}</button>
  </form>
</div>
  )

  