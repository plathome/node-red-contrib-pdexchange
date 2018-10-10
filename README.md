# node-red-contrib-pdexchange


### PDEx in Node-Red

1. Node-Red node 

![](docs/images/fig1.png?raw=true)

2. Bypassing message payload from input

![](docs/images/fig2.png?raw=true)



### Installation

1. Clone the repository
```
git clone https://github.com/plathome/node-red-contrib-pdexchange.git
```

2. cd to node-red home directory

3. npm install the library 
```
npm install /to/the/directory/node-red-contrib-pdexchange 
```

4. Restart Node-Red Service

5. Example Flow

### Node-Red Importable Format

```
[{"id":"f784bfcb.3124d8","type":"send message","z":"1ab9cd.b9701e33","name":"send message","pdexurl":"http://localhost:8090","accesskey":"72388e46b77f","deviceid":"01.a71aff.00000012","secretkey":"fc5f7822d68a","appid":"1b1cbb1d26a846f2a346a13e02579732","apptoken":"30b381c8cee7","payload":"{a:1,b:2}","payloadType":"str","x":260,"y":320,"wires":[],"inputLabels":["ssss"]},{"id":"3699ac3f.9c7e54","type":"inject","z":"1ab9cd.b9701e33","name":"","topic":"","payload":"","payloadType":"date","repeat":"","crontab":"","once":false,"onceDelay":0.1,"x":160,"y":140,"wires":[["dc5bf157.2a89a8","f784bfcb.3124d8"]]},{"id":"dc5bf157.2a89a8","type":"debug","z":"1ab9cd.b9701e33","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":460,"y":180,"wires":[]}]
```

### Flow in Readable Format

```
[
  {
    "id": "f784bfcb.3124d8",
    "type": "send message",
    "z": "1ab9cd.b9701e33",
    "name": "send message",
    "pdexurl": "http://localhost:8090",
    "accesskey": "72388e46b77f",
    "deviceid": "01.a71aff.00000012",
    "secretkey": "fc5f7822d68a",
    "appid": "1b1cbb1d26a846f2a346a13e02579732",
    "apptoken": "30b381c8cee7",
    "payload": "{a:1,b:2}",
    "payloadType": "str",
    "x": 260,
    "y": 320,
    "wires": [],
    "inputLabels": [
      "ssss"
    ]
  },
  {
    "id": "3699ac3f.9c7e54",
    "type": "inject",
    "z": "1ab9cd.b9701e33",
    "name": "",
    "topic": "",
    "payload": "",
    "payloadType": "date",
    "repeat": "",
    "crontab": "",
    "once": false,
    "onceDelay": 0.1,
    "x": 160,
    "y": 140,
    "wires": [
      [
        "dc5bf157.2a89a8",
        "f784bfcb.3124d8"
      ]
    ]
  },
  {
    "id": "dc5bf157.2a89a8",
    "type": "debug",
    "z": "1ab9cd.b9701e33",
    "name": "",
    "active": true,
    "tosidebar": true,
    "console": false,
    "tostatus": false,
    "complete": "payload",
    "x": 460,
    "y": 180,
    "wires": []
  }
]
```


6. Example Flow 2 Sending Data to PDExchange and Gauge Visualization

### Node-Red Importable Format

![](docs/images/fig3.png?raw=true)

### Flow 2 in Importable Format

```
[{"id":"e9301c9e.87378","type":"function","z":"665cd480.5bc3e4","name":"","func":"\nreturn {\n  payload: msg.payload.count  \n};","outputs":1,"noerr":0,"x":530,"y":340,"wires":[["84fb4acf.9d849","4ac3e3cd.9f1684"]]},{"id":"84fb4acf.9d849","type":"debug","z":"665cd480.5bc3e4","name":"","active":false,"tosidebar":true,"console":false,"tostatus":false,"complete":"false","x":770,"y":340,"wires":[]},{"id":"3ed6f692.c90b52","type":"inject","z":"665cd480.5bc3e4","name":"","topic":"","payload":"","payloadType":"date","repeat":"3","crontab":"","once":false,"onceDelay":"","x":130,"y":80,"wires":[["7a293f6f.0bf26"]]},{"id":"da284c1.ad7ae3","type":"http request","z":"665cd480.5bc3e4","name":"PDEx GET","method":"GET","ret":"obj","url":"http://elias-mbp.iot.platdns.net:8090/api/v1/apps/bbe05a3b11da4da1983a64b35107e514/messages","tls":"","x":290,"y":340,"wires":[["4b3ade5a.f49e9","e9301c9e.87378"]]},{"id":"7a293f6f.0bf26","type":"function","z":"665cd480.5bc3e4","name":"Bearer Auth","func":"msg.payload = \"\"\nmsg.headers = {}\nmsg.headers['Authorization'] = 'Bearer fe895810cabb';\n\nreturn msg;","outputs":1,"noerr":0,"x":170,"y":200,"wires":[["da284c1.ad7ae3"]]},{"id":"4b3ade5a.f49e9","type":"debug","z":"665cd480.5bc3e4","name":"","active":true,"tosidebar":true,"console":false,"tostatus":false,"complete":"payload","x":510,"y":200,"wires":[]},{"id":"4ac3e3cd.9f1684","type":"ui_gauge","z":"665cd480.5bc3e4","name":"","group":"47ae6855.1b39f","order":0,"width":0,"height":0,"gtype":"gage","title":"gauge","label":"units","format":"{{value}}","min":0,"max":10,"colors":["#00b500","#e6e600","#ca3838"],"seg1":"","seg2":"","x":750,"y":460,"wires":[]},{"id":"47ae6855.1b39f","type":"ui_group","z":"665cd480.5bc3e4","name":"Default","tab":"e055f34d.bed8b8","disp":true,"width":"6","collapse":false},{"id":"e055f34d.bed8b8","type":"ui_tab","z":"665cd480.5bc3e4","name":"Home","icon":"dashboard"}]
```

### Flow 2 in Readable Format

```
[
    {
        "id": "e9301c9e.87378",
        "type": "function",
        "z": "665cd480.5bc3e4",
        "name": "",
        "func": "\nreturn {\n  payload: msg.payload.count  \n};",
        "outputs": 1,
        "noerr": 0,
        "x": 530,
        "y": 340,
        "wires": [
            [
                "84fb4acf.9d849",
                "4ac3e3cd.9f1684"
            ]
        ]
    },
    {
        "id": "84fb4acf.9d849",
        "type": "debug",
        "z": "665cd480.5bc3e4",
        "name": "",
        "active": false,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 770,
        "y": 340,
        "wires": []
    },
    {
        "id": "3ed6f692.c90b52",
        "type": "inject",
        "z": "665cd480.5bc3e4",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "3",
        "crontab": "",
        "once": false,
        "onceDelay": "",
        "x": 130,
        "y": 80,
        "wires": [
            [
                "7a293f6f.0bf26"
            ]
        ]
    },
    {
        "id": "da284c1.ad7ae3",
        "type": "http request",
        "z": "665cd480.5bc3e4",
        "name": "PDEx GET",
        "method": "GET",
        "ret": "obj",
        "url": "http://elias-mbp.iot.platdns.net:8090/api/v1/apps/bbe05a3b11da4da1983a64b35107e514/messages",
        "tls": "",
        "x": 290,
        "y": 340,
        "wires": [
            [
                "4b3ade5a.f49e9",
                "e9301c9e.87378"
            ]
        ]
    },
    {
        "id": "7a293f6f.0bf26",
        "type": "function",
        "z": "665cd480.5bc3e4",
        "name": "Bearer Auth",
        "func": "msg.payload = \"\"\nmsg.headers = {}\nmsg.headers['Authorization'] = 'Bearer fe895810cabb';\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 170,
        "y": 200,
        "wires": [
            [
                "da284c1.ad7ae3"
            ]
        ]
    },
    {
        "id": "4b3ade5a.f49e9",
        "type": "debug",
        "z": "665cd480.5bc3e4",
        "name": "",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "payload",
        "x": 510,
        "y": 200,
        "wires": []
    },
    {
        "id": "4ac3e3cd.9f1684",
        "type": "ui_gauge",
        "z": "665cd480.5bc3e4",
        "name": "",
        "group": "47ae6855.1b39f",
        "order": 0,
        "width": 0,
        "height": 0,
        "gtype": "gage",
        "title": "gauge",
        "label": "units",
        "format": "{{value}}",
        "min": 0,
        "max": 10,
        "colors": [
            "#00b500",
            "#e6e600",
            "#ca3838"
        ],
        "seg1": "",
        "seg2": "",
        "x": 750,
        "y": 460,
        "wires": []
    },
    {
        "id": "47ae6855.1b39f",
        "type": "ui_group",
        "z": "665cd480.5bc3e4",
        "name": "Default",
        "tab": "e055f34d.bed8b8",
        "disp": true,
        "width": "6",
        "collapse": false
    },
    {
        "id": "e055f34d.bed8b8",
        "type": "ui_tab",
        "z": "665cd480.5bc3e4",
        "name": "Home",
        "icon": "dashboard"
    }
]
```