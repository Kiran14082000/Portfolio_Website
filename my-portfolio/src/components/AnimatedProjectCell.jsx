// src/components/AnimatedProjectCell.jsx
import { motion } from "framer-motion";

const AnimatedProjectCell = ({ title, icon, code, description }) => {
  return (
    <motion.div
      className="project-cell"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.02, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
    >
      <h3 className="project-title">{icon} {title}</h3>
      <pre className="project-code"><code>{code}</code></pre>
      <p className="project-desc">{description}</p>
    </motion.div>
  );
};

export default AnimatedProjectCell;
