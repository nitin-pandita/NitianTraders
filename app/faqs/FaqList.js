import React from "react";
import { Disclosure } from "@headlessui/react";
import faq from "../../data/faq";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FaqList() {
  return (
    <dl className="mt-6 space-y-6 divide-y divide-gray-200">
      {faq.map((faq) => (
        <Disclosure as="div" key={faq.question} className="pt-6">
          {({ open }) => (
            <React.Fragment>
              <dt className="text-lg">
                <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                  <span className="font-medium text-white">{faq.question}</span>
                  <span
                    className="ml-6 h-7 flex items-center"
                    style={{ transform: `rotate(${open ? "-180deg" : "0"})` }}
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </Disclosure.Button>
              </dt>
              <Disclosure.Panel as="dd" className="mt-2 pr-12">
                <p className="text-base text-gray-500">{faq.answer}</p>
              </Disclosure.Panel>
            </React.Fragment>
          )}
        </Disclosure>
      ))}
    </dl>
  );
}
