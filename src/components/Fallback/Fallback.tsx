import { FallbackProps } from "react-error-boundary";


export function Fallback({error}: FallbackProps) {
  return (
    <div>
      <h2>Возникла непредвиденная ошибка</h2>
      <p>{error.message}</p>
    </div>
  );
}
