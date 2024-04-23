interface IProps {
  index: number;
  color?: string;
}

export default function Cell({ index, color = "bg-gray-400" }: IProps) {
  return (
    <div className={`w-6  ${color}`} key={index}>
      &nbsp;
    </div>
  );
}
