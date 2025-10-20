import { axiosClient } from "@/services/api/axiosClient";
import {
  CreateShipmentRequest,
  CreateShipmentResponse,
  GetShipmentsResponse,
  GetShipmentResponse,
} from "@/types/shipment";

// Create a new shipment
export const createShipment = async (
  shipmentData: CreateShipmentRequest
): Promise<CreateShipmentResponse> => {
  const response = await axiosClient.post<CreateShipmentResponse>(
    "/api/shipments",
    shipmentData
  );
  return response.data;
};

// Get all shipments
export const getShipments = async (): Promise<GetShipmentsResponse> => {
  const response = await axiosClient.get<GetShipmentsResponse>(
    "/api/shipments"
  );
  return response.data;
};

// Get a single shipment by ID
export const getShipmentById = async (
  shipmentId: string
): Promise<GetShipmentResponse> => {
  const response = await axiosClient.get<GetShipmentResponse>(
    `/api/shipments/${shipmentId}`
  );
  return response.data;
};

// Update a shipment
export const updateShipment = async (
  id: string,
  data: Partial<CreateShipmentRequest>
): Promise<GetShipmentResponse> => {
  const response = await axiosClient.put<GetShipmentResponse>(
    `/api/shipments/${id}`,
    data
  );
  return response.data;
};

// Delete a shipment
export const deleteShipment = async (
  shipmentId: string
): Promise<{ success: boolean; message: string }> => {
  const response = await axiosClient.delete(`/api/shipments/${shipmentId}`);
  return response.data;
};

// Track shipment by tracking number
export const trackShipment = async (
  trackingNumber: string
): Promise<GetShipmentResponse> => {
  const response = await axiosClient.get<GetShipmentResponse>(
    `/api/shipments/track/${trackingNumber}`
  );
  return response.data;
};

// Get shipment statistics
export const getShipmentStatistics = async (): Promise<{
  success: boolean;
  message: string;
  data: {
    total: number;
    pending: number;
    inTransit: number;
    delivered: number;
    cancelled: number;
    onHold: number;
  };
}> => {
  const response = await axiosClient.get("/api/shipments/statistics");
  return response.data;
};
