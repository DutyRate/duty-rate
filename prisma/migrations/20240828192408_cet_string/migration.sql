-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RateTable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cet" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "su" TEXT NOT NULL DEFAULT 'U',
    "duty" REAL NOT NULL DEFAULT 0,
    "vat" REAL NOT NULL DEFAULT 0,
    "lvy" INTEGER NOT NULL DEFAULT 0,
    "exc" INTEGER NOT NULL DEFAULT 0,
    "dov" DATETIME NOT NULL,
    "pdf" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_RateTable" ("cet", "createdAt", "desc", "dov", "duty", "exc", "id", "lvy", "pdf", "su", "updatedAt", "vat") SELECT "cet", "createdAt", "desc", "dov", "duty", "exc", "id", "lvy", "pdf", "su", "updatedAt", "vat" FROM "RateTable";
DROP TABLE "RateTable";
ALTER TABLE "new_RateTable" RENAME TO "RateTable";
CREATE UNIQUE INDEX "RateTable_cet_key" ON "RateTable"("cet");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
