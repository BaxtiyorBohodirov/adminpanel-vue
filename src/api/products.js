import axios from 'axios'
export async function  index(params=null)
{
    const products = await axios.get('http://127.0.0.1:8000/api/products',{
        params:params
    })
    return products.data.data
}

export async function  store(data)
{
    const products = await axios.post('http://127.0.0.1:8000/api/products',data)
    return products.data.data
}


export async function  update(id,data)
{
    const products = await axios.put('http://127.0.0.1:8000/api/products/'+id,data)
    return products.data.data
}

export async function  show(id)
{
    const product = await axios.get('http://127.0.0.1:8000/api/products/'+id)
    return product.data.data
}

export async function  destroy(id)
{
    const product = await axios.delete('http://127.0.0.1:8000/api/products/'+id)
    return product.data.data
}
