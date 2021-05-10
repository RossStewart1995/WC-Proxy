const express = require('express');
const morgan = require("morgan");
const proxy = require('express-http-proxy');
const Dotenv = require('dotenv');
const cors = require('cors');

Dotenv.config();

// Create Express Server
const app = express();
// Logging
app.use(morgan('dev'));
app.use(cors());

// Configuration
const PORT = 3003;
const HOST = "localhost";

app.get('/', (req, res) =>  {
    return res.status(200).json({
        message: "Welcome to 40154196 Proxy",
        proxyRouteAdd: "/add",
        proxyRouteSub: "/sub",
        proxyRouteMul: "/mul",
        proxyRouteSquare: "/square",
        proxyRouteExponent: "/exponent",
        proxyRouteModulo: "/modulo",
        });
})

app.use('/add', proxy(process.env.ADD_URL, {
    filter: function(req, res) {
       return req.method == 'GET';
    }
}));

app.use('/sub', proxy(process.env.SUB_URL, {
    filter: function(req, res) {
       return req.method == 'GET';
    }
}));

app.use('/mul', proxy(process.env.MUL_URL, {
    filter: function(req, res) {
       return req.method == 'GET';
    }
}));

app.use('/square', proxy(process.env.SQR_URL, {
    filter: function(req, res) {
       return req.method == 'GET';
    }
}));

app.use('/modulo', proxy(process.env.MOD_URL, {
    filter: function(req, res) {
       return req.method == 'GET';
    }
}));

app.use('/exponent', proxy(process.env.EXP_URL, {
    filter: function(req, res) {
       return req.method == 'GET';
    }
}));

 // Start the Proxy
app.listen(PORT, () => {
    console.log(`Starting Proxy at port:${PORT}`);
 });

 module.exports = app;