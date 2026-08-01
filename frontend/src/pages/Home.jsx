
import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { CalendarDays, Users, PackageCheck, CreditCard, DollarSign } from "lucide-react";

const data = [
  { name: "Ene", eventos: 8 },
  { name: "Feb", eventos: 10 },
  { name: "Mar", eventos: 14 },
  { name: "Abr", eventos: 7 },
  { name: "May", eventos: 12 },
];

const stats = [
  { title: "Eventos", value: 58, icon: <CalendarDays className="w-6 h-6 text-blue-600" /> },
  { title: "Clientes", value: 135, icon: <Users className="w-6 h-6 text-green-600" /> },
  { title: "Inventario", value: 42, icon: <PackageCheck className="w-6 h-6 text-purple-600" /> },
  { title: "Pagos", value: "$12,540", icon: <DollarSign className="w-6 h-6 text-yellow-600" /> },
];

const Home = () => {
  return (
    <div className="space-y-6 flex flex-col bg- flex-grow p-5">
      <h1 className="text-3xl font-bold">Bienvenido al Panel Principal</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-full">{stat.icon}</div>
            <div>
              <h2 className="text-sm text-gray-500">{stat.title}</h2>
              <p className="text-xl font-semibold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-2xl shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4">Eventos por Mes</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="eventos" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Home;
