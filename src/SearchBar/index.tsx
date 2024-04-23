import { useForm, SubmitHandler } from "react-hook-form";

interface IProps {
  setAge: React.Dispatch<React.SetStateAction<number>>;
}

interface IFormInput {
  age: number;
}

export default function SearchBar({ setAge }: IProps) {
  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => setAge(data["age"]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-auto">
      <div className="">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          Age
        </label>
        <input
          {...register("age")}
          type="number"
          defaultValue={25}
          className="block w-1/4 rounded-md border-0 py-1.5 px-1.5 text-gray-900 
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
  );
}
