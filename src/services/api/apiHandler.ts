import { createAsyncThunk } from "@reduxjs/toolkit";

interface ErrorWithResponse {
  response?: {
    data?: {
      message?: string;
      error?: string;
    };
  };
  message?: string;
}

// Ensure `Returned` can be any type, but provide a more specific type for the result
export const createAsyncThunkWithHandler = <
  Returned = unknown,
  ThunkArg = void
>(
  name: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  thunkFunction: (arg: ThunkArg, thunkAPI: any) => Promise<Returned>
) =>
  createAsyncThunk<Returned, ThunkArg>(name, async (arg, thunkAPI) => {
    try {
      const result = await thunkFunction(arg, thunkAPI);

      // Check if result has a `message` property
      if (result && typeof result === "object" && "message" in result) {
        if (result.message === false) {
          return thunkAPI.rejectWithValue(result.message);
        }
      }

      return result;
    } catch (error: unknown) {
      const err = error as ErrorWithResponse;
      const message =
        (err.response &&
          err.response.data &&
          (err.response.data.message || err.response.data.error)) ||
        err.message ||
        String(error);
      return thunkAPI.rejectWithValue(message);
    }
  });
