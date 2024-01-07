const Add = () => {
  return (
    <>
    <header>
        <div class="container">
            <h1>Add your property for sale</h1>
            <p>Yes, you can sell where you live and cash!</p>
        </div>
    </header>
    <main id="add">
        <form id="form" action='#'>
            <h3>Add Property</h3>
            <label for="image">Img</label>
            <input id="image" type="text" placeholder="https://unsplash.com/"/>
        
            <label for="price">Price, Eur</label>
            <input id="price" type="text" placeholder="50000"/>
        
            <label for="description">Description</label>
            <textarea id="description" ž rows="10" placeholder="anything you would like to say?"></textarea>
        
            <label for="cities"></label>
            <select id="cities" name="city">
                <option value="" disabled selected>Miestas</option>
                <option value="Vilnius">Vilnius</option>
                <option value="Kaunas">Kaunas</option>
                <option value="Klaipėda">Klaipėda</option>
            </select>
            <a id="submit" class="add-property" href="index.html">Add Property +</a>
        </form>
        <section/>
    </main>
    </>
  )
}

export default Add