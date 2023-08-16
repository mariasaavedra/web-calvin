"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Link from "next/link";
import { Activity, ActivityCardProps, ActivityFields } from "@/types";

interface ModalProps extends React.HTMLAttributes<HTMLDialogElement> {
  fields: ActivityFields;
}

export default function Modal(props: ModalProps) {
  // The open/closed state lives outside of the Dialog and is managed by you
  let [isOpen, setIsOpen] = useState(true);

  const { fields } = props;

  return (
    <Dialog onClose={() => {}} open={isOpen} className="relative z-50">
      {/* The backdrop, rendered as a fixed sibling to the panel container */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full md:w-1/2 h-full rounded-lg overflow-y-scroll bg-white">
          <Link className="outline-none border-0 mr-0 px-2 pt-2 block text-right " href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="inline lucide lucide-x-square"
            >
              <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
              <path d="m15 9-6 6" />
              <path d="m9 9 6 6" />
            </svg>
          </Link>
          <div className="p-4">
            <div>
              {fields.Attachments && fields.Attachments.length > 0 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  className="shadow object-cover w-full  mb-2 h-[200px] rounded"
                  src={fields.Attachments[0].url}
                  alt="Activity"
                />
              )}

              <h3 className="block font-bold my-2 text-lg">{fields.Name}</h3>

              <span className="my-2 uppercase text-xs text-gray-600">
                Details
              </span>
              <p className="text-sm pr-4  py-2 my-2 ">{fields.Details}</p>

              {fields.Website && (
                <div>
                  <span className="my-2 uppercase text-xs text-gray-600">
                    Website
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={fields.Website}
                    className="whitespace-nowrap block font-bold overflow-hidden text-ellipsis text-xs my-2 max-w-[500px]"
                  >
                    {fields.Website}
                  </a>
                </div>
              )}

              {fields.Instagram && (
                <div>
                  <span className="my-2 uppercase text-xs text-gray-600">
                    Instagram
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={fields.Instagram}
                    className="whitespace-nowrap block font-bold overflow-hidden text-ellipsis text-xs my-2 max-w-[500px]"
                  >
                    {fields.Instagram}
                  </a>
                </div>
              )}

              {fields.Facebook && (
                <div>
                  <span className="my-2 uppercase text-xs text-gray-600">
                    Facebook
                  </span>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={fields.Facebook}
                    className="whitespace-nowrap block font-bold overflow-hidden text-ellipsis text-xs my-2 max-w-[500px]"
                  >
                    {fields.Facebook}
                  </a>
                </div>
              )}

              {fields.ActivityTypes &&
                fields.ActivityTypes.length > 0 &&
                fields.ActivityTypes.map((type) => (
                  <span
                    key={type}
                    className="bg-blue-100 text-blue-800 text-xs font-medium my-2 mr-2 px-2.5 py-0.5 rounded-full"
                  >
                    {type}
                  </span>
                ))}
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
