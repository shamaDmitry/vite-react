export const jsonLog = (data) => {
    return data ? JSON.stringify(data, null, 2) : '';
}