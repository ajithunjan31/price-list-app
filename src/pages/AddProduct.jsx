import { Link, useNavigate } from 'react-router'
import { ProductContext } from '../context/ProductContext';
import { useContext } from 'react';

function AddProduct() {

  const { products, setProducts } = useContext(ProductContext);

  const navigation = useNavigate()

  function handleSubmit(formData) {

    const name = formData.get("name");
    const price = formData.get("price");

    if(name.length) return

    let newProduct = {name: name, price: price}

    setProducts([...products, newProduct])

    navigation("/")
  }

  return (
    <div className='w-250 my-7 mx-auto p-2 px-4'>
      <div className='text-3xl font-semibold text-center'>Add New Product</div>
      <form action={handleSubmit}>
        <div className='my-2 mt-7 mb-5'>
          <div className='mb-1'>
            <label htmlFor="product-name">Product name</label>
          </div>
          <input name='name' className='py-1 w-full text-lg border rounded-3xl px-4' type="text" placeholder='e.g. Electrical Switch' />
        </div>

        <div className='mb-2'>
          <div className='mb-1'>
            <label htmlFor="selling-price">Selling price</label>
          </div>
          <input name='price' className='py-1 w-full text-lg border rounded-3xl px-4' type="text" placeholder='e.g. 150' />
        </div>

        <div className='flex gap-3 mt-7'>
          <button className='cursor-pointer bg-neutral-800 p-2 px-4 rounded-3xl text-white w-50' type='submit'>Add Product</button>
          <button className='bg-white p-2 px-4 rounded-3xl border'><Link to="/">Cancel</Link></button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct
