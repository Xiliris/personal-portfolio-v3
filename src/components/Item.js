import { motion } from "framer-motion";
import "./Item.scss";

export default function Item({ children, index }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className="item"
    >
      {children}
    </motion.div>
  );
}
