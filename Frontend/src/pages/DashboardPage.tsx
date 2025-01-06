import CalendarDisplay from "../components/dashboardPageComponents/CalenderDisplay";
import { useState } from "react";
import TableHead from "../components/dashboardPageComponents/TableHead";
import TableBody from "../components/dashboardPageComponents/TableBody";
import HabitForm from "../components/dashboardPageComponents/HabitForm";
import moment from "moment";

const taskData = [
  {
    id: "1",
    title: "Habit 1",
    date: "2022-01-01",
    time: "10:00 AM",
    description: "Habit 1 description",
  },
  {
    id: "2",
    title: "Habit 2",
    date: "2022-01-02",
    time: "11:00 AM",
    description: "Habit 2 description",
  },
];

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const DashboardPage = () => {
  // const { user } = useContext(authState);
  // const navigate = useNavigate();
  const [value, setValue] = useState<Value>(new Date());
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showCalender, setShowCalender] = useState(false);
  console.log((value as Date).toDateString());

  return (
    <div className="flex flex-col gap-10 justify-center items-center pb-20 my-10">
      {showCalender && (  <CalendarDisplay value={value} setValue={setValue} />)}

      <div className="flex flex-col items-center w-full h-full">
        <div className="w-full sm:w-4/5 h-full mx-auto border-2 rounded-md shadow-xl px-10 md:px-32 py-10">
          <div className="flex justify-between mb-8 pr-10">
            <h1 onClick={() => setShowCalender(!showCalender)} className="border-2 text-xl font-medium">{`${
              String(value).split(" ")[1] + " " + String(value).split(" ")[3]
            }`}</h1>
            <div className="flex gap-5 text-xl">
              <button
                onClick={() =>
                  setValue(
                    moment(value instanceof Array ? value[0] : value).startOf("week").subtract(1, "week").add(1, "day").toDate()
                  )
                }
                className="hover:scale-125 hover:font-semibold"
              >{`${"<"}`}</button>
              <button
                onClick={() =>
                  setValue(moment(value instanceof Array ? value[0] : value).startOf("week").add(1, "week").add(1, "day").toDate())
                }
                className="hover:scale-125 hover:font-semibold"
              >{`${">"}`}</button>
            </div>
          </div>
          <table className=" border-2 rounded w-full">
            <TableHead />
            <TableBody value={value} />
          </table>
        </div>
      </div>

      <div className="flex flex-col items-center w-full h-full">
        <div className="w-full sm:w-4/5 h-full mx-auto border-2 rounded-md shadow-xl px-10 md:px-32 py-10 flex flex-col gap-4">
          <h1 className="text-xl font-medium">
            {`${
              String(value).split(" ")[1] +
              ", " +
              String(value).split(" ")[2] +
              " " +
              String(value).split(" ")[3]
            }`}
          </h1>
          {taskData.map(({ id, title, time, description }) => (
            <div
              key={id}
              className="flex flex-row justify-between items-center rounded px-2"
            >
              <div className="flex flex-row justify-center items-center gap-5">
                <input className="size-5" type="checkbox" name="" id="" />
                <div className="flex flex-col gap-1">
                  <h1 className="text-lg font-medium">{title}</h1>
                  <p>{description}</p>
                </div>
              </div>
              <p>{time}</p>
            </div>
          ))}
          <div>
            <button
              onClick={() => setShowTaskForm(!showTaskForm)}
              className="bg-black px-5 py-1 mt-3 sm:py-3 rounded-md text-white font-semibold hover:bg-neutral-950"
            >
              Add Task
            </button>
          </div>
        </div>
      </div>

      {showTaskForm && (
        <HabitForm
          data={`${String(value).split(" ")[1]} ${
            String(value).split(" ")[2]
          } ${String(value).split(" ")[3]}`}
          showTaskForm={showTaskForm}
          setShowTaskForm={setShowTaskForm}
        />
      )}
    </div>
  );
};

export default DashboardPage;
