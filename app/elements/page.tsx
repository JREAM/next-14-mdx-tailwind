import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elements',
  description: '...',
}

export default function Page() {
  return (
    <>
      <div className="m-4 sm:m-8">
        <button className="btn">Button</button>
        <button className="btn btn-neutral">Neutral</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-accent">Accent</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-link">Link</button>
      </div>
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
      <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
      </div>
      <div className="breadcrumbs text-sm">
        <ul>
          <li><a>Home</a></li>
          <li><a>Documents</a></li>
          <li>Add Document</li>
        </ul>
      </div>
      {/* <!-- Open the modal using ID.showModal() method --> */}
      {/* <div>
        <button className="btn" onClick="my_modal_5.showModal()">open modal</button>
      </div> */}
      {/* <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              {/* <!-- if there is a button in form, it will close the modal --> */}
              {/* <button className="btn">Close</button> */}
            {/* </form> */}
          {/* </div> */}
        {/* </div> */}
      {/* </dialog> */}
    </>
  );
}
