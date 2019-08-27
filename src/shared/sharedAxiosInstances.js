import axios from 'axios'

const iexApi = axios.create({
      baseURL: "https://api.iextrading.com/1.0/stock/market"
   });

const iexSandboxApi = axios.create({
      baseURL: "https://sandbox.iexapis.com/stable"
});

const iexSandboxToken = "Tpk_a544a51f73854093a0ec2c3df3a783ce";

export {iexApi, iexSandboxApi, iexSandboxToken};


