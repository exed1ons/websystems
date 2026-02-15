import { Room } from "../../types";
import Button from "../../components/button";

interface RoomCardProps {
    room: Room;
    onSelect: (room: Room) => void;
}

const RoomCard: React.FC<RoomCardProps> = ({ room, onSelect }) => (
    <div className="bg-white border border-gray-900 rounded overflow-hidden">
        <div className="h-48 bg-gray-100 flex items-center justify-center text-gray-300">
            <span className="text-sm font-medium">Image placeholder</span>
        </div>
        <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 uppercase mb-1">ROOM {room.id}</h3>
            <p className="text-sm text-gray-600 uppercase mb-4">{room.type}</p>
            <div className="flex justify-between items-end mb-4">
                <span className="text-sm text-gray-600">per night</span>
                <span className="text-xl font-semibold text-gray-900">${room.price}</span>
            </div>
            <Button onClick={() => onSelect(room)} className="w-full">
                SELECT
            </Button>
        </div>
    </div>
);

export default RoomCard;