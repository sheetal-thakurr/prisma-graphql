/*
  Warnings:

  - You are about to drop the column `user_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verification_token` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `verified` on the `User` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "User_user_name_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "user_name",
DROP COLUMN "verification_token",
DROP COLUMN "verified";
