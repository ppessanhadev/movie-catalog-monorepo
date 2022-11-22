interface HelloProps {
  message?: string;
}

export const Hello: React.FC<HelloProps> = ({ message }) => {
  if (!message) return <></>;
  return <h1>Olá, {message}</h1>;
};
