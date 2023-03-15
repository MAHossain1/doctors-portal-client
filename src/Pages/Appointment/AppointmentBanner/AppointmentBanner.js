import chair from "../../../assets/images/chair.png";
import bg from "../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header className="my-10" style={{ background: `url(${bg})` }}>
      <div className="hero py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="Dentist Chair"
            className="lg:w-1/2  rounded-lg shadow-2xl"
          />
          <div className="pr-10">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
