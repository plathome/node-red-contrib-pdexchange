module.exports = function (RED) {

	function jsonparse(jstr) {
		try {
			var out = JSON.parse(jstr);
			return out;
		}
		catch (e) {
			return "";
		}
	}

	function PdexRESTPublishNode(config) {
		var request = require('request');

		var hmacUri = '/api/v1/utils/hmac';
		var deviceMsgSendUri = '/api/v1/devices/';

		RED.nodes.createNode(this, config);
		var node = this;

		node.on('input', function (msg) {
			var pdexurl = config.pdexurl;
			var accesskey = config.accesskey;
			var deviceid = config.deviceid;
			var secretkey = config.secretkey;
			var appid = config.appid;
			var apptoken = config.apptoken;

			var payloadObject = msg.payload;

			var options_hmac = {
				uri: pdexurl + hmacUri,
				headers: {
					"Content-type": "application/json",
				},
				json: {
					"key": secretkey,
					"message": deviceid,
					"eq_stripped": true
				}
			};

			request.post(options_hmac, function (error, response, body) {
				if (error) {
					node.error(error);
					node.status({ fill: "red", shape: "ring", text: "pdex hmac create failed" });
					return console.log(error);
				}

				var code = (response && response.statusCode);

				if (code == 200) {
					var options_send = {
						uri: pdexurl + deviceMsgSendUri + '/' + deviceid + '/message',
						headers: {
							"Content-type": "application/json",
							'Authorization': 'Bearer ' + body.digest
						},
						json: { payloadObject }
					};

					request.post(options_send, function (error, response, body) {
						if (error) {
							node.error(error);
							node.status({ fill: "red", shape: "ring", text: "pdex data send failed" });
							return console.log(error);
						}

						var code = (response && response.statusCode);

						if (code == 201) {
							var msg = {
								payload: jsonparse(payloadObject),
								transaction: jsonparse(body)
							};
							node.send(msg);
							node.status({});
						}
					});
				}
			});
		});
	}
	RED.nodes.registerType("PD Exchange", PdexRESTPublishNode);
}