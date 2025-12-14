import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { promptSchema } from "../schema";
import { completePrompt } from "./service";
import type { AppEnv } from "@/backend/hono/context";

export const registerGenerateRoutes = (app: Hono<AppEnv>) => {
	app.post(
		"/api/prompt/complete",
		zValidator("json", promptSchema),
		async (c) => {
			const { prompt } = c.req.valid("json");
			try {
				const result = await completePrompt({ prompt });
				return c.json(result);
			} catch (error: any) {
				return c.json({ error: error.message }, 500);
			}
		}
	);
};
