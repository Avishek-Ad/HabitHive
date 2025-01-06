import { IconType } from "react-icons";
import { motion } from "framer-motion";

type props = {
  type: "button" | "submit" | "reset" | undefined;
  label: string;
  onClick: () => void;
  icon: IconType | null;
  loading: boolean;
};

function CommonButton({ type, label, onClick, icon: Icon, loading }: props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring" }}
      onClick={onClick}
      type={type}
      className="flex flex-row items-center justify-center gap-2 bg-slate-800 text-white font-semibold rounded w-full my-5 py-2"
    >
      {loading ? (
        Icon && <Icon className="animate-spin size-8" />
      ) : (
        <>
          {Icon && <Icon className="size-8" />}
          <h1>{label}</h1>
        </>
      )}
    </motion.button>
  );
}

export function SmallCommonButton({
  type,
  label,
  onClick,
}: Omit<Omit<props, "icon">, "loading">) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "tween" }}
      onClick={onClick}
      type={type}
      className="border-2 border-black hover:shadow-2xl bg-black text-sm sm:text-base text-white font-semibold rounded px-4 py-3"
    >
      {label}
    </motion.button>
  );
}

export function SmallCommonButtonBorder({
  type,
  label,
  onClick,
}: Omit<Omit<props, "icon">, "loading">) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3, type: "tween" }}
      onClick={onClick}
      type={type}
      className="border-2 border-black text-black hover:bg-black hover:shadow-2xl text-sm sm:text-base hover:text-white font-semibold rounded px-4 py-3"
    >
      {label}
    </motion.button>
  );
}

export default CommonButton;
