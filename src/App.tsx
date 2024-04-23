import { useState } from "react";
import LifeGrid from "./LifeGrid";
import SearchBar from "./SearchBar";
import HeadLine from "./HeadLine";
import Footer from "./Footer";

export default function App() {
  const [age, setAge] = useState<number>(25);

  return (
    <div className="md:container md:mx-auto px-2 py-2">
      <SearchBar setAge={setAge} />
      <HeadLine age={age} />
      <LifeGrid age={age} />
      <Footer />
    </div>
  );
}
