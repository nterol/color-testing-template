import React, { useContext, createContext, useReducer } from "react";

const MemoryContext = createContext();
const DispatchMemoryContext = createContext();

function memoryReducer(state, { type, payload }) {
  switch (type) {
    case "add palette": {
      if (state.findIndex(e => e.title === payload.title) !== -1) return state;

      return [...state, payload].reverse();
    }
    case "remove palette": {
      return state.filter(e => e.createdAt !== payload);
    }
    default:
      throw new Error("No other memory case");
  }
}

export function MemoryProvider({ children }) {
  const [memory, dispatchMemory] = useReducer(memoryReducer, []);

  return (
    <MemoryContext.Provider value={memory}>
      <DispatchMemoryContext.Provider value={dispatchMemory}>
        {children}
      </DispatchMemoryContext.Provider>
    </MemoryContext.Provider>
  );
}

export function useMemory() {
  const memory = useContext(MemoryContext);

  if (!memory) throw new Error("No memory contest found");

  return memory;
}

export function useDispatchMemory() {
  const dispatchMemory = useContext(DispatchMemoryContext);
  if (!dispatchMemory) throw new Error("WTF HAS GONE >XRONG");
  return dispatchMemory;
}
