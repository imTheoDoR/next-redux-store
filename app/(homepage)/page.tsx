import Product from "@/components/product";
import Title from "@/components/title";
import { fetcher } from "@/lib/fetcher";

export default async function Home() {
  const products = await fetcher("https://fakestoreapi.com/products");

  return (
    <main className="mt-20">
      <Title text="All products" />

      <div className="grid grid-cols-1 lg:grid-cols-5 mt-3 gap-5">
        {products.map((product: Product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
