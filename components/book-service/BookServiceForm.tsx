'use client';

import { useState, type FormEvent, type ReactNode } from 'react';
import { BookServiceIconGlyph } from './icons';

function FieldShell({
  id,
  label,
  icon,
  children
}: {
  id: string;
  label: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2 text-gray-400">
          {icon}
        </span>
        {children}
      </div>
    </div>
  );
}

const fieldClass =
  'w-full appearance-none rounded-lg border border-gray-200 bg-white py-3 pr-4 pl-11 text-sm text-gray-900 outline-none transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500';

export default function BookServiceForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent'>('idle');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    // Wire this up to your real backend (API route, CRM, email service, etc).
    // This demo just simulates a submission.
    setTimeout(() => setStatus('sent'), 600);
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl bg-white p-8 shadow-sm">
        <div className="rounded-lg bg-green-50 p-4 text-green-700">
          Thanks! Your booking request has been received — our team will contact you shortly.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <div className="flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-100 text-brand-600">
          <BookServiceIconGlyph icon="calendar" className="h-6 w-6" />
        </span>
        <div>
          <h2 className="text-lg font-bold text-gray-900">Book a GPS Service</h2>
          <p className="mt-0.5 text-sm text-gray-500">Fill in the details and our team will contact you</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <FieldShell id="vehicleType" label="Vehicle Type" icon={<BookServiceIconGlyph icon="car" className="h-5 w-5" />}>
          <select id="vehicleType" name="vehicleType" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select Vehicle Type
            </option>
            <option value="car">Car</option>
            <option value="bike">Bike / Two-Wheeler</option>
            <option value="truck">Truck / Commercial Vehicle</option>
            <option value="bus">Bus</option>
            <option value="other">Other</option>
          </select>
        </FieldShell>

        <FieldShell id="service" label="Service Required" icon={<BookServiceIconGlyph icon="gear" className="h-5 w-5" />}>
          <select id="service" name="service" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select Service
            </option>
            <option value="installation">GPS Installation</option>
            <option value="replacement">Device Replacement</option>
            <option value="troubleshooting">Troubleshooting</option>
            <option value="relocation">Device Relocation</option>
            <option value="maintenance">Annual Maintenance</option>
          </select>
        </FieldShell>

        <FieldShell id="date" label="Preferred Date" icon={<BookServiceIconGlyph icon="calendar" className="h-5 w-5" />}>
          <input id="date" name="date" type="date" required className={fieldClass} />
        </FieldShell>

        <FieldShell id="time" label="Preferred Time" icon={<BookServiceIconGlyph icon="clock" className="h-5 w-5" />}>
          <select id="time" name="time" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select Time
            </option>
            <option value="morning">Morning (9 AM – 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM – 4 PM)</option>
            <option value="evening">Evening (4 PM – 7 PM)</option>
          </select>
        </FieldShell>

        <FieldShell id="name" label="Your Name" icon={<BookServiceIconGlyph icon="user" className="h-5 w-5" />}>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Enter Your Name"
            className={fieldClass}
          />
        </FieldShell>

        <FieldShell id="phone" label="Phone Number" icon={<BookServiceIconGlyph icon="phone" className="h-5 w-5" />}>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="Enter Your Number"
            className={`${fieldClass} pl-20`}
          />
          <span className="pointer-events-none absolute top-1/2 left-11 -translate-y-1/2 border-r border-gray-200 pr-2.5 text-sm text-gray-500">
            +91
          </span>
        </FieldShell>

        <button
          type="submit"
          disabled={status === 'submitting'}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 px-6 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? 'Booking...' : 'Book Service Now'}
          <BookServiceIconGlyph icon="arrowRight" className="h-4 w-4" />
        </button>

        <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400">
          <BookServiceIconGlyph icon="lock" className="h-3.5 w-3.5" />
          Your information is safe with us
        </p>
      </form>
    </div>
  );
}
