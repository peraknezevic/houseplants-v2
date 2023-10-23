/*
  Warnings:

  - You are about to drop the column `genusId` on the `Plant` table. All the data in the column will be lost.
  - You are about to drop the `Genus` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `genus` to the `Plant` table without a default value. This is not possible if the table is not empty.
  - Added the required column `genusPageSlug` to the `Plant` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Plant` DROP FOREIGN KEY `Plant_genusId_fkey`;

-- AlterTable
ALTER TABLE `Plant` DROP COLUMN `genusId`,
    ADD COLUMN `genus` VARCHAR(191) NOT NULL,
    ADD COLUMN `genusPageSlug` VARCHAR(191) NOT NULL,
    MODIFY `slug` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `Genus`;

-- CreateTable
CREATE TABLE `GenusPage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `GenusPage_title_key`(`title`),
    UNIQUE INDEX `GenusPage_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Plant` ADD CONSTRAINT `Plant_genusPageSlug_fkey` FOREIGN KEY (`genusPageSlug`) REFERENCES `GenusPage`(`slug`) ON DELETE RESTRICT ON UPDATE CASCADE;
