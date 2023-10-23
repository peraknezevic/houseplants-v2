/*
  Warnings:

  - You are about to drop the column `genusId` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `genusName` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Plant` DROP FOREIGN KEY `Plant_genusId_fkey`;

-- AlterTable
ALTER TABLE `Plant` DROP COLUMN `genusId`,
    ADD COLUMN `genusName` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Plant` ADD CONSTRAINT `Plant_genusName_fkey` FOREIGN KEY (`genusName`) REFERENCES `Genus`(`title`) ON DELETE RESTRICT ON UPDATE CASCADE;
