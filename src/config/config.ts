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
    // awsKey: "AKIAZC2N6CIZEBZRFCMU",
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
