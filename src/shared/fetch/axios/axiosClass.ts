import axios, { Axios as IAxios } from 'axios';
import { IAxiosClass, IAxiosResponse } from './Interface';

export default class Axios implements IAxiosClass {
  public axios: IAxios;

  constructor(url: string) {
    this.axios = axios.create({
      baseURL: url,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      },
    });
  }

  public async get(url: string) {
    return await this.axios.get(url);
  }

  public async post(url: string, data: IAxiosResponse) {
    return await this.axios.post(url, data);
  }
}
