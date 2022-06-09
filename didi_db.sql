-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 09, 2022 at 09:47 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `didi_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `accounts`
--

CREATE TABLE `accounts` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `main_wallet_address` varchar(255) NOT NULL,
  `trading_wallet_address` varchar(255) NOT NULL,
  `status` tinyint(50) NOT NULL COMMENT '1:Live\r\n2:Blocked(bad-user)\r\n3:Blocked(bad-country)\r\n4:Pedding(unverified)',
  `referral_status` tinyint(1) NOT NULL COMMENT '0:Unreferraled account\r\n1:Referraled account',
  `is_deleted` tinyint(1) NOT NULL COMMENT '1:Deleted\r\n0:Live',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `real_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(50) NOT NULL,
  `role` tinyint(20) NOT NULL COMMENT '1:Main-Admin\r\n2:Account-Admin\r\n3:Trading-Admin',
  `access_setting` tinyint(20) NOT NULL COMMENT '1:Admin\r\n2:Users\r\n3:Referral\r\n4:Trading\r\n4:Billing',
  `email_verify_status` tinyint(1) NOT NULL COMMENT '1:Verified\r\n2:Unverified',
  `phone_verify_status` tinyint(1) NOT NULL COMMENT '1:Verified\r\n2:Unverified',
  `is_deleted` tinyint(1) NOT NULL COMMENT '1:Deleted\r\n0:Live',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `name` tinyint(1) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0:Live\r\n1:Block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `histories`
--

CREATE TABLE `histories` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `phone_codes`
--

CREATE TABLE `phone_codes` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `phone_code` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0:Live\r\n1:Block'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `referrals`
--

CREATE TABLE `referrals` (
  `id` int(11) NOT NULL,
  `account_id` int(11) NOT NULL,
  `referral_status` tinyint(4) NOT NULL COMMENT '0:Unreferraled account\r\n1:Referraled account',
  `from_user_id` int(11) NOT NULL,
  `paid_amount` int(11) NOT NULL,
  `limit_amount` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `rounds`
--

CREATE TABLE `rounds` (
  `id` int(11) NOT NULL,
  `user_id` varchar(255) NOT NULL,
  `started_time` datetime NOT NULL,
  `finished_time` datetime NOT NULL,
  `round_option` tinyint(20) NOT NULL COMMENT '1:Buy\r\n2:Sell',
  `round_result` tinyint(20) NOT NULL COMMENT '1:Successful\r\n2:Failed',
  `total_users` bigint(20) DEFAULT NULL,
  `earned_amount` bigint(20) DEFAULT NULL,
  `lost_amount` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `round_id` int(11) NOT NULL,
  `from_address` varchar(255) NOT NULL,
  `to_address` varchar(255) NOT NULL,
  `status` tinyint(1) NOT NULL COMMENT '1:Successful\r\n2:Failed\r\n3:Pending',
  `trx_time` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `real_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` int(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `refresh_token` varchar(255) NOT NULL,
  `email_verify_code` varchar(255) NOT NULL,
  `email_verify_status` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0:Unverified\r\n1:Verified',
  `email_sent_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `phone_verify_code` varchar(255) NOT NULL,
  `phone_verify_status` tinyint(1) NOT NULL DEFAULT 0,
  `phone_sent_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `current_status` tinyint(20) NOT NULL COMMENT '1:Live\r\n2:Block(bad-user)\r\n3:Block(bad-country)\r\n',
  `is_deleted` tinyint(1) NOT NULL DEFAULT 0 COMMENT '0:Live\r\n1:Deleted',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `real_name`, `email`, `phone`, `password`, `refresh_token`, `email_verify_code`, `email_verify_status`, `email_sent_at`, `phone_verify_code`, `phone_verify_status`, `phone_sent_at`, `current_status`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
(1, 'bigstar', '', 'bigstarcoolmanager@gmail.com', 0, '$2b$10$jqWElwsxd7Vhre1mzPnl7eU9ZVPT0BCC8kSuZeBYWw2u9vZzTUPSS', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsIm5hbWUiOiJiaWdzdGFyIiwiZW1haWwiOiJiaWdzdGFyY29vbG1hbmFnZXJAZ21haWwuY29tIiwiaWF0IjoxNjU0ODAzNTMxLCJleHAiOjE2NTQ4ODk5MzF9.PTEPrethJ1mEPBfwaXUjLosPY_tYrffo1JDW4KVMBfE', '233548', 0, '2022-06-09 19:38:51', '', 0, '2022-06-09 18:43:23', 0, 0, '2022-06-09 18:43:23', '2022-06-09 19:38:51'),
(2, 'bigstar', '', 'cwan961115@gmail.com', 0, '$2b$10$OFlAyjB483O5oPzs.rWL3uIAUMrtSB56syV.NcGzBVzpzAWNWpVhq', '', '903266', 0, '2022-06-09 18:54:09', '', 0, '2022-06-09 18:53:53', 0, 0, '2022-06-09 18:53:53', '2022-06-09 18:55:41');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `accounts`
--
ALTER TABLE `accounts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `histories`
--
ALTER TABLE `histories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `phone_codes`
--
ALTER TABLE `phone_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `referrals`
--
ALTER TABLE `referrals`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rounds`
--
ALTER TABLE `rounds`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `accounts`
--
ALTER TABLE `accounts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `histories`
--
ALTER TABLE `histories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `phone_codes`
--
ALTER TABLE `phone_codes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `referrals`
--
ALTER TABLE `referrals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `rounds`
--
ALTER TABLE `rounds`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
