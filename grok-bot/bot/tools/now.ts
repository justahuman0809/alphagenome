import { defineTool } from "@cursor/bdk/tools";
import { z } from "zod";

export default defineTool({
  description:
    "Return the current UTC date and time. Use when the user asks what time or day it is, or when an answer depends on now.",
  effect: "read",
  inputSchema: z.object({}),
  async execute() {
    const iso = new Date().toISOString();
    return { utc: iso, unixMs: Date.now() };
  },
});
