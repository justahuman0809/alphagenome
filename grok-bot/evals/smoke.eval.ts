import { defineEval } from "@cursor/bdk/evals";

export default defineEval({
  description: "Grok bot answers a first question and can call now.",
  tags: ["smoke"],
  async test(t) {
    await t.send("What can you help me with?");
    t.succeeded();
  },
});
