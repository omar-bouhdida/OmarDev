import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Let's discuss your project and see how I can help
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <ContactInfo
                icon={<Mail />}
                title="Email"
                content="omarbouhdiida@gmail.com"
              />
              <ContactInfo
                icon={<Phone />}
                title="Phone"
                content="(+216) 26 762 951"
              />
              <ContactInfo
                icon={<MapPin />}
                title="Location"
                content="Ras Jebel, Bizerte, Tunisia"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content }: { icon: React.ReactNode; title: string; content: string }) => (
  <div className="flex items-center">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-50 text-indigo-600">
        {icon}
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-medium text-gray-900">{title}</h4>
      <p className="mt-1 text-gray-500">{content}</p>
    </div>
  </div>
);

export default Contact;
