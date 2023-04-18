import { FC } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../util/motion";
interface props {
  children: React.ReactNode;
  idName: string;
}
const SectionWrapper: FC<props> = ({ children, idName }) => {
  return (
    <motion.section
      variants={staggerContainer(1, 1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
