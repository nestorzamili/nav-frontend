import { AxiosError } from "axios";

export const handleError = (error: unknown): string => {
  if (error instanceof AxiosError) {
    // Handle error dari Axios
    if (error.response) {
      return error.response.data.message || "Terjadi kesalahan pada server.";
    } else if (error.request) {
      return "Tidak ada respons dari server.";
    } else {
      return "Terjadi kesalahan saat mengirim request.";
    }
  } else if (error instanceof Error) {
    // Handle error umum
    return error.message;
  } else {
    // Handle error yang tidak diketahui
    return "Terjadi kesalahan yang tidak diketahui.";
  }
};
