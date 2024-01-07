const Home = () => {
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
                  <button className="city-btn active">Vilnius</button>
                  <button className="city-btn">Kaunas</button>
                  <button className="city-btn">Klaipėda</button>
                  <button className="city-btn">All</button>
              </div>
              <a href="add.html" className="add-property">Add Property +</a>
          </div>
      </main>
      
      <section className="cards"></section>
    </>
  )
}

export default Home