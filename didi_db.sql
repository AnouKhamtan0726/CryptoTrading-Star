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

 Date: 21/06/2022 17:03:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

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
-- Table structure for round_infos
-- ----------------------------
DROP TABLE IF EXISTS `round_infos`;
CREATE TABLE `round_infos`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `end_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `open` double NULL DEFAULT 0,
  `close` double NULL DEFAULT 0,
  `high` double NULL DEFAULT 0,
  `low` double NULL DEFAULT 0,
  `volume` double NULL DEFAULT 0,
  `buy_amount` double NULL DEFAULT 0,
  `sell_amount` double NULL DEFAULT 0,
  `result` tinyint(20) NULL DEFAULT 0 COMMENT '1:Buy Won 2:Sell Won',
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 3442 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for transactions
-- ----------------------------
DROP TABLE IF EXISTS `transactions`;
CREATE TABLE `transactions`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(30) NULL DEFAULT NULL,
  `round_id` int(30) NULL DEFAULT NULL,
  `bet_to` tinyint(20) NULL DEFAULT 0 COMMENT '1:To Buy 2:To Sell',
  `is_claimed` tinyint(20) NULL DEFAULT 0,
  `is_live` tinyint(20) NULL DEFAULT 0 COMMENT '0:Not Claimed 1:Claimed',
  `bet_amount` double NULL DEFAULT 0,
  `bet_result` tinyint(20) NULL DEFAULT 0 COMMENT '1:Earn 2:Lost 3:Failed',
  `bet_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 55 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

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
  `demo_amount` double NULL DEFAULT 1000,
  `field_2fa` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `current_status` tinyint(20) NULL DEFAULT 0 COMMENT '1:Live 2:Blocked(bad-user) 3:Blocked(bad-country) 4:Pedding(unverified)',
  `is_deleted` tinyint(1) NULL DEFAULT 0,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 32 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for wallet_transactions
-- ----------------------------
DROP TABLE IF EXISTS `wallet_transactions`;
CREATE TABLE `wallet_transactions`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(30) NULL DEFAULT 0,
  `type` tinyint(20) NULL DEFAULT 0 COMMENT '1:Deposit 2:Withdraw 3:Send_To_Trading_Wallet 4:Send_To_Main_Wallet',
  `from_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
  `to_address` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '0',
  `transaction_at` timestamp(0) NOT NULL DEFAULT current_timestamp(0),
  `amount` double NULL DEFAULT 0,
  `status` tinyint(20) NULL DEFAULT 0 COMMENT '1:Pending 2:Completed',
  `commission` double NULL DEFAULT 0,
  `createdAt` datetime(0) NOT NULL,
  `updatedAt` datetime(0) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 267 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
