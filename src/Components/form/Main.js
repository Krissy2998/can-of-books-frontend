const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    director: '',
    year: ''
})

const [Books, setBooks] = useState([])

    useEffect(() => {
export default function Main() }
        setBooks, (result.data)
    );

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name] : event.target.value})
        console.log(formData)
    }

    const handleAddBooks = async event => {
        event.preventDefault()
        const res = await axios.post('http://localhost:4242/books', formData)
    const handleAddBooks = async newBooksFormData => {
        const res = await axios.post('http://localhost:4242/books', newBooksFormData)
        setBooks([...Bookss, res.data])
    }

    getBooks()
}

const handleUpdateBooks = async (Books) => {
    await axios.put(`http://localhost:4242/Books/${Books._id}`, Books)
    getMovies();
} 

return (
<div>
    <Form handleChange={handleChange} handleAddBooks={handleAddBooks}/>
    <Form onSubmitFunc={handleAddBooks}/>
    <h3>This is my Main!</h3>
    <BooksCard Books={Books} handleDelete={handleDelete}/>
    <BooksCard Books={Books} handleDelete={handleDelete} 
    handleUpdateMovie={handleUpdateBooks}/>
</div>
)
}

