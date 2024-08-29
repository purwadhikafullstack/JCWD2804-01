-- AlterTable
ALTER TABLE `user` ADD COLUMN `verificationToken` VARCHAR(255) NULL,
    ADD COLUMN `verificationTokenExpiry` DATETIME(3) NULL;
