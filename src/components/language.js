/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { useRouter } from "next/router";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpIcon } from "@heroicons/react/solid";

const languages = [
  { id: 1, name: "Deutsch", tag: "de", flag: "https://huel.io/flags/de.svg" },
  { id: 2, name: "English", tag: "en", flag: "https://huel.io/flags/gb.svg" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Language({ className }) {
  const router = useRouter();

  const language = languages.find((lang) => lang.tag === router.locale);

  const [selectedLanguage, setSelectedLanguage] = useState(
    language || languages[0]
  );

  return (
    <Listbox
      value={selectedLanguage}
      onChange={(selected) => {
        setSelectedLanguage(selected);
        router.push("/", "/", { locale: selected.tag });
      }}
    >
      {({ open }) => (
        <>
          <div className={className}>
            <Transition
              show={open}
              enter="transition duration-100 ease-in-out origin-bottom"
              enterFrom="transform scale-y-0 opacity-0"
              enterTo="transform scale-y-100 opacity-100"
              leave="transition duration-75 ease-in origin-bottom"
              leaveFrom="transform scale-y-100 opacity-100"
              leaveTo="transform scale-y-0 opacity-0"
            >
              <Listbox.Options className="relative z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {languages.map((language) => (
                  <Listbox.Option
                    key={language.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-primary bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={language}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                          <img
                            src={language.flag}
                            alt={language.name}
                            className="flex-shrink-0 h-6 w-6 rounded-full"
                          />
                          <span
                            className={classNames(
                              selected ? "font-semibold" : "font-normal",
                              "sm:ml-3 sm:block truncate hidden"
                            )}
                          >
                            {language.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-primary" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
            <Listbox.Button className="relative w-full bg-white bg-opacity-70 border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-primary focus:border-indigo-500 sm:text-sm">
              <span className="flex items-center">
                <img
                  src={selectedLanguage.flag}
                  alt={selectedLanguage.name}
                  className="flex-shrink-0 h-6 w-6 rounded-full"
                />
                <span className="sm:ml-3 sm:block truncate hidden">
                  {selectedLanguage.name}
                </span>
              </span>
              <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <ChevronUpIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
          </div>
        </>
      )}
    </Listbox>
  );
}

export default Language;
