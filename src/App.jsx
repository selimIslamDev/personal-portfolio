import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer.jsx";

function App() {
  const [darkMode, setDarkMode] = useState(true); // Default Dark Mode

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    // dark:bg-[#0a0a0a] ব্যবহার করা হয়েছে যাতে পিওর ব্ল্যাক একটা গর্জিয়াস লুক আসে
    <div className="min-h-screen bg-white dark:bg-[#0a0a0a] transition-colors duration-500">
      {/* Navbar এ toggle function পাস করো */}
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



// import { Route, Routes } from "react-router";
// import Home from "./pages/Home/Home";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer.jsx";

// function App() {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Routes>
//         <Route path="/" element={<Home />} />
//       </Routes>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default App;
