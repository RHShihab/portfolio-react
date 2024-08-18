import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import CustomSection from "./custom/CustomSection";

const Contact = () => {
  return (
    <CustomSection>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4 flex justify-center items-center gap-2"
        >
          <FaLocationDot />
          {CONTACT.address}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4 flex justify-center items-center gap-2"
        >
          <FaLinkedin className="pt" />
          <a href="https://www.linkedin.com/in/rhshihab/" className="border-b">
            in/rhshihab/
          </a>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4 flex justify-center items-center gap-2"
        >
          <FaGithub className="pt" />
          <a href="https://github.com/RHShihab" className="border-b">
            in/rhshihab/
          </a>
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="my-4 flex justify-center items-center gap-2"
        >
          <MdEmail />
          <a href={"mailto:" + CONTACT.email} className="border-b">
            {CONTACT.email}
          </a>
        </motion.p>
      </div>
    </CustomSection>
  );
};

export default Contact;
