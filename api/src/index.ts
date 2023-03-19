import { Application, Request, Response } from "express";
import { request } from "http";
const express = require("express");
const app: Application = express();
/*
app.get("/*", (req: Request, res: Response) => {
  const url: string = req.protocol + "://" + req.get("host") + req.originalUrl;
  // URLをコンソールに出力する
  console.log(url);
  // レスポンスオブジェクトに'Hello World'という文字列を送る
  res.send("Hello World");
});
*/

app.get("/healthcheck", (req: Request, res: Response) => {
  res.send("healthcheck:ok");
  console.log("ok");
});
app.get("/*", (req: Request, res: Response) => {
  res.send("root");
  console.log("get-root");
});
app.listen(3000, () => {
  console.log("start app");
});
