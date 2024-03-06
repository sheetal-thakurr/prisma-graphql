/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `terms_agreed_at` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "role",
DROP COLUMN "terms_agreed_at";

-- DropEnum
DROP TYPE "UserRole";
