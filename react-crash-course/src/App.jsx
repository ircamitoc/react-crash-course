import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  return (
    <>
      <MainHeader />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default App;
