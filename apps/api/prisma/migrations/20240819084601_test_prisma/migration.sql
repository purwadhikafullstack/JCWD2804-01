/*
  Warnings:

  - You are about to drop the `sample` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `sample`;

-- CreateTable
CREATE TABLE `User` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR(45) NOT NULL,
    `lastname` VARCHAR(45) NOT NULL,
    `email` VARCHAR(45) NOT NULL,
    `phonenumber` DOUBLE NOT NULL,
    `password` VARCHAR(45) NOT NULL,
    `birth` VARCHAR(45) NOT NULL,
    `identitynumber` DOUBLE NOT NULL,
    `address` VARCHAR(45) NOT NULL,
    `gender` VARCHAR(45) NOT NULL,
    `role` VARCHAR(45) NOT NULL,
    `profile_picture` INTEGER NULL,
    `email_verified` BOOLEAN NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Tenant` (
    `tenant_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `business_name` VARCHAR(45) NOT NULL,
    `business_address` VARCHAR(45) NOT NULL,
    `business_phone` DOUBLE NOT NULL,

    PRIMARY KEY (`tenant_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Property` (
    `property_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tenant_id` INTEGER NOT NULL,
    `property_name` VARCHAR(45) NOT NULL,
    `property_location` MEDIUMTEXT NOT NULL,
    `description` LONGTEXT NOT NULL,
    `category_id` INTEGER NOT NULL,
    `is_available` BOOLEAN NOT NULL,
    `property_picture` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`property_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Room` (
    `room_id` INTEGER NOT NULL AUTO_INCREMENT,
    `property_id` INTEGER NOT NULL,
    `room_type` VARCHAR(45) NOT NULL,
    `price` DECIMAL(12, 2) NOT NULL,
    `description` LONGTEXT NOT NULL,
    `is_available` BOOLEAN NOT NULL,
    `room_picture` VARCHAR(45) NOT NULL,
    `adjustprice` DECIMAL(12, 2) NOT NULL,
    `occupants` INTEGER NOT NULL,

    PRIMARY KEY (`room_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Booking` (
    `booking_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `room_id` INTEGER NOT NULL,
    `check_in` VARCHAR(45) NOT NULL,
    `check_out` VARCHAR(45) NOT NULL,
    `status` VARCHAR(45) NOT NULL,
    `total_price` DECIMAL(12, 2) NOT NULL,
    `payment_proof` VARCHAR(45) NOT NULL,

    PRIMARY KEY (`booking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Review` (
    `review_id` INTEGER NOT NULL AUTO_INCREMENT,
    `booking_id` INTEGER NOT NULL,
    `property_id` INTEGER NOT NULL,
    `comment` MEDIUMTEXT NOT NULL,
    `tenant_replay` MEDIUMTEXT NOT NULL,
    `star_rating` INTEGER NOT NULL,
    `total_reviews` INTEGER NOT NULL,
    `average_rating` INTEGER NOT NULL,

    PRIMARY KEY (`review_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sales_Report` (
    `report_id` INTEGER NOT NULL AUTO_INCREMENT,
    `tenant_id` INTEGER NOT NULL,
    `property_id` INTEGER NOT NULL,
    `total_sales` DECIMAL(12, 2) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`report_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Tenant` ADD CONSTRAINT `Tenant_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Property` ADD CONSTRAINT `Property_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `Tenant`(`tenant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Room` ADD CONSTRAINT `Room_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property`(`property_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Booking` ADD CONSTRAINT `Booking_room_id_fkey` FOREIGN KEY (`room_id`) REFERENCES `Room`(`room_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property`(`property_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Review` ADD CONSTRAINT `Review_booking_id_fkey` FOREIGN KEY (`booking_id`) REFERENCES `Booking`(`booking_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales_Report` ADD CONSTRAINT `Sales_Report_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `Tenant`(`tenant_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales_Report` ADD CONSTRAINT `Sales_Report_property_id_fkey` FOREIGN KEY (`property_id`) REFERENCES `Property`(`property_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
