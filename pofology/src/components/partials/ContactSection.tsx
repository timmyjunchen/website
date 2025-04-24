import Image from 'next/image';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import SectionTitle from '@/components/shared/SectionTitle';

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: actually send your form here (fetch, emailjs, etc)
    // await sendContactForm(...)

    // show toast
    setSent(true);
    // hide after 3s
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <>
      <SectionTitle>Get In Touch</SectionTitle>
      <form onSubmit={handleSubmit} className="mt-14 grid gap-6 md:grid-cols-3">
        {/* left info/map */}
        <div className="relative h-48">
          <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
          <h6 className="text-2xl font-bold">Let's talk about everything!</h6>
          <p className="mt-2">Don't like forms? Send me an email. 👋</p>
        </div>

        {/* right form */}
        <div className="col-span-2">
          <div className="grid gap-8 md:grid-cols-2">
            <Input placeholder="Your Name" required />
            <Input placeholder="Email Address" type="email" required />
          </div>

          <div className="mt-8">
            <Input placeholder="Subject" required />
          </div>
          <div className="mt-8">
            <TextArea placeholder="Message" required />
          </div>
          <div className="mt-8">
            <Button
              type="submit"
              className="bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200"
            >
              Send Message
            </Button>
          </div>
        </div>
      </form>

      {/* Toast */}
      <Transition
        show={sent}
        as={React.Fragment}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed bottom-4 left-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Sent!
        </div>
      </Transition>
    </>
  );
};

export default ContactSection;
