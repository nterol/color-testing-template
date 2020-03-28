function areArraysIdentical(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2);
}

export default areArraysIdentical;