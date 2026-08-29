import { useTranslations } from 'next-intl';

const ICONS = {
  installation: (
    <path d="M14.7 6.3a3 3 0 1 1-4.4 4.1L5 15.7V19h3.3l5.3-5.3a3 3 0 1 1 4.1-4.4L21 6l-3-3-3.3 3.3Z" />
  ),
  reliable: (
    <>
      <path d="M8 12l2.5 2.5L16 9" />
      <path d="M3 11l3-3 3 1 3-2 3 2 3-1 3 3" />
    </>
  ),
  doorstep: (
    <>
      <path d="M4 21V9l8-5 8 5v12" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  warranty: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5 7 21l5-2.5L17 21l-2-7.5" />
    </>
  )
} as const;

function FeatureIcon({ icon }: { icon: keyof typeof ICONS }) {
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-brand-600"
      >
        {ICONS[icon]}
      </svg>
    </span>
  );
}

export default function BookingSection() {
  const t = useTranslations('Booking');

  const items: { icon: keyof typeof ICONS; title: string; description: string }[] = [
    { icon: 'installation', title: t('item1Title'), description: t('item1Description') },
    { icon: 'reliable', title: t('item2Title'), description: t('item2Description') },
    { icon: 'doorstep', title: t('item3Title'), description: t('item3Description') },
    { icon: 'warranty', title: t('item4Title'), description: t('item4Description') }
  ];

  return (
    <section
      className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-cover bg-center py-24 sm:py-32"
      style={{ backgroundImage: "url('/images/booking-bg.jpg')" }}
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">{t('heading')}</h2>

          <div className="mt-8 space-y-8">
            {items.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <FeatureIcon icon={item.icon} />
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: car + pin + booking calendar visual — provided separately */}
        <div />
      </div>
    </section>
  );
}
