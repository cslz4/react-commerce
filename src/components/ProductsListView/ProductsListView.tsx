import { useEffect, useState } from "react";
import { http } from "../../config";


export type Root = Root2[]

export interface Root2 {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: Category
  images: string[]
  creationAt: string
  updatedAt: string
}

export interface Category {
  id: number
  name: string
  slug: string
  image: string
  creationAt: string
  updatedAt: string
}

function formatCurrency(value: number) {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })
}


export function ProductsListView() {
  const [products, setProducts] = useState<Root>([])

  useEffect(() => {
    http.get('/products').then(res => {
      setProducts(res.data)
    })
  }, [])

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map(product => (
        <div>
          <img className="h-40" src={product.images[0]} />
          <h1 className="text-sm font-bold">{product.title}</h1>
          <span>{formatCurrency(product.price)}</span>
        </div>
      ))}
    </div>
  );
}
