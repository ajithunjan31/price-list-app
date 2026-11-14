import { useContext } from "react"
import Card from "../components/Card"
import { ProductContext } from "../context/ProductContext"

function Home() {

  const {products} = useContext(ProductContext)

  return (
    <div>
      <div className='w-250 mx-auto'>
        <div className='text-3xl font-semibold mt-9 text-center'>All Products</div>
        {
          products.length ? (products.map((product) => 
            <Card name={product.name} price={product.price} /> 
          )) : (
            <p className="text-black">No Products</p>
          )
        }
      </div>
    </div>
  )
}

export default Home
 