var winston = require("winston");
  require("winston-azure-blob-transport");

  var _getBlobName = () => {
    const currentDate = new Date().toISOString().split('T'); // 2011-10-05, 14:48:00.000Z
    return `superbot-002/${currentDate[0]}/applicationLog.log`
  };
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.AzureBlob)({
        account: {
          name: "superbot002",
          key: "u2WnCmjoo5VyWt5MsgA48u5cNnX853qJjLP8C9i3WkNV917QBWNxmEMoZKF1LjzftDTlaV7wivsL+Z86U0TGCA=="
        },
        containerName: "app-logs-rw",
        // blobName: "superbot-002",
        nameResolver: { getBlobName: _getBlobName },
        level: "info"
      })
    ]
  });
  
  logger.warn("Test from logger.js!");

  module.exports = logger;
