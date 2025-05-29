import Layout from "../../components/Layout";
import ProductsList from "../../components/ProductsList";
import SearchBar from "../../components/Searchbar";

const Home = () => {
    
    const products  = [
    { "id": 1, "image": "/images/buzo1.jpg", "title": "Buzo", "price": 450 },
    { "id": 2, "image": "/images/camisa1.jpg", "title": "Camisa", "price": 450 },
    { "id": 3, "image": "/images/gorro1.jpg", "title": "Gorro", "price": 450 },
    { "id": 4, "image": "/images/gorro2.jpg", "title": "Gorro", "price": 450 },
    { "id": 5, "image": "/images/medias1.jpg", "title": "Medias", "price": 450 },
    { "id": 6, "image": "/images/pantalon1.jpg", "title": "Pantalon", "price": 450 }
  ];

    return (
        <>
        <Layout>
      <main>
        <title>Esto es Happy New Year</title>
      </main>
      <header>3 Cuotas sin interés</header>

      <nav><SearchBar/></nav>

      <main>
        <h1>Esto es happy new year</h1>

        <section>
          <h2>Productos destacados</h2>

          <ProductsList products={products}/>

          <p>¿No es lo que estabas buscando? Consultanos
            <a href="mailto:agotados@estoeshappynewyear.com.ar">acá</a> por productos agotados
          </p>
        </section>
      </main>
    </Layout>
        
        </>
        
        
    )
};

export default Home; 