import BookServiceForm from '@/components/book-service/BookServiceForm';
import { BookServiceIconGlyph, type BookServiceIcon } from '@/components/book-service/icons';

const introItems: { icon: BookServiceIcon; title: string; description: string }[] = [
  { icon: 'wrench', title: 'Expert Installation', description: 'Trained professionals at your service' },
  { icon: 'clock', title: 'Quick & Reliable', description: 'Fast installation in 30-60 minutes' },
  { icon: 'truck', title: 'Doorstep Service', description: 'We come to you, wherever you are' },
  { icon: 'shieldBadge', title: 'Support & Warranty', description: 'Complete support with warranty' }
];

const services: { icon: BookServiceIcon; title: string; description: string }[] = [
  { icon: 'tools', title: 'GPS Installation', description: 'Professional GPS device installation for your vehicle' },
  { icon: 'gear', title: 'Device Replacement', description: 'Replace your old GPS device with a new one' },
  { icon: 'wrench', title: 'Troubleshooting', description: 'Fix issues and get your device working perfectly' },
  { icon: 'mapPin', title: 'Device Relocation', description: 'Relocate your GPS device to a new vehicle' },
  { icon: 'shieldCheck', title: 'Annual Maintenance', description: 'Keep your device in top condition all year round' }
];

const steps: { icon: BookServiceIcon; title: string; description: string }[] = [
  { icon: 'clipboard', title: 'Choose Service', description: 'Select the service you need for your vehicle' },
  { icon: 'car', title: 'Fill Details', description: 'Provide your vehicle and contact details' },
  { icon: 'calendar', title: 'Schedule & Confirm', description: "Choose date & time. We'll take care of the rest!" }
];

const stats: { icon: BookServiceIcon; value: string; label: string }[] = [
  { icon: 'users', value: '5000+', label: 'Happy Customers' },
  { icon: 'mapPin', value: '50+', label: 'Cities Covered' },
  { icon: 'clock', value: '30-60 Min', label: 'Installation Time' },
  { icon: 'shieldCheck', value: '100%', label: 'Customer Satisfaction' }
];

export default function BookServicePage() {
  return (
    <div>
      {/* Hero + booking form */}
      <section className="bg-gray-bread">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="flex items-center gap-1.5 text-sm font-bold tracking-wide text-brand-600 uppercase">
              <BookServiceIconGlyph icon="pin" className="h-4 w-4" />
              GPS Service Booking
            </p>
            <h1 className="mt-3 text-4xl leading-tight font-extrabold text-gray-900 sm:text-5xl">
              Book GPS Service
              <br />
              Quick &amp; Easy
            </h1>
            <p className="mt-4 max-w-md text-gray-500">
              Professional installation, setup and support for your vehicle tracking needs.
            </p>

            <div className="mt-8 space-y-6">
              {introItems.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                    <BookServiceIconGlyph icon={item.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative mt-10 flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-brand-100 to-orange-50">
              <BookServiceIconGlyph
                icon="pin"
                className="absolute top-6 left-10 h-16 w-16 text-brand-600 drop-shadow"
              />
              <BookServiceIconGlyph icon="car" className="h-24 w-24 text-gray-700" />
              <BookServiceIconGlyph
                icon="pin"
                className="absolute right-16 bottom-10 h-9 w-9 text-brand-500"
              />
            </div>
          </div>

          <BookServiceForm />
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-xl text-center">
            <p className="text-xs font-bold tracking-widest text-brand-600 uppercase">Our Services</p>
            <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Choose the Service You Need
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-brand-600" />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {services.map((service) => (
              <div key={service.title} className="text-center">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 text-brand-600">
                  <BookServiceIconGlyph icon={service.icon} className="h-9 w-9" />
                </span>
                <h3 className="mt-4 font-bold text-gray-900">{service.title}</h3>
                <p className="mt-1.5 text-sm text-gray-500">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-bread">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="rounded-3xl bg-brand-50/60 px-6 py-12 sm:px-12">
            <div className="mx-auto max-w-xl text-center">
              <p className="text-xs font-bold tracking-widest text-brand-600 uppercase">How It Works</p>
              <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Simple 3 Step Booking Process
              </h2>
              <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-brand-600" />
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.title} className="relative text-center">
                  {index < steps.length - 1 && (
                    <div className="absolute top-9 left-[calc(50%+3rem)] hidden h-px w-[calc(100%-6rem)] border-t-2 border-dashed border-brand-200 sm:block" />
                  )}
                  <div className="relative mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-white text-brand-600 shadow-sm">
                    <BookServiceIconGlyph icon={step.icon} className="h-8 w-8" />
                    <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm text-gray-500">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-brand-200/60 pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center justify-center gap-2 text-center sm:justify-start">
                  <BookServiceIconGlyph icon={stat.icon} className="h-5 w-5 shrink-0 text-brand-600" />
                  <div className="text-left">
                    <p className="font-extrabold text-gray-900">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
