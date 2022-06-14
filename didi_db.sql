/*
 Navicat Premium Data Transfer

 Source Server         : localhost(mysql)
 Source Server Type    : MySQL
 Source Server Version : 100417
 Source Host           : localhost:3306
 Source Schema         : didi_db

 Target Server Type    : MySQL
 Target Server Version : 100417
 File Encoding         : 65001

 Date: 14/06/2022 13:47:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for accounts
-- ----------------------------
DROP TABLE IF EXISTS `accounts`;
CREATE TABLE `accounts`  (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `main_wallet_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `trading_wallet_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` tinyint(50) NOT NULL COMMENT '1:Live\r\n2:Blocked(bad-user)\r\n3:Blocked(bad-country)\r\n4:Pedding(unverified)',
  `referral_status` tinyint(1) NOT NULL COMMENT '0:Unreferraled account\r\n1:Referraled account',
  `is_deleted` tinyint(1) NOT NULL COMMENT '1:Deleted\r\n0:Live',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for admins
-- ----------------------------
DROP TABLE IF EXISTS `admins`;
CREATE TABLE `admins`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` int(30) NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `refresh_token` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `role` tinyint(20) NULL DEFAULT 0 COMMENT '1:Main-Admin 2:Account-Admin 3:Trading-Admin',
  `access_setting` tinyint(20) NULL DEFAULT 0 COMMENT '1:Admin 2:Users 3:Referral 4:Trading 5:Billing',
  `email_verify_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email_verify_status` tinyint(1) NULL DEFAULT 0,
  `email_sent_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `phone_verify_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone_verify_status` tinyint(1) NULL DEFAULT 0,
  `phone_sent_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `current_status` tinyint(20) NULL DEFAULT 0 COMMENT '1:Live 2:Blocked(bad-user) 3:Blocked(bad-country) 4:Pedding(unverified)',
  `is_deleted` tinyint(1) NULL DEFAULT 0,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for countries
-- ----------------------------
DROP TABLE IF EXISTS `countries`;
CREATE TABLE `countries`  (
  `id` int(11) NOT NULL,
  `name` tinyint(1) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0:Live\r\n1:Block'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for histories
-- ----------------------------
DROP TABLE IF EXISTS `histories`;
CREATE TABLE `histories`  (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `createdAt` datetime(0) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for phone_codes
-- ----------------------------
DROP TABLE IF EXISTS `phone_codes`;
CREATE TABLE `phone_codes`  (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `phone_code` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0:Live\r\n1:Block'
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for referrals
-- ----------------------------
DROP TABLE IF EXISTS `referrals`;
CREATE TABLE `referrals`  (
  `id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `referral_status` tinyint(4) NOT NULL COMMENT '0:Unreferraled account\r\n1:Referraled account',
  `from_user_id` int(11) NOT NULL,
  `paid_amount` int(11) NOT NULL,
  `limit_amount` int(11) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for rounds
-- ----------------------------
DROP TABLE IF EXISTS `rounds`;
CREATE TABLE `rounds`  (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `started_time` datetime(0) NOT NULL,
  `finished_time` datetime(0) NOT NULL,
  `round_option` tinyint(20) NOT NULL COMMENT '1:Buy\r\n2:Sell',
  `round_result` tinyint(20) NOT NULL COMMENT '1:Successful\r\n2:Failed',
  `total_users` bigint(20) NULL DEFAULT NULL,
  `earned_amount` bigint(20) NULL DEFAULT NULL,
  `lost_amount` bigint(20) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for transactions
-- ----------------------------
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions`  (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `round_id` int(11) NOT NULL,
  `from_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `to_address` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `status` tinyint(1) NOT NULL COMMENT '1:Successful\r\n2:Failed\r\n3:Pending',
  `trx_time` datetime(0) NOT NULL
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `first_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `last_name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `country` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `main_wallet` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `main_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `trading_wallet` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `trading_key` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `refresh_token` text CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `email_verify_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `email_verify_status` tinyint(1) NULL DEFAULT 0,
  `email_sent_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `phone_verify_code` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `phone_verify_status` tinyint(1) NULL DEFAULT 0,
  `phone_sent_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `field_2fa` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `current_status` tinyint(20) NULL DEFAULT 0 COMMENT '1:Live 2:Blocked(bad-user) 3:Blocked(bad-country) 4:Pedding(unverified)',
  `is_deleted` tinyint(1) NULL DEFAULT 0,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
