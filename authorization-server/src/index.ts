import { Main } from "./main";
import express from "express";

new Main(express())
  .run()
  .then(() => {})
  .catch((err) => {
    console.trace(err);
  });
