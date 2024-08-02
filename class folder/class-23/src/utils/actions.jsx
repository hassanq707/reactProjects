import { axios_instance } from "../config/axios_instance";

const get_data = async (end_point) => {

  const response = await axios_instance.get(end_point);

  return response.data;
};

export { get_data };

