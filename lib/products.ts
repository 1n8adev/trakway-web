import type { Locale } from '@/i18n/routing';

export type ProductSpecSection = {
  title: string;
  rows: { label: string; value: string }[];
};

export type Product = {
  id: string;
  slug: string;
  category: string;
  price: number;
  currency: 'INR';
  images: string[];
  stock: number;
  rating: { average: number; count: number };
  featured: boolean;
  name: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  description: Record<Locale, string>;
  // Technical specs aren't translated — kept as plain text, same across locales.
  specifications: ProductSpecSection[];
};

// This file simulates a database table. In a real app, swap this module
// for a Prisma/Drizzle query, a CMS client (Sanity, Contentful), or a call
// to an external commerce platform (Shopify, Medusa, etc). Nothing outside
// `app/api/**` should import from this file directly — everything else
// goes through the REST endpoints in app/api/products/*.
export const products: Product[] = [
  {
    id: 'clay-mug',
    slug: 'clay-mug',
    category: 'home-decor',
    price: 499,
    currency: 'INR',
    images: [
'/images/products/X3-1.png',
    ],
    stock: 24,
    rating: { average: 4.6, count: 128 },
    featured: true,
    name: {
      en: 'X3',
      ta: 'கை வேலைப்பாடு மட்பாண்ட கோப்பை',
      hi: 'हस्तनिर्मित मिट्टी का मग'
    },
    shortDescription: {
      en: 'Vehicle GPS Tracker',
      ta: 'கை வேலைப்பாடு மட்பாண்ட கோப்பை',
      hi: 'हस्तनिर्मित मिट्टी का मग'
    },
    description: {
      en: 'The X3, a multifunctional GPS tracker, is optimized for vehicle tracking. It provides accurate real-time location, two-way communication and driving behavior reports. The X3 also features a G-sensor, a door-sensor, and includes I/O ports to support multiple external types of equipment for various applications. X3 is an excellent GPS tracking device for fleet management and security monitoring deployment.',
      ta: 'கையால் வடிவமைக்கப்பட்ட மட்பாண்ட கோப்பை. ஒவ்வொன்றும் தனித்துவமான வடிவமைப்புடன் இருக்கும்.',
      hi: 'हाथ से बना मिट्टी का मग। हर टुकड़ा अपने अनोखे ग्लेज़ पैटर्न के साथ अद्वितीय है।'
    },
    specifications: [
      {
        title: 'GNSS',
        rows: [
          { label: 'Positioning system', value: 'GPS+BDS+LBS' },
          { label: 'Positioning accuracy', value: '<2.5m CEP' },
          { label: 'Tracking sensitivity', value: '-165dBm' },
          { label: 'Acquisition sensitivity', value: '-148dBm' },
          { label: 'TTFF (open sky)', value: 'Avg. hot start ≤1sec\nAvg. cold start ≤35sec' }
        ]
      },
      {
        title: 'Cellular',
        rows: [
          { label: 'Communication network', value: 'GSM' },
          { label: 'Frequency', value: 'Quad-band 850/900/1800/1900 MHz' }
        ]
      },
      {
        title: 'Power',
        rows: [
          { label: 'Battery', value: '450mAh/3.7V industrial-grade Li-Polymer battery' },
          { label: 'Input voltage', value: '9-36VDC' }
        ]
      },
      {
        title: 'Interface',
        rows: [
          { label: 'LED indication', value: 'GNSS (Blue), Cellular (Green), Power (Red)' },
          { label: 'SIM', value: 'Standard-SIM' },
          { label: 'Data storage', value: '32+32Mb' },
          { label: 'Digital inputs', value: 'ACC, input, SOS' },
          { label: 'Digital outputs', value: 'Relay, output1, output2' }
        ]
      },
      {
        title: 'Physical specification',
        rows: [
          { label: 'Dimensions', value: '80.9 x 55.8 x 23.4mm' },
          { label: 'Weight', value: '95g' }
        ]
      },
      {
        title: 'Operating environment',
        rows: [{ label: 'Operating temperature', value: '–20℃ to +70℃' }]
      },
      {
        title: 'Feature',
        rows: [
          { label: 'Voice monitoring range', value: '≤5 meters' },
          { label: 'Sensors', value: 'Accelerometer' },
          {
            label: 'Scenarios',
            value:
              'Vehicle movement alert, Over-speed alert, Geo-fence, Voice Monitoring, Vehicle battery detection, Power supply disconnection'
          },
          {
            label: 'Driving behavior analysis',
            value: 'Harsh acceleration, Harsh braking, Harsh cornering, Collision'
          }
        ]
      }
    ]
  }
];

export function findProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

// Shape returned by the REST API — locale-resolved, no Record<Locale, string> leaking out.
export type ApiProduct = {
  id: string;
  slug: string;
  category: string;
  name: string;
  shortDescription: string;
  description: string;
  specifications: ProductSpecSection[];
  price: number;
  currency: 'INR';
  image: string;
  images: string[];
  inStock: boolean;
  stock: number;
  rating: { average: number; count: number };
  featured: boolean;
};

export function toApiProduct(product: Product, locale: Locale): ApiProduct {
  return {
    id: product.id,
    slug: product.slug,
    category: product.category,
    name: product.name[locale],
    shortDescription: product.shortDescription[locale],
    description: product.description[locale],
    specifications: product.specifications,
    price: product.price,
    currency: product.currency,
    image: product.images[0],
    images: product.images,
    inStock: product.stock > 0,
    stock: product.stock,
    rating: product.rating,
    featured: product.featured
  };
}
