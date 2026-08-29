import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { fetchProduct } from '@/lib/api';
import type { Locale } from '@/i18n/routing';

export default async function ProductDetailsPage({
  params
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const { locale, id } = await params;
  const t = await getTranslations('ProductDetails');

  // Server Component fetch → GET /api/products/{id}?locale={locale}
  // Returns null on a 404 from the API, which we turn into Next's not-found page.
  const product = await fetchProduct(id, locale);

  if (!product) notFound();

  return (
    <div>

       <div className="bg-brand-50 mb-12 text-start py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-0">
          <h1 className="mb-0 text-2xl font-bold text-gray-900 text-white sm:text-3xl md:text-4xl">
       {product.name}
          </h1>
          <Link href="/products" className="mb-0 inline-block text-sm text-brand-600 hover:underline">
        ← {t('backToProducts')}
      </Link>
          </div>
          
        </div>
      </div>
      


<div className="mx-auto max-w-7xl">
 <div className="grid gap-8 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        <div>
          <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>

          <p className="mt-2 flex items-center gap-2 text-sm">
            <span className="text-amber-500">★ {product.rating.average}</span>
            <span className="text-gray-400">({product.rating.count})</span>
          </p>

          <p className="mt-2 text-sm">
            {product.inStock ? (
              <span className="text-green-600">{t('inStock')}</span>
            ) : (
              <span className="text-red-500">{t('outOfStock')}</span>
            )}
          </p>

          <p className="mt-4 text-xl font-semibold text-brand-600">
            {t('price')}: ₹{product.price}
          </p>

          <h2 className="mt-6 text-sm font-semibold uppercase tracking-wide text-gray-500">
            {t('description')}
          </h2>
          <p className="mt-2 leading-relaxed text-gray-700">{product.description}</p>

          <button
            disabled={!product.inStock}
            className="mt-6 w-full rounded-lg bg-brand-500 px-4 py-3 font-medium text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:bg-gray-300"
          >
            {t('addToCart')}
          </button>
        </div>
      </div>

      {product.specifications.length > 0 && (
        <div className="mt-12 mb-16">
          <h2 className="mb-4 text-xl font-bold text-gray-900">{t('specifications')}</h2>
          <div className="overflow-hidden rounded-xl border border-gray-200">
            {product.specifications.map((section) => (
              <div key={section.title}>
                <div className="bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-900">
                  {section.title}
                </div>
                <table className="w-full text-sm">
                  <tbody>
                    {section.rows.map((row) => (
                      <tr key={row.label} className="border-t border-gray-200">
                        <td className="w-1/3 whitespace-pre-line px-4 py-2 align-top text-gray-500">
                          {row.label}
                        </td>
                        <td className="whitespace-pre-line px-4 py-2 align-top text-gray-700">
                          {row.value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
</div>

    </div>
  );
}
