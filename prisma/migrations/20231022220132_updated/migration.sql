-- DropForeignKey
ALTER TABLE `Plant` DROP FOREIGN KEY `Plant_genusPageSlug_fkey`;

-- AlterTable
ALTER TABLE `Plant` MODIFY `genusPageSlug` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `Plant` ADD CONSTRAINT `Plant_genusPageSlug_fkey` FOREIGN KEY (`genusPageSlug`) REFERENCES `GenusPage`(`slug`) ON DELETE SET NULL ON UPDATE CASCADE;
