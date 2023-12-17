import { ResponseParams } from "../RTKQuery/favoritesApi";
import { IPlayer } from "../RTKQuery/playersApi";

export function transformGetFavorites(data: ResponseParams | null | undefined): IPlayer[] {
  if (data) {
    const dataArray = Object.values(data)
    return dataArray.map((x) => Object.values(x)[0])
  } else {
    return []
  }
}