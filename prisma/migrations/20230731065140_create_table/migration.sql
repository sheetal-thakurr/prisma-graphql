-- CreateEnum
CREATE TYPE "ActiveStatus" AS ENUM ('active', 'inactive', 'deleted');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('user', 'admin');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "user_name" VARCHAR(255),
    "first_name" VARCHAR(255),
    "last_name" VARCHAR(255),
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255),
    "verified" BOOLEAN DEFAULT false,
    "verification_token" VARCHAR(255),
    "reset_password_token" VARCHAR(255),
    "reset_password_sent_at" TIMESTAMPTZ(6),
    "terms_agreed_at" TIMESTAMPTZ(6),
    "role" "UserRole" NOT NULL DEFAULT 'user',
    "active_status" "ActiveStatus" NOT NULL DEFAULT 'active',
    "created_at" TIMESTAMPTZ(6),
    "updated_at" TIMESTAMPTZ(6),
    "phone" VARCHAR(255),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_user_name_key" ON "User"("user_name");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
