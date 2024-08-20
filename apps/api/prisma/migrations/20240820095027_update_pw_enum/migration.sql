/*
  Warnings:

  - You are about to alter the column `role` on the `user` table. The data in that column could be lost. The data in that column will be cast from `VarChar(45)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `lastname` VARCHAR(45) NULL,
    MODIFY `phonenumber` DOUBLE NULL,
    MODIFY `password` VARCHAR(255) NOT NULL,
    MODIFY `birth` VARCHAR(45) NULL,
    MODIFY `identitynumber` DOUBLE NULL,
    MODIFY `address` VARCHAR(45) NULL,
    MODIFY `gender` VARCHAR(45) NULL,
    MODIFY `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    MODIFY `email_verified` BOOLEAN NOT NULL DEFAULT false;
