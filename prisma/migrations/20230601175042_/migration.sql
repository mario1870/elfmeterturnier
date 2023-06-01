/*
  Warnings:

  - A unique constraint covering the columns `[teamname]` on the table `Teams` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Teams_teamname_key` ON `Teams`(`teamname`);
