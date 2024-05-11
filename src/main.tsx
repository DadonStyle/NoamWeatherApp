import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppThemeProvider } from "./themes/AppThemeProvider.tsx";
import { CssBaseline } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { createSyncStoragePersister } from "@tanstack/query-sync-storage-persister";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Routes from "./routes/Routes.tsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const cacheTime = 1000 * 60 * 60 * 24;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: cacheTime,
      staleTime: 1_000 * 60 * 5,
      refetchOnWindowFocus: false,
    },
  },
});

// persist the data for the persisted cities
const persister = createSyncStoragePersister({
  storage: window.localStorage,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <QueryClientProvider client={queryClient}>
        <AppThemeProvider>
          <CssBaseline />
          <ToastContainer />
          <Routes />
        </AppThemeProvider>
        {import.meta.env.PROD ? <></> : <ReactQueryDevtools />}
      </QueryClientProvider>
    </PersistQueryClientProvider>
  </React.StrictMode>
);
