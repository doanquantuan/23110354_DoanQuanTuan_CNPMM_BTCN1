import express from "express"; // cu pháp khác tương đương: var express = require('express');
//javascript theo ES6
let viewEngine = (app) => {
  app.use(express.static("./src/public")); //Thiết lập thư mục tĩnh chứa images, css, ..
  app.set("view engine", "ejs"); //thiết lập viewEngine
  app.set("views", "./src/views"); //thư mục chứa views

  module.exports = viewEngine; //xuat hàm ra
};

export default viewEngine;
