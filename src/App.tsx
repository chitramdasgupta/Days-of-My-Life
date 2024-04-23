import { useState } from "react";
import LifeGrid from "./LifeGrid";
import SearchBar from "./SearchBar";
import HeadLine from "./HeadLine";
import Footer from "./Footer";
import SettingsDialog from "./SettingsDialog";
import CogButton from "./CogButton";

export default function App() {
  const [maxAge, setMaxAge] = useState<number>(100);
  const [age, setAge] = useState<number>(25);
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false);

  return (
    <div className="md:container md:mx-auto px-2 py-2">
      <SearchBar setAge={setAge} />
      <CogButton setIsModalOpen={setIsSettingsOpen} />
      <SettingsDialog
        isModalOpen={isSettingsOpen}
        closeModal={setIsSettingsOpen}
        setMaxAge={setMaxAge}
      />
      <HeadLine age={age} />
      <LifeGrid age={age} maxAge={maxAge} />
      <Footer />
    </div>
  );
}
