export function deepCopy<T>(obj: T) : T{
    return JSON.parse(JSON.stringify(obj));
}

export function getObjIndexById(arr: Record<"id",number>[], id: number) {
    const index = arr.findIndex(o => o.id === id);
    if (index === -1)
        throw new Error(`Object with id: "${id}" not found`);
    return index;
}

export function isIdExist(arr:  Record<"id",number>[], id: number) {
    return arr.some(o => o.id === id);
}
