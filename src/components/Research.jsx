import CustomSection from "./custom/CustomSection";
import { motion } from "framer-motion";
import { PUBLICATIONS } from "../constants";

const Research = () => {
  return (
    <CustomSection>
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Research & Publications
      </motion.h2>
      <div>
        {PUBLICATIONS.map((publication, index) => (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            key={index}
            className="my-2 flex justify-center gap-4"
          >
            <p>-</p>
            <p className="max-w-4xl">
              {highlightAuthor(publication.title, "Shihab, R. H.")}
              <a
                href={publication.doi}
                className="underline ml-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                [DOI]
              </a>
            </p>
          </motion.div>
        ))}
      </div>
    </CustomSection>
  );
};

const highlightAuthor = (title, author) => {
  const parts = title.split(author);
  return (
    <>
      {parts[0]}
      <span className="font-bold underline underline-offset-2">{author}</span>
      {parts[1]}
    </>
  );
};

export default Research;
