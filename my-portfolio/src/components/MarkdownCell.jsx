import React from "react";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";

const MarkdownCell = ({ text }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
    className="prose prose-invert max-w-none"
  >
    <ReactMarkdown>{text}</ReactMarkdown>
  </motion.div>
);

export default MarkdownCell;
