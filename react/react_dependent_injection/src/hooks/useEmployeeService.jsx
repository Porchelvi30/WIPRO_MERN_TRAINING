import { useContext } from "react";
import { ServiceContext } from "../context/ServiceContext";

export function useEmployeeService() {
  return useContext(ServiceContext);
}
