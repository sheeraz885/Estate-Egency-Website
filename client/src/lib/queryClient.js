import { QueryClient } from "@tanstack/react-query";

async function throwIfResNotOk(res) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(method, url, data) {
  // For static deployment, we'll mock API responses
  console.warn(`API call to ${method} ${url} - mocked for static deployment`);
  
  // Return mock response for static deployment
  return new Response(JSON.stringify({ message: "Static deployment - API not available" }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

export const getQueryFn = ({ on401: unauthorizedBehavior }) => 
  async ({ queryKey }) => {
    console.warn(`Query ${queryKey.join("/")} - mocked for static deployment`);
    
    if (unauthorizedBehavior === "returnNull") {
      return null;
    }
    
    // Return mock data for static deployment
    return {};
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});