"use client";
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';  // Import SweetAlert2
import { fetchRooms, createRoom, updateRoom, deleteRoom, createRoomAvailability, createPeakSeasonRate } from '../../utils/api';
import RoomForm from '../../components/section/roommanagement/RoomForm';
import RoomAvailabilityForm from '../../components/section/roommanagement/RoomAvailabilityForm';
import PeakSeasonRateForm from '../../components/section/roommanagement/RoomPeakSeasonForm';
import RoomList from '../../components/section/roommanagement/RoomList';

const RoomsPage: React.FC = () => {
  const [rooms, setRooms] = useState<any[]>([]);
  const [selectedRoom, setSelectedRoom] = useState<any | null>(null);

  useEffect(() => {
    loadRooms();
  }, []);

  const loadRooms = async () => {
    try {
      const data = await fetchRooms();
      setRooms(data);
    } catch (error) {
      console.error('Error fetching rooms:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to load rooms. Please try again later.',
      });
    }
  };

  const handleRoomSelect = (room: any) => {
    setSelectedRoom(room);
  };

  const handleRoomSubmit = async (roomData: any) => {
    try {
      if (selectedRoom) {
        await updateRoom(selectedRoom.room_id, roomData);
        Swal.fire({
          icon: 'success',
          title: 'Room Updated',
          text: 'The room details have been successfully updated.',
        });
      } else {
        await createRoom(roomData);
        Swal.fire({
          icon: 'success',
          title: 'Room Created',
          text: 'A new room has been successfully created.',
        });
      }
      loadRooms();
      setSelectedRoom(null);
    } catch (error) {
      console.error('Error saving room:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Failed to save the room. Please try again.',
      });
    }
  };

  const handleRoomDelete = async (roomId: number) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this room? This action cannot be undone.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteRoom(roomId);
          Swal.fire({
            icon: 'success',
            title: 'Room Deleted',
            text: 'The room has been successfully deleted.',
          });
          loadRooms();
          setSelectedRoom(null);
        } catch (error) {
          console.error('Error deleting room:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Failed to delete the room. Please try again.',
          });
        }
      }
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100">
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
          Room Management
        </h1>

        <div className="mb-8">
          <RoomForm onSubmit={handleRoomSubmit} room={selectedRoom} />
        </div>

        {selectedRoom && (
          <div className="mb-8 space-y-4">
            <RoomAvailabilityForm roomId={selectedRoom.room_id} />
            <PeakSeasonRateForm roomId={selectedRoom.room_id} />
          </div>
        )}

        <RoomList rooms={rooms} onSelectRoom={handleRoomSelect} />

        {selectedRoom && (
          <div className="flex justify-end mt-6">
            <button
              onClick={() => handleRoomDelete(selectedRoom.room_id)}
              className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-5 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Delete Room
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomsPage;
