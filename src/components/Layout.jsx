import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import { useNavigation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Scrollling from "./scrolling.jsx";

const Layout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <Scrollling />
      <Header />
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 z-50 flex flex-col items-center justify-center gap-4 text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
            <p className="text-lg tracking-wide font-semibold">Loading...</p>
          </motion.div>
        )}
      </AnimatePresence>
      <main className="min-h-[80vh]">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
