import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import CommonInput from "../commonFormElement/CommonInput";
import { useContext, useState } from "react";
import CommonButton from "../commonFormElement/CommonButton";
import { motion } from "framer-motion";
import { scrollState } from "../../context/ScrollContext";

type smallCardProps = {
  id: string;
  icon: IconType;
  title: string;
  text: string;
};

type contactFormProps = {
  id: string;
  label: string;
  type: string;
  name: string;
  placeholder: string;
};

type formDataType = {
  name: string;
  email: string;
  message: string;
}

const smallCardData: smallCardProps[] = [
  {
    id: "1",
    icon: FaLocationDot,
    title: "Location",
    text: "123 Main Street, City, Country",
  },
  {
    id: "2",
    icon: MdEmail,
    title: "Email",
    text: "t0Z0o@example.com",
  },
  {
    id: "3",
    icon: FaPhoneAlt,
    title: "Phone",
    text: "+1 (123) 456-7890",
  },
];

const contactFormData: contactFormProps[] = [
  {
    id: "1",
    label: "Name",
    type: "text",
    name: "name",
    placeholder: "Enter your name",
  },
  {
    id: "2",
    label: "Email",
    type: "email",
    name: "email",
    placeholder: "Enter your email",
  },
  {
    id: "3",
    label: "Message",
    type: "textarea",
    name: "message",
    placeholder: "Enter your message",
  },
];

function SmallCard({ icon: Icon, title, text }: Omit<smallCardProps, "id">) {
  return (
    <div className="flex items-center">
      <Icon className="w-5 h-5 mx-2" />
      <div className="flex flex-col text-sm">
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600">{text}</p>
      </div>
    </div>
  );
}

function ContactUs() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    })
    const {contactRef} = useContext(scrollState);

    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      setFormData((prevState : formDataType) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
    };

  return (
    <motion.div ref={contactRef} initial={{ opacity: 0 }} transition={{ duration: 1 }} whileInView={{ opacity: 1 }} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">
          Get in Touch
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-1/2">
            <div className="flex flex-col gap-8 w-2/3 mx-auto">
              {smallCardData.map((item) => (
                <SmallCard key={item.id} {...item} />
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <form onSubmit={handleSubmit}>

              <div className="flex flex-col gap-5 my-5">
                {contactFormData.map((item) => (
                  <CommonInput
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    type={item.type}
                    name={item.name}
                    value={formData[item.name as keyof typeof formData]}
                    placeholder={item.placeholder}
                    onChange={onChange}
                    icon={null}
                  />
                ))}
              </div>

              <CommonButton label="Submit" type="submit" icon={null} onClick={() => {}} loading={false} />
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactUs;
