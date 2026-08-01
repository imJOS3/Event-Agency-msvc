// src/pages/CalendarioEventos.jsx
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Layout from "../components/Layout";

moment.locale("es");
const localizer = momentLocalizer(moment);

const eventos = [
  {
    title: "Boda Juan y Ana",
    start: new Date(2025, 3, 28, 16, 0),
    end: new Date(2025, 3, 28, 22, 0),
    allDay: false,
  },
  {
    title: "Fiesta de empresa",
    start: new Date(2025, 3, 30, 18, 0),
    end: new Date(2025, 3, 30, 23, 0),
    allDay: false,
  },
];

const CalendarioEventos = () => {
  return (
    <div className="flex">
      <Layout/>
  
    <div className="bg-white rounded-2xl shadow-lg p-6 max-w-6xl mx-auto flex-grow">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Calendario de Eventos</h2>
      <div className="h-[600px]">
        <Calendar
          localizer={localizer}
          events={eventos}
          startAccessor="start"
          endAccessor="end"
          style={{ height: "100%" }}
        />
      </div>
      
    </div>
    </div>
  );
  
};

export default CalendarioEventos;
