"use client";

import React from 'react';
import {
  Card,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

// Import necessary types from MUI
import { 
  IconButtonProps, 
  InputProps, 
  RadioProps, 
  TextareaAutosizeProps 
} from '@mui/material';

// Define custom components with correct typings
const CustomIconButton: React.FC<IconButtonProps> = ({ children, ...props }) => (
  <Button variant="icon" {...props}>{children}</Button>
);

const CustomInput: React.FC<InputProps> = ({ label, ...props }) => (
  <input 
    type="text" 
    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    {...props}
  />
);

const CustomRadio: React.FC<RadioProps> = ({ label, ...props }) => (
  <div className="flex items-center mb-4">
    <input 
      type="radio" 
      className="w-4 h-4 mr-2 border-gray-300 focus:ring-2 focus:ring-blue-500"
      {...props}
    />
    <span className="ml-2">{label}</span>
  </div>
);

const CustomTextarea: React.FC<TextareaAutosizeProps> = ({ label, ...props }) => (
  <textarea 
    rows={4}
    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
    {...props}
  />
);

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  type: "Design" | "Development" | "Support" | "Other";
  message: string;
}

export function ContactForm() {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data: ContactFormData = {
      firstName: formData.get("first-name") as string,
      lastName: formData.get("last-name") as string,
      email: formData.get("email") as string,
      type: formData.get("type") as ContactFormData["type"],
      message: formData.get("message") as string,
    };
    console.log(data); // Replace this with actual form submission logic
  };

  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <h1 className="text-blue-gray-900 text-4xl font-bold mb-4">Contact Us</h1>
        <p className="mx-auto w-full lg:w-5/12 text-gray-500">
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </p>
      </div>
      <Card shadow={true} className="container mx-auto border border-gray-200">
        <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
          <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900 text-white">
            <h4 className="text-xl font-semibold mb-2">Contact Information</h4>
            <p className="mb-8">
              Fill up the form and our Team will get back to you within 24 hours.
            </p>
            <div className="flex gap-5 mb-4">
              <PhoneIcon className="h-6 w-6" />
              <p className="text-lg">+923032402251</p>
            </div>
            <div className="flex my-4 gap-5">
              <EnvelopeIcon className="h-6 w-6" />
              <p className="text-lg">bainfo14@gmail.com</p>
            </div>
            <div className="flex mb-10 gap-5">
              <TicketIcon className="h-6 w-6" />
              <p className="text-lg">Open Support Ticket</p>
            </div>
            <div className="flex items-center gap-5">
              <CustomIconButton variant="text" color="white">
                <FontAwesomeIcon icon={faFacebook} size="lg" />
              </CustomIconButton>
              <CustomIconButton variant="text" color="white">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </CustomIconButton>
              <CustomIconButton variant="text" color="white">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </CustomIconButton>
            </div>
          </div>
          <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
            <form onSubmit={handleSubmit}>
              <div className="mb-8 grid gap-4 lg:grid-cols-2">
                <CustomInput
                  label="First Name"
                  name="first-name"
                  placeholder="eg. Lucas"
                  containerProps={{
                    className: "!min-w-full mb-3 md:mb-0",
                  }}
                />
                <CustomInput
                  label="Last Name"
                  name="last-name"
                  placeholder="eg. Jones"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                />
              </div>
              <CustomInput
                label="Email"
                name="email"
                placeholder="eg. lucas@mail.com"
                containerProps={{
                  className: "!min-w-full mb-8",
                }}
              />
              <p className="text-blue-gray-500 text-sm mb-2">
                What are you interested in?
              </p>
              <div className="-ml-3 mb-14 ">
                <CustomRadio
                  name="type"
                  label="Design"
                  defaultChecked
                />
                <CustomRadio
                  name="type"
                  label="Development"
                />
                <CustomRadio
                  name="type"
                  label="Support"
                />
                <CustomRadio
                  name="type"
                  label="Other"
                />
              </div>
              <CustomTextarea
                label="Your Message"
                name="message"
                containerProps={{
                  className: "!min-w-full mb-8",
                }}
              />
              <div className="w-full flex justify-end">
                <Button 
                  className="w-full md:w-fit" 
                  color="gray" 
                  size="md"
                  onClick={() => { /* handle click event */ }}
                >
                  Send message
                </Button>
              </div>
            </form>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default ContactForm;
