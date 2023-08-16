import React from "react";
import ActivityCardDetails from "./ActivityCardDetails";
import Modal from "./Modal";
import { ActivityCardProps } from "@/types";

function ActivityCard({ activity, searchParams }: ActivityCardProps) {
  const { id, fields } = activity;
  const showActivity = searchParams?.activity; // get the id from params ex: "?activity=123"

  console.log(showActivity);

  return (
    <div className="bg-[#f5f5f5] cursor-pointer rounded-xl shadow-xl p-4 overflow-hidden">
      <ActivityCardDetails id={id} fields={fields} />
      <a className="bg-transparent text-center text-xs block mt-8 hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" href={`?activity=${id}`}>
        <span>VIEW DETAILS</span>
      </a>
      {id === showActivity && <Modal fields={fields} />}
    </div>
  );
}

export default ActivityCard;
