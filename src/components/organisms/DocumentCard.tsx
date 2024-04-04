interface DocumentProps {
  document: any;
}

export default function DocumentCard({ document }: DocumentProps) {
  return (
    <div className="flex flex-col ">
      <div className="flex px-5 py-3 hover:cursor-pointer border-border-default border-b-[1px] justify-between items-center">
        <a
          className="underline text-axa-blue font-bold leading-6 hover:cursor-pointer"
          href={document.content_url}
        >
          {document.name}
        </a>
        <img src="/Download.png"></img>
      </div>
      <div className="flex px-5 py-3 border-border-default border-b-[1px]">
        <p className="font-bold leading-6 flex-1 text-grey8-dark-text ">
          Create on
        </p>
        <p className="text-start leading-6 flex-1 text-grey6">
          {document.created_at}
        </p>
      </div>
      <div className="flex px-5 py-3 border-border-default border-b-[1px]">
        <p className="font-bold leading-6 flex-1 text-grey8-dark-text ">
          Nature
        </p>
        <p className="text-start leading-6 flex-1 text-grey6">
          {document.type}
        </p>
      </div>
      <div className="flex px-5 py-3 border-border-default border-b-[1px]">
        <p className="font-bold leading-6 flex-1 text-grey8-dark-text ">
          Sent via
        </p>
        <p className="text-start leading-6 flex-1 text-grey6">
          cual es la info
        </p>
      </div>
    </div>
  );
}
