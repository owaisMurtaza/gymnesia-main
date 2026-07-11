if (typeof global.process === "undefined") {
  (global as any).process = {
    env: { NODE_ENV: "development" },
  };
}
