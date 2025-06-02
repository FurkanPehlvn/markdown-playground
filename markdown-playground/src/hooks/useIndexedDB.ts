import { useCallback } from "react";
import { db } from "../db/db";
//save,load hook
export function useIndexedDB(table: "settings" | "documents") {
  const save = useCallback(
    async (key: string, value: string) => {
      if (table === "settings") {
        await db.settings.put({ key, value });
      } else {
        await db.documents.put({ id: key, content: value });
      }
    },
    [table]
  );

  const load = useCallback(
    async (key: string): Promise<string | undefined> => {
      if (table === "settings") {
        const result = await db.settings.get(key);
        return result?.value;
      } else {
        const result = await db.documents.get(key);
        return result?.content;
      }
    },
    [table]
  );

  return { save, load };
}
