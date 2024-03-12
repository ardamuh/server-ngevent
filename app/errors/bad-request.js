const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-api-error");

class badRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    // memberikan statusCode bad request
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = badRequest;
