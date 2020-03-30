import React, { useContext, createContext, useReducer } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import areArraysIdentical from './utils/areArrayIdentical';

const MemoryContext = createContext();
const DispatchMemoryContext = createContext();

function memoryReducer(state, { type, payload }) {
    switch (type) {
        case 'add palette': {
            if (
                state.length &&
                areArraysIdentical(
                    Object.values(state[0].palette),
                    Object.values(payload.palette)
                )
            ) {
                toast.error('🙁 This palette already exists !', {
                    position: toast.POSITION.BOTTOM_CENTER,
                });
                return state;
            }

            return [...state, payload].reverse();
        }
        case 'remove palette': {
            return state.filter(e => e.createdAt !== payload);
        }
        default:
            throw new Error('No other memory case');
    }
}

export function MemoryProvider({ children }) {
    const [memory, dispatchMemory] = useReducer(memoryReducer, []);

    return (
        <MemoryContext.Provider value={memory}>
            <DispatchMemoryContext.Provider value={dispatchMemory}>
                <ToastContainer />
                {children}
            </DispatchMemoryContext.Provider>
        </MemoryContext.Provider>
    );
}

export function useMemory() {
    const memory = useContext(MemoryContext);

    if (!memory) throw new Error('No memory contest found');

    return memory;
}

export function useDispatchMemory() {
    const dispatchMemory = useContext(DispatchMemoryContext);
    if (!dispatchMemory) throw new Error('WTF HAS GONE >XRONG');
    return dispatchMemory;
}
