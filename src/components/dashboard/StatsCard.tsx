import React from "react";

interface Props {
  title: string;
  value: number | string;
  borderClass?: string;
}

export const StatsCard: React.FC<Props> = ({ title, value, borderClass }) => (
  <div className={`bg-white p-6 rounded-2xl shadow-lg ${borderClass ?? ""}`}>
    <div className="text-gray-600 mb-2">{title}</div>
    <div className="text-4xl font-bold text-gray-800">{value}</div>
  </div>
);
