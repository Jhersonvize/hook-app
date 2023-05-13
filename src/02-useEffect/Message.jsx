import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Unmounted");
    };
  }, []);

  return (
    <>
      <h2>Usuario ya existe mdfc</h2>
    </>
  );
};
