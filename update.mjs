#!/usr/bin/env node

import { version } from "./package.json";
import * as api from "spacetraders-kiota-sdk";

async function execute() {
    const client = api.createApiClient();
    const res = await client.get();
    console.log("Res", res);
    if (res.version !== version) {
        // Trigger version update
        console.log("Version update!");
    }
}

(async () => {
    await execute();
})();