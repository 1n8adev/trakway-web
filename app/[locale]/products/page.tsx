import { getTranslations } from "next-intl/server";
import { fetchProducts } from "@/lib/api";
import ProductCard from "@/components/ProductCard";
import type { Locale } from "@/i18n/routing";

export default async function ProductListPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("ProductList");

  // Server Component fetch → GET /api/products?locale=en
  const products = await fetchProducts(locale);

  return (
    <div className="">
      <div className="bg-gray-bread mb-12 text-start py-6">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-0 text-2xl font-bold text-gray-900 text-white sm:text-3xl md:text-4xl">
            {t("heading")}
          </h1>
        </div>
      </div>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
