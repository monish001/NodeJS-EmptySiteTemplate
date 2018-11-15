var winston = require("winston");
  require("winston-azure-blob-transport");
 
  var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.AzureBlob)({
        account: {
          name: "superbot002",
          key: "u2WnCmjoo5VyWt5MsgA48u5cNnX853qJjLP8C9i3WkNV917QBWNxmEMoZKF1LjzftDTlaV7wivsL+Z86U0TGCA=="
        },
        containerName: "app-logs-rw",
        blobName: "superbot002",
        nameResolver: { getBlobName: () => 'superbot002' },
        level: "info"
      })
    ]
  });
  
  logger.warn("Test from logger.js!");

  module.exports = logger;
