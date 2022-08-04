export const config = {
  dev: {
    username: "udagramdev",
    password: "12345yassineGHR1",
    database: "udagramdev",
    host: "udagramdev.crhbfxbjsi2v.us-east-1.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-east-1",
    aws_profile: "default",
    aws_media_bucket: "udagram-624544322098-dev",
    // awsKey: "AKIAYWGCP4BUSK54WUPD",
    // awsSecret: "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",
  },
  jwt: {
    secret: " ",
  },
  prod: {
    username: "",
    password: "",
    database: "udagram_prod",
    host: "",
    dialect: "postgres",
  },
};
