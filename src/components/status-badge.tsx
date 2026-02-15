import { Booking} from "../types";

interface StatusBadgeProps {
    status: Booking['status'];
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const styles = {
        AWAITING_GUEST: "bg-orange-100 text-orange-700",
        CHECKED_IN: "bg-green-100 text-green-700",
        CANCELLED: "bg-red-100 text-red-700"
    };

    return (
        <span className={`px-3 py-1 rounded text-xs font-medium uppercase ${styles[status]}`}>
            {status.replace('_', ' ')}
        </span>
    );
};

export default StatusBadge;