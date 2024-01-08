import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Add = ({setSelected}) => {

    const [inputs, setInputs] = useState({city:'Miestas', description:'', image:'', price:''})
    const navigate = useNavigate()

    const handleInput = (e) => {
    const {name, value} = e.target
    setInputs({...inputs, [name]: value})
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if(inputs.city==='Miestas') return alert('Pasirinkite miestą')
        if(inputs.price<=0) return alert('Netinkama kaina')
        if(inputs.description==='' || inputs.image==='' || inputs.price==='') return alert('Įveskite visus duomenis')
        setSelected(() => 'Add')
        
        const BASE_URL = "https://robust-safe-crafter.glitch.me/"
        
        try {
            const resp = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(inputs)
            })
    
            if(resp.ok) {     
            const result = await resp.json()
            alert("Success")
            setSelected('Home')
            navigate("/")
            }
    
        } catch (error) {
            console.error("Error during POST request:", error)
        }
    }
  
  return (
    <>
    <header>
        <div className="container">
            <h1>Add your property for sale</h1>
            <p>Yes, you can sell where you live and cash!</p>
        </div>
    </header>
    <main id="add">
        <form id="form" action='#' onSubmit={handleSubmit}>
            <h3>Add Property</h3>
            <label htmlFor="image">Img</label>
            <input id="image" name="image" type="text" placeholder="https://unsplash.com/" onChange={handleInput}/>
        
            <label htmlFor="price">Price, Eur</label>
            <input id="price" name="price" type="number" placeholder="50000" onInput={handleInput}/>
        
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" rows="10" placeholder="anything you would like to say?" onInput={handleInput}></textarea>
        
            <label htmlFor="cities"></label>
            <select id="cities" name="city" onChange={handleInput}>
                <option value hidden>Miestas</option>
                <option value="Vilnius">Vilnius</option>
                <option value="Kaunas">Kaunas</option>
                <option value="Klaipeda">Klaipėda</option>
            </select>
            <a id="submit" className="add-property" onClick={handleSubmit}>Add Property +</a>
        </form>
        <section/>
    </main>
    </>
  )
}

export default Add