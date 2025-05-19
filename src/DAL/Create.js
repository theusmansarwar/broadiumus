import { invokeApi } from "../utils/InvokeApi";

export const createLead = async (data) => {
  const reqObj = {
    path: "/CreateLeads",
    method: "POST",
    headers: {
  
    },
    postData: data,
  };
  return invokeApi(reqObj);
};

export const countView = async () => {
  
  const reqObj = {
    path: "/views/count",
    method: "POST",
    headers: {
  
    },
    postData: {},
  };
  return invokeApi(reqObj);
};