/*
  Warnings:

  - You are about to drop the column `genusName` on the `Plant` table. All the data in the column will be lost.
  - Added the required column `genusId` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Plant` DROP FOREIGN KEY `Plant_genusName_fkey`;

-- AlterTable
ALTER TABLE `Plant` DROP COLUMN `genusName`,
    ADD COLUMN `genusId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Plant` ADD CONSTRAINT `Plant_genusId_fkey` FOREIGN KEY (`genusId`) REFERENCES `Genus`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
