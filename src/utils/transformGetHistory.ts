import { HistoryResponse } from "../redux/RTKQuery/historyApi";

export function transformGetHistory(data: HistoryResponse | undefined | null) : [string, string][] | [] {
    if (data) {
        return Object.entries(data).map((item) => [item[0], Object.values(item[1])[0]])
    }
    else return []
}