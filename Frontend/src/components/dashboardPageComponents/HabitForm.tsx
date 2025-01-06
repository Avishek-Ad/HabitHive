import { useState } from "react";
import CommonInput from "../commonFormElement/CommonInput";
import CommonSelect from "../commonFormElement/CommonSelect";

type habitDataType = {
  title: string;
  description: string;
  date: string;
  schedule: string;
};

const taskFormData = [
  {
    id: "1",
    label: "Title",
    type: "text",
    name: "title",
    placeholder: "Enter title",
  },
  {
    id: "2",
    label: "Description",
    type: "textarea",
    name: "description",
    placeholder: "Enter description",
  },
  {
    id: "3",
    label: "End Date (Optional)",
    type: "date",
    name: "date",
    placeholder: "",
  },
];

function HabitForm({
  data,
  showTaskForm,
  setShowTaskForm,
}: {
  data: String;
  showTaskForm: boolean;
  setShowTaskForm: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [habitData, setHabitData] = useState<habitDataType>({
    title: "",
    description: "",
    date: "",
    schedule: "",
  });

  const handleSubmit = () => {
    console.log(habitData);
  }
  return (
    <div className="w-full h-full flex flex-col justify-center items-center fixed top-0 left-0 bg-black bg-opacity-50 z-50">
      <div className="w-1/2 border-2 rounded-md shadow-xl p-10 flex flex-col gap-4 relative bg-gray-100">
        <h1 className="text-2xl font-bold">{data}</h1>
        {taskFormData.map((item) => (
          <CommonInput
            key={item.id}
            id={item.id}
            label={item.label}
            type={item.type}
            name={item.name}
            placeholder={item.placeholder}
            onChange={(e) =>{habitData[item.name as keyof habitDataType] = e.target.value; setHabitData({...habitData})}}
            value={habitData[item.name as keyof habitDataType]}
            icon={null}
          />
        ))}
        <CommonSelect
          id="4"
          label="Schedule"
          name="schedule"
          options={[
            { value: "1", label: "Daily" },
            { value: "2", label: "Weekly" },
            { value: "3", label: "Monthly" },
          ]}
          value="1"
          onChange={(e) => {habitData.schedule = e.target.value; setHabitData({...habitData})}}
        />
        <div className="flex justify-end gap-8">
          <button
            onClick={() => setShowTaskForm(!showTaskForm)}
            className="bg-red-500 px-4 py-2 hover:bg-red-800 font-medium text-white rounded-md"
          >
            Cancel
          </button>
          <button onClick={handleSubmit} className="bg-green-500 px-4 py-2 hover:bg-green-800 font-medium text-white rounded-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default HabitForm;
