import { useEffect, useRef } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface Iprops {
  isModalOpen: boolean;
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  setMaxAge: React.Dispatch<React.SetStateAction<number>>;
}

interface IFormInput {
  maxAge: number;
}

export default function SettingsModal({
  isModalOpen,
  closeModal,
  setMaxAge,
}: Iprops) {
  const ref = useRef();
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setMaxAge(data.maxAge);
    closeModal(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [isModalOpen]);

  useEffect(() => {
    ref.current.addEventListener("click", (event) => {
      if (event.target == ref.current) {
        closeModal(false);
      }
    });
  }, []);

  return (
    <dialog ref={ref} onCancel={() => closeModal(false)} className="w-1/2 p-4">
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="px-auto">
          <div className="">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Maximum age
            </label>
            <input
              {...register("maxAge")}
              type="number"
              defaultValue={100}
              className="block w-1/2 rounded-md border-0 py-1.5 px-1.5 text-gray-900
        shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
        focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
            />
          </div>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 mt-3 text-sm font-semibold
        text-white shadow-sm hover:bg-indigo-500 focus-visible:outline
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-indigo-600"
          >
            Submit
          </button>
        </form>
        <button
          onClick={() => closeModal(false)}
          className="rounded-md bg-red-600 px-3 py-2 mt-3 text-sm font-semibold
        text-white shadow-sm hover:bg-red-500 focus-visible:outline
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-red-600"
        >
          Close
        </button>
      </div>
    </dialog>
  );
}
