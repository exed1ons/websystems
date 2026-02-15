import { Booking } from "../../types";
import StatusBadge from "../../components/status-badge";
import Button from "../../components/button";

const AdminDashboard: React.FC = () => {
    const bookings: Booking[] = [
        { id: '1', guest: 'Maria Ivanova', room: '6', status: 'AWAITING_GUEST' },
        { id: '2', guest: 'John Doe', room: '12', status: 'CHECKED_IN' }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-500">
            {/* Chart Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                    { label: 'Arrivals', val: '5' },
                    { label: 'Occupancy', val: '85%' },
                    { label: 'Revenue', val: '$12,400' }
                ].map((card) => (
                    <div key={card.label} className="bg-white border border-gray-900 rounded p-6">
                        <h3 className="text-sm font-medium text-gray-600 uppercase mb-4">{card.label}</h3>
                        <p className="text-3xl font-semibold text-gray-900">{card.val}</p>
                    </div>
                ))}
            </div>

            {/* Data Table */}
            <div className="bg-white border border-gray-900 rounded overflow-hidden">
                <div className="border-b border-gray-900 bg-gray-50 px-6 py-4">
                    <h3 className="font-semibold uppercase text-gray-900">Bookings</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-gray-900 bg-gray-50">
                                <th className="px-6 py-3 font-medium text-gray-700 uppercase text-xs">Guest</th>
                                <th className="px-6 py-3 font-medium text-gray-700 uppercase text-xs">Room</th>
                                <th className="px-6 py-3 font-medium text-gray-700 uppercase text-xs">Status</th>
                                <th className="px-6 py-3 font-medium text-gray-700 uppercase text-xs text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {bookings.map(booking => (
                                <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="px-6 py-4 text-gray-900">{booking.guest}</td>
                                    <td className="px-6 py-4 text-gray-600">{booking.room}</td>
                                    <td className="px-6 py-4">
                                        <StatusBadge status={booking.status} />
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Button variant="outline" className="text-xs py-1 px-3">
                                            check in
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;