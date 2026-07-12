import React, { useState, type FormEvent } from 'react';
import { CheckIcon, SendIcon } from 'lucide-react';
import { studioConfig } from '../data/studioConfig';

type FormValues = {
  names: string;
  email: string;
  date: string;
  venue: string;
  package: string;
  referral: string;
  message: string;
};
const initialValues: FormValues = {
  names: '',
  email: '',
  date: '',
  venue: '',
  package: '',
  referral: '',
  message: ''
};
export function BookingSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);
  const update = (field: keyof FormValues, value: string) =>
  setValues((current) => ({
    ...current,
    [field]: value
  }));
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<FormValues> = {};
    if (!values.names.trim()) nextErrors.names = 'Please share your names.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    nextErrors.email = 'Please enter a valid email.';
    if (!values.date) nextErrors.date = 'Please add your wedding date.';
    if (!values.message.trim())
    nextErrors.message = 'Tell us a little about your day.';
    setErrors(nextErrors);
    if (!Object.keys(nextErrors).length) setSubmitted(true);
  };
  return (
    <section
      id="inquire"
      className="bg-[#24231f] py-24 sm:py-32"
      aria-labelledby="inquire-title">
      
      <div className="mx-auto grid max-w-[1600px] gap-14 px-5 sm:px-9 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="lg:col-span-4" data-reveal>
          <p className="text-[10px] uppercase tracking-[.28em] text-[#b59a68]">
            Begin a conversation
          </p>
          <h2
            id="inquire-title"
            className="mt-5 font-display text-5xl leading-[.9] sm:text-7xl">
            
            Let’s make space for the beautiful parts.
          </h2>
          <div className="mt-12 space-y-3 text-sm text-[#f4eee4]/70">
            <a
              className="block hover:text-[#d5c8ad]"
              href={`mailto:${studioConfig.email}`}>
              
              {studioConfig.email}
            </a>
            <a
              className="block hover:text-[#d5c8ad]"
              href={`tel:${studioConfig.phone.replace(/\s/g, '')}`}>
              
              {studioConfig.phone}
            </a>
            <a
              className="block hover:text-[#d5c8ad]"
              target="_blank"
              rel="noreferrer"
              href={`https://wa.me/${studioConfig.whatsapp}`}>
              
              WhatsApp us
            </a>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          {submitted ?
          <div
            className="flex min-h-[470px] flex-col justify-center border border-[#b59a68]/50 px-8 sm:px-14"
            role="status">
            
              <span className="grid h-12 w-12 place-items-center rounded-full border border-[#b59a68] text-[#d5c8ad]">
                <CheckIcon size={19} />
              </span>
              <h3 className="mt-8 font-display text-5xl">
                What a lovely beginning.
              </h3>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#f4eee4]/70">
                Thank you for reaching out. We’ll be in touch within two working
                days with next steps and a little more about how we work.
              </p>
              <button
              onClick={() => {
                setSubmitted(false);
                setValues(initialValues);
              }}
              className="mt-9 w-fit text-[10px] uppercase tracking-[.22em] text-[#d5c8ad] underline underline-offset-4">
              
                Send another inquiry
              </button>
            </div> :

          <form
            noValidate
            onSubmit={submit}
            className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
            
              <Field label="Your names *" error={errors.names}>
                <input
                value={values.names}
                onChange={(e) => update('names', e.target.value)}
                aria-invalid={Boolean(errors.names)}
                className="field" />
              
              </Field>
              <Field label="Email address *" error={errors.email}>
                <input
                type="email"
                value={values.email}
                onChange={(e) => update('email', e.target.value)}
                aria-invalid={Boolean(errors.email)}
                className="field" />
              
              </Field>
              <Field label="Wedding date *" error={errors.date}>
                <input
                type="date"
                value={values.date}
                onChange={(e) => update('date', e.target.value)}
                aria-invalid={Boolean(errors.date)}
                className="field [color-scheme:dark]" />
              
              </Field>
              <Field label="Venue / location">
                <input
                value={values.venue}
                onChange={(e) => update('venue', e.target.value)}
                className="field" />
              
              </Field>
              <Field label="I’m interested in">
                <select
                value={values.package}
                onChange={(e) => update('package', e.target.value)}
                className="field">
                
                  <option value="">Select an offering</option>
                  {studioConfig.formOptions.map((option) =>
                <option key={option}>{option}</option>
                )}
                </select>
              </Field>
              <Field label="How did you find us?">
                <input
                value={values.referral}
                onChange={(e) => update('referral', e.target.value)}
                className="field" />
              
              </Field>
              <div className="sm:col-span-2">
                <Field label="Tell us about your day *" error={errors.message}>
                  <textarea
                  rows={4}
                  value={values.message}
                  onChange={(e) => update('message', e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  className="field resize-none" />
                
                </Field>
              </div>
              <div className="sm:col-span-2">
                <button
                type="submit"
                className="group flex w-full items-center justify-between bg-[#b59a68] px-6 py-5 text-[10px] uppercase tracking-[.22em] text-[#171715] transition-colors hover:bg-[#d5c8ad]">
                
                  Send inquiry{' '}
                  <SendIcon
                  size={15}
                  className="transition-transform group-hover:translate-x-1" />
                
                </button>
                <p className="mt-4 text-[10px] leading-5 text-[#f4eee4]/45">
                  By sending this form, you agree to receive a thoughtful reply
                  from our studio. No mailing lists, ever.
                </p>
              </div>
            </form>
          }
        </div>
      </div>
    </section>);

}
type FieldProps = {
  label: string;
  error?: string;
  children: React.ReactNode;
};
function Field({ label, error, children }: FieldProps) {
  return (
    <label className="block text-[10px] uppercase tracking-[.18em] text-[#f4eee4]/65">
      {label}
      {children}
      {error &&
      <span
        className="mt-2 block normal-case tracking-normal text-[#d5a28d]"
        role="alert">
        
          {error}
        </span>
      }
    </label>);

}