import { motion } from "framer-motion";

type testimonialProps = {
  id: string;
  image: string;
  name: string;
  position: string;
  message: string;
};

const testimonialData: testimonialProps[] = [
  //Testimonial 1
  {
    id: "1",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "Sarah Johnson",
    position: "Product Manager",
    message:
      "HabitHive helped me build a consistent meditation practice. The streak tracking keeps me motivated!",
  },
  //Testimonial 2
  {
    id: "2",
    image:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    name: "Michael Chen",
    position: "Software Engineer",
    message:
      "The interface is clean and intuitive. I love how easy it is to track multiple habits at once.",
  },
];

function Testimonial({
  image,
  name,
  position,
  message,
}: Omit<testimonialProps, "id">) {
  return (
    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
      <img
        src={image}
        alt="Profile picture of Sarah Johnson"
        className="w-16 h-16 rounded-full mb-4"
      />
      <h3 className="text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">{position}</p>
      <p className="text-gray-600">"{message}"</p>
    </div>
  );
}

function UserSaySection() {
  return (
    <motion.div initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-10">
          What Our Users Say
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {testimonialData.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              image={testimonial.image}
              name={testimonial.name}
              position={testimonial.position}
              message={testimonial.message}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default UserSaySection;
