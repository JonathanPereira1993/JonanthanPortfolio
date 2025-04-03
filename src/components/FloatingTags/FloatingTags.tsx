import "./FloatingTags.scss";
import { motion } from "framer-motion";
import Tag from "../UI/tag/Tag";

type tagSize = "sm" | "md" | "lg";

type Props = {
  title?: string;
  tags: string[];
  size?: tagSize;
};

const FloatingTags = ({ tags, size = "md", title }: Props) => {
  return (
    <>
      {title && <p className="floating-tags-title">{title}</p>}
      <div className={`floating-tags floating-tags-${size}`}>
        {tags.map((tag, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
              delay: index * 0.3,
            }}
            className="floating-tag"
          >
            <Tag text={tag} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default FloatingTags;
