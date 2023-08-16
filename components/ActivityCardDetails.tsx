import { Activity } from "@/types";

function ActivityCardDetails({ fields }: Activity) {
  return (
    <div>
      {fields.Attachments && fields.Attachments.length > 0 && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="shadow object-cover w-full h-[150px] rounded"
          src={fields.Attachments[0].url}
          alt="Activity"
        />
      )}
      <h3 className="font-bold my-2 text-lg">{fields.Name}</h3>

      <span className="my-2 uppercase text-xs text-gray-600">Details</span>
      <p className="text-sm pr-4  py-2 my-2 max-h-[145px] overflow-y-scroll">
        {fields.Details}
      </p>

      {fields.Website && (
        <div>
          <span className="my-2 uppercase text-xs text-gray-600">Website</span>
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
          <span className="my-2 uppercase text-xs text-gray-600">Facebook</span>
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
  );
}

export default ActivityCardDetails;
