// components/RoomList.tsx
import React from 'react';

interface RoomListProps {
  rooms: any[];
  onSelectRoom: (room: any) => void;
}

const RoomList: React.FC<RoomListProps> = ({ rooms, onSelectRoom }) => {
  return (
    <ul className="mt-4 space-y-2">
      {rooms.map((room) => (
        <li
          key={room.room_id}
          onClick={() => onSelectRoom(room)}
          className="cursor-pointer p-4 bg-white rounded-lg shadow hover:bg-gray-100 border border-gray-200"
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">{room.room_type}</span>
            <span className="text-gray-600">${room.price.toFixed(2)}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default RoomList;
