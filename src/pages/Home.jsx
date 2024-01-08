import { useState, useEffect } from "react"

const Home = () => {
  const BASE_URL = "https://robust-safe-crafter.glitch.me/"
  const [data, setData] = useState([])
  const [filteredData, setFilteredData] = useState()
  
  useEffect(() => {
      const fetchData = async () => {
          const resp = await fetch(BASE_URL)
          const result = await resp.json()
          setData(result)
          setFilteredData(result)
      }
  
      fetchData()
  }, [])

  const filterData = (selection) => {
    if(selection) {
      setFilteredData(data.filter(el => el.city===selection))
      console.log(filteredData)
    } else {
      setFilteredData(data)
    }
  }

  return (
    <>
    <header>
          <div className="container">
              <h1>Property List</h1>
              <p>See all the houses you want!</p>
          </div>
      </header>

      <main>
          <p>Filter:</p>
          <div className="filter-section">
              <div className="cities">
                  <button className="city-btn active" onClick={() =>filterData('Vilnius')}>Vilnius</button>
                  <button className="city-btn" onClick={() =>filterData('Kaunas')}>Kaunas</button>
                  <button className="city-btn" onClick={() =>filterData('Klaipeda')}>Klaipėda</button>
                  <button className="city-btn" onClick={() =>filterData('')}>All</button>
              </div>
          </div>
      </main>
      
      <section className="cards">

        {filteredData.map((x, index) => (
          <div className="card" key={index}>
            <img src={x.image} alt={x.city}/>
            <div className="text">
                <h3 className="price">{x.price}</h3>
                <p className="city">{x.city}</p>
                <p>{x.description}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  )
}

export default Home