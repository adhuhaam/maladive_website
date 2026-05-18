import Link from "next/link";
import type { PartnerResortItem } from "./types";

export function ResortCard({ resort, loop }: { resort: PartnerResortItem; loop: number }) {
  const gradients = [
    "from-blue-400 to-blue-600",
    "from-green-400 to-green-600",
    "from-purple-400 to-purple-600",
    "from-cyan-400 to-cyan-600",
    "from-orange-400 to-orange-600",
  ];
  const gradient = gradients[loop % gradients.length];
  const btnColors = [
    "bg-cyan-600 hover:bg-cyan-700",
    "bg-green-600 hover:bg-green-700",
    "bg-purple-600 hover:bg-purple-700",
    "bg-cyan-600 hover:bg-cyan-700",
    "bg-orange-600 hover:bg-orange-700",
  ];
  const btnColor = btnColors[loop % btnColors.length];
  const activities = (resort.activities ?? []).slice(0, 4);
  const description =
    resort.description.length > 120
      ? `${resort.description.slice(0, 120)}...`
      : resort.description;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className={`h-64 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        {resort.image ? (
          <img src={resort.image} alt={resort.name} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-20 h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{resort.name}</h3>
        <p className="text-cyan-600 font-medium mb-3">
          {resort.location}, {resort.country}
        </p>
        <p className="text-gray-600 mb-4">{description}</p>
        {activities.length > 0 && (
          <ul className="text-sm text-gray-600 mb-4 space-y-1">
            {activities.map((activity) => (
              <li key={activity}>• {activity}</li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{resort.rating}-Star</span>
          <Link
            href="/enquiry"
            className={`${btnColor} text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors`}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
