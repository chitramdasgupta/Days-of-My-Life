interface Iprops {
  age: number;
}

export default function HeadLine({ age }: Iprops) {
  return (
    <h1 className="my-4 text-xl">
      Your age: <span className="italic">{age}</span>
    </h1>
  );
}
