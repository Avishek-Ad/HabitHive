import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import './index.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

type props = {
  value: Value;
  setValue: (value: Value) => void;
}

export default function CalendarDisplay({value, setValue}: props) {
  return (
    <div className="Sample shadow-2xl rounded-lg">
      <div className="Sample__container">
        <main className="Sample__container__content">
          <Calendar calendarType="gregory" className= "rounded-xl" onChange={setValue} value={value} />
        </main>
      </div>
    </div>
  );
}