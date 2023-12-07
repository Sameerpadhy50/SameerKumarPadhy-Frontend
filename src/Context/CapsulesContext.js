import { createContext, useEffect, useState } from "react";

export const CapsulesContext = createContext();
const CapsulesProvider = ({ children }) => {
  const [capsules, setCapsules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://api.spacexdata.com/v3/capsules`);
      const data = await response.json();

      setCapsules(data);
    };

    fetchData();
  }, []);

  return (
    <CapsulesContext.Provider value={capsules}>
      {children}
    </CapsulesContext.Provider>
  );
};
export default CapsulesProvider;
