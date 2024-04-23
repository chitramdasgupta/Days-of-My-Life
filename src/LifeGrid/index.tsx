import Cell from "../Cell";

interface IProps {
  age: number;
}

export default function LifeGrid({ age }: IProps) {
  const items = [];
  for (let i = 1; i <= 100; i++) {
    const color = i <= age ? "bg-green-400" : "bg-gray-400";
    items.push(<Cell index={i} color={color} />);
  }
  return <div className="flex flex-wrap gap-2">{items}</div>;
}
