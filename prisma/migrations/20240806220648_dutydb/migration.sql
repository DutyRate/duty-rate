-- CreateTable
CREATE TABLE "RateTable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cet" INTEGER NOT NULL,
    "desc" TEXT NOT NULL,
    "su" TEXT NOT NULL DEFAULT 'U',
    "duty" INTEGER NOT NULL DEFAULT 0,
    "vat" REAL NOT NULL DEFAULT 0,
    "lvy" INTEGER NOT NULL DEFAULT 0,
    "exc" INTEGER NOT NULL DEFAULT 0,
    "dov" DATETIME NOT NULL,
    "pdf" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "createdById" TEXT NOT NULL
);
INSERT INTO "new_Post" ("createdAt", "createdById", "id", "name", "updatedAt") SELECT "createdAt", "createdById", "id", "name", "updatedAt" FROM "Post";
DROP TABLE "Post";
ALTER TABLE "new_Post" RENAME TO "Post";
CREATE INDEX "Post_name_idx" ON "Post"("name");
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT,
    "role" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_User" ("email", "emailVerified", "id", "image", "name") SELECT "email", "emailVerified", "id", "image", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "RateTable_cet_key" ON "RateTable"("cet");
