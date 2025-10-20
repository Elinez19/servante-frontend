import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  createShipment,
  getShipments,
  getShipmentById,
  updateShipment,
  deleteShipment,
  trackShipment,
  getShipmentStatistics,
} from "./shipmentService";
import { Shipment, CreateShipmentRequest } from "@/types/shipment";

// Async thunks
export const createShipmentAction = createAsyncThunk(
  "shipments/createShipment",
  async (shipmentData: CreateShipmentRequest, { rejectWithValue }) => {
    try {
      const data = await createShipment(shipmentData);
      return data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to create shipment";
      return rejectWithValue(errorMessage);
    }
  }
);

export const getShipmentsAction = createAsyncThunk(
  "shipments/getShipments",
  async (_, { rejectWithValue }) => {
    try {
      // Check network connectivity
      if (!navigator.onLine) {
        return rejectWithValue(
          "No internet connection. Please check your network and try again."
        );
      }

      const data = await getShipments();
      return data;
    } catch (error: unknown) {
      let errorMessage = "Failed to fetch shipments";

      if (error instanceof Error) {
        if (
          error.message.includes("Network Error") ||
          error.message.includes("Unable to connect")
        ) {
          errorMessage =
            "Unable to connect to server. Please check your internet connection and try again.";
        } else if (error.message.includes("timeout")) {
          errorMessage = "Request timed out. Please try again.";
        } else {
          errorMessage = error.message;
        }
      }

      return rejectWithValue(errorMessage);
    }
  }
);

export const getShipmentByIdAction = createAsyncThunk(
  "shipments/getShipmentById",
  async (shipmentId: string, { rejectWithValue }) => {
    try {
      const data = await getShipmentById(shipmentId);
      return data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch shipment";
      return rejectWithValue(errorMessage);
    }
  }
);

export const updateShipmentAction = createAsyncThunk(
  "shipments/updateShipment",
  async (
    { id, data }: { id: string; data: Partial<CreateShipmentRequest> },
    { rejectWithValue }
  ) => {
    try {
      const result = await updateShipment(id, data);
      return result;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to update shipment";
      return rejectWithValue(errorMessage);
    }
  }
);

export const deleteShipmentAction = createAsyncThunk(
  "shipments/deleteShipment",
  async (shipmentId: string, { rejectWithValue }) => {
    try {
      const data = await deleteShipment(shipmentId);
      return data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to delete shipment";
      return rejectWithValue(errorMessage);
    }
  }
);

export const trackShipmentAction = createAsyncThunk(
  "shipments/trackShipment",
  async (trackingNumber: string, { rejectWithValue }) => {
    try {
      const data = await trackShipment(trackingNumber);
      return data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to track shipment";
      return rejectWithValue(errorMessage);
    }
  }
);

export const getShipmentStatisticsAction = createAsyncThunk(
  "shipments/getStatistics",
  async (_, { rejectWithValue }) => {
    try {
      const data = await getShipmentStatistics();
      return data;
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to fetch statistics";
      return rejectWithValue(errorMessage);
    }
  }
);

// State interface
interface ShipmentState {
  shipments: Shipment[];
  currentShipment: Shipment | null;
  isLoading: boolean;
  error: string | null;
  createSuccess: boolean;
  updateSuccess: boolean;
  deleteSuccess: boolean;
  statistics: {
    total: number;
    pending: number;
    inTransit: number;
    delivered: number;
    cancelled: number;
    onHold: number;
  } | null;
}

// Initial state
const initialState: ShipmentState = {
  shipments: [],
  currentShipment: null,
  isLoading: false,
  error: null,
  createSuccess: false,
  updateSuccess: false,
  deleteSuccess: false,
  statistics: null,
};

// Slice
const shipmentSlice = createSlice({
  name: "shipments",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearSuccess: (state) => {
      state.createSuccess = false;
      state.updateSuccess = false;
      state.deleteSuccess = false;
    },
    setCurrentShipment: (state, action: PayloadAction<Shipment | null>) => {
      state.currentShipment = action.payload;
    },
    resetShipmentState: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createShipmentAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createShipmentAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.createSuccess = true;
        state.error = null;
        if (action.payload.data) {
          state.shipments.unshift(action.payload.data);
          state.currentShipment = action.payload.data;
        }
      })
      .addCase(createShipmentAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(getShipmentsAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getShipmentsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        const data = action.payload.data;

        if (Array.isArray(data)) {
          state.shipments = data;
        } else if (data && typeof data === "object") {
          const dataObj = data as Record<string, unknown>;
          if (dataObj._id || dataObj.trackingNumber) {
            state.shipments = [data as Shipment];
          } else {
            const possibleShipments = Object.values(data).find(
              (value) =>
                Array.isArray(value) &&
                value.length > 0 &&
                (value[0] as Record<string, unknown>)._id
            ) as Shipment[] | undefined;
            state.shipments = possibleShipments || [];
          }
        } else {
          state.shipments = [];
        }
        state.error = null;
      })
      .addCase(getShipmentsAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    builder
      .addCase(getShipmentByIdAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getShipmentByIdAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentShipment = action.payload.data || null;
        state.error = null;
      })
      .addCase(getShipmentByIdAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Update Shipment
    builder
      .addCase(updateShipmentAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateShipmentAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.updateSuccess = true;
        state.error = null;
        if (action.payload.data) {
          state.currentShipment = action.payload.data;
          const index = state.shipments.findIndex(
            (shipment) => shipment._id === action.payload.data._id
          );
          if (index !== -1) {
            state.shipments[index] = action.payload.data;
          }
        }
      })
      .addCase(updateShipmentAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Delete Shipment
    builder
      .addCase(deleteShipmentAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteShipmentAction.fulfilled, (state) => {
        state.isLoading = false;
        state.deleteSuccess = true;
        state.error = null;
      })
      .addCase(deleteShipmentAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Track Shipment
    builder
      .addCase(trackShipmentAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(trackShipmentAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentShipment = action.payload.data || null;
        state.error = null;
      })
      .addCase(trackShipmentAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });

    // Get Statistics
    builder
      .addCase(getShipmentStatisticsAction.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getShipmentStatisticsAction.fulfilled, (state, action) => {
        state.isLoading = false;
        state.statistics = action.payload.data;
        state.error = null;
      })
      .addCase(getShipmentStatisticsAction.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

// Export actions
export const {
  clearErrors,
  clearSuccess,
  setCurrentShipment,
  resetShipmentState,
} = shipmentSlice.actions;

// Export reducer
export default shipmentSlice.reducer;
