const moment = require("moment");

const loginHandler = (req, res) => {
  const { body: { username, password }} = req;

  if (!username || !password) {
    return res.status(400).json({
      error: "Invalid input. Check your payload."
    });
  }

  const expectedPassword = {
    today: moment().format("YYYYMMDD"),
    tomorrow: moment().add(1, "d").format("YYYYMMDD"),
    yesterday: moment().subtract(1, "d").format("YYYYMMDD"),
  };

  if (expectedPassword[username] !== password) {
    return res.status(401).json({
      error: "unauthenticated"
    });
  }

  return res.status(200).send();
};

module.exports = {
  loginHandler
}
