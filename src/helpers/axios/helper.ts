import axios, { AxiosResponse } from "axios";

export class ApiClient {
  static baseUrl = process.env.NEXT_PUBLIC_API_URL;
  static externalUrl = process.env.EXTERNAL_API_URL;

  static get = async ({
    url = "",
    token = "",
  } = {}): Promise<AxiosResponse> => {
    return await axios({
      baseURL: this.baseUrl,
      url,
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  static post = async ({
    url = "",
    data = {},
    token = "",
  } = {}): Promise<AxiosResponse> => {
    return await axios({
      baseURL: this.baseUrl,
      url,
      data,
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  static delete = async ({
    url = "",
    token = "",
  } = {}): Promise<AxiosResponse> => {
    return await axios({
      baseURL: this.baseUrl,
      url,
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  static put = async ({
    url = "",
    data = {},
    token = "",
  } = {}): Promise<AxiosResponse> => {
    return await axios({
      baseURL: this.baseUrl,
      url,
      data,
      method: "PUT",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };

  static getExternal = async ({
    url = "",
    token = "",
  } = {}): Promise<AxiosResponse> => {
    return await axios({
      baseURL: this.externalUrl,
      url,
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  };
}
