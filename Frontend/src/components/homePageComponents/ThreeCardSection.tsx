import { motion } from "framer-motion";
import { GiProgression } from "react-icons/gi";
import { FaBell } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { IconType } from "react-icons";
import { useContext } from "react";
import { scrollState } from "../../context/ScrollContext";

type cardDataType = {
  id: string;
  icon: IconType;
  title: string;
  description: string;
};

const cardData: cardDataType[] = [
  //card 1 : Track Progress
  {
    id: "1",
    icon: GiProgression,
    title: "Track Progress",
    description:
      "Monitor your habit streaks and achievements with detailed analytics.",
  },
  //card 2 : Daily Reminders
  {
    id: "2",
    icon: FaBell,
    title: "Daily Reminders",
    description: "Never miss a habit with customizable notifications.",
  },
  //card 3 : Social Interaction
  {
    id: "3",
    icon: MdGroups,
    title: "Community Support",
    description: "Join like-minded people on their journey to better habits.",
  },
];

function Card({ icon: Icon, title, description }: Omit<cardDataType, "id">) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xlmotion. transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <span className="text-blue-500 text-3xl">
          <Icon className="text-black" />
        </span>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 mt-3">{description}</p>
    </motion.div>
  );
}

function ThreeCardSection() {
  const { featuresRef } = useContext(scrollState);
  return (
    <motion.div ref={featuresRef} initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }} className="bg-slate-100 py-16 pt-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 justify-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardData.map((card) => (
            <Card
              key={card.id}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ThreeCardSection;
