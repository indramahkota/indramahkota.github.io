export default class NetworkServer {
    get<T>(path: string, args?: RequestInit): Promise<T>;
    post<T, B>(path: string, body?: B | undefined, args?: RequestInit): Promise<T>;
}
//# sourceMappingURL=networkServer.d.ts.map