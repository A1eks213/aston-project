import { ResponseParams } from "../RTKQuery/favoritesApi";
import { IPlayer } from "../RTKQuery/playersApi";

export function transformGetFavorites(data: ResponseParams | null | undefined) {
  if (data) {
    const dataArray = Object.values(data)
    const result: IPlayer[] = []
    dataArray.forEach((item) => {
      result.push(Object.values(item)[0])
    })
    return result
  } else {
    return []
  }
}